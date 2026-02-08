import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "dark" | "light";
  className?: string;
}

export default function Badge({ 
  children, 
  variant = "dark",
  className = "" 
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-base-color text-white",
    dark: "bg-black text-white",
    light: "bg-white text-black",
  };

  return (
    <span 
      className={`fs-13 lh-36 font-medium px-5 uppercase inline-block ls-1px ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
