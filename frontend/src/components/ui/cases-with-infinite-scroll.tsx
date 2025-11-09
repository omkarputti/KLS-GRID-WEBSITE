import { motion } from "framer-motion";
import gridLogo from "@/assets/grid-logo.jpeg";

const startups = [
  { name: "TechVenture" },
  { name: "InnoSoft" },
  { name: "DataCore" },
  { name: "CloudSync" },
  { name: "AILabs" },
  { name: "NextGen" },
  { name: "DevFlow" },
  { name: "CodeBase" },
];

export const Case = () => {
  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="flex gap-8 animate-scroll">
        {/* First set */}
        {startups.map((startup, idx) => (
          <div
            key={`first-${idx}`}
            className="flex-shrink-0 w-32 h-32 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center hover:shadow-md transition-shadow p-2"
          >
            <img src={gridLogo} alt={`${startup.name} logo`} className="w-full h-full object-contain rounded-lg" />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {startups.map((startup, idx) => (
          <div
            key={`second-${idx}`}
            className="flex-shrink-0 w-32 h-32 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center hover:shadow-md transition-shadow p-2"
          >
            <img src={gridLogo} alt={`${startup.name} logo`} className="w-full h-full object-contain rounded-lg" />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
