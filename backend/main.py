from fastapi import FastAPI, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import PyPDFLoader # Keep this as it is correct
from langchain_google_genai import GoogleGenerativeAIEmbeddings # Corrected import
from langchain_chroma import Chroma # Keep this as it is correct
from dotenv import load_dotenv
import os

# Load environment and configure Gemini
load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

app = FastAPI()

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Persistent vector store (global)
vector_store = None


@app.post("/upload_pdf")
async def upload_pdf(file: UploadFile):
    """Uploads and processes a PDF file into embeddings."""
    global vector_store

    # Save uploaded file temporarily
    path = f"temp_{file.filename}"
    with open(path, "wb") as f:
        f.write(await file.read())

    # Load PDF pages as documents
    loader = PyPDFLoader(path)
    docs = loader.load()

    # Split into overlapping chunks for context
    splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=150)
    chunks = splitter.split_documents(docs)

    # Create and store embeddings
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001") # This is correct
    vector_store = Chroma.from_documents(
        chunks,
        embedding=embeddings,
        persist_directory="./chroma_store"
    )

    os.remove(path)  # clean up temp file
    return {"message": "PDF processed successfully"}


@app.post("/ask")
async def ask(query: str = Form(...)):
    """Handles user questions using RAG over stored PDF."""
    global vector_store
    if vector_store is None:
        return {"error": "Please upload a PDF first."}

    # Find top-3 most relevant chunks
    docs = vector_store.similarity_search(query, k=3)
    context = "\n\n".join([d.page_content for d in docs])

    # Build context prompt
    prompt = f"""
    You are a helpful assistant.
    Answer the question strictly using the context below.

    Context:
    {context}

    Question:
    {query}
    """

    model = genai.GenerativeModel("gemini-2.5-pro")
    response = model.generate_content(prompt)

    return {"answer": response.text.strip()}
