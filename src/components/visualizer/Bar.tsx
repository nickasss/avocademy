
"use client";
import React from 'react';

interface BarProps {
  height: number; 
  maxHeight?: number; 
  color?: string;
  isComparing?: boolean;
  isSwapping?: boolean;
  isSorted?: boolean; 
}

const Bar: React.FC<BarProps> = ({
  height,
  maxHeight = 100,
  color = '#8BC34A', 
  isComparing = false,
  isSwapping = false,
  isSorted = false,
}) => {
  let barColor = color;
  if (isSorted) {
    barColor = '#C5E1A5'; 
  }
  if (isSwapping) {
    barColor = '#E91E63'; 
  } else if (isComparing) {
    barColor = '#FFC107'; 
  }

  const barHeightPercentage = (height / maxHeight) * 100;

  return (
    <div
      className="inline-block w-4 md:w-6 mx-0.5 rounded-t-sm transition-all duration-150 ease-in-out" 
      style={{
        height: `${Math.max(barHeightPercentage, 5)}%`, 
        backgroundColor: barColor,
      }}
      title={`${height}`}
    ></div>
  );
};

export default Bar;