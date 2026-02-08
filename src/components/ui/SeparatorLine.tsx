import { ReactNode } from "react";

interface SeparatorLineProps {
  className?: string;
  color?: "base" | "white" | "black" | "gray";
  thickness?: "1px" | "2px" | "3px";
}

export default function SeparatorLine({ 
  className = "", 
  color = "base",
  thickness = "2px"
}: SeparatorLineProps) {
  const colorClasses = {
    base: "bg-base-color",
    white: "bg-white",
    black: "bg-black",
    gray: "bg-light-medium-gray",
  };

  const thicknessClasses = {
    "1px": "h-[1px]",
    "2px": "h-[2px]",
    "3px": "h-[3px]",
  };

  return (
    <div 
      className={`w-full block ${colorClasses[color]} ${thicknessClasses[thickness]} ${className}`}
    />
  );
}
