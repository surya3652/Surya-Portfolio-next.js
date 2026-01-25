"use client";

import React from 'react';

interface Atropos3DProps {
  children: React.ReactNode;
}

export default function Atropos3D({ children }: Atropos3DProps) {
  return (
    <div className="atropos-wrapper">
      {children}
    </div>
  );
}
