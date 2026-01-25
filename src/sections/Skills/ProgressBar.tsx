"use client";

import React from 'react';

interface ProgressBarProps {
  title: string;
  percentage: number;
}

export default function ProgressBar({ title, percentage }: ProgressBarProps) {
  return (
    <div className="progress-bar-wrapper">
      <div className="progress-title">{title}</div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }}>
          <span className="progress-percentage">{percentage}%</span>
        </div>
      </div>
    </div>
  );
}
