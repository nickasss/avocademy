// components/visualizer/VisualizerControls.tsx
"use client";
import React from 'react';

interface VisualizerControlsProps {
  onGenerateArray: () => void;
  onSort: () => void;
  onReset: () => void;
  onSpeedChange: (speed: number) => void;
  isSorting: boolean;
  arraySize: number;
  onArraySizeChange: (size: number) => void;
  currentSpeed: number;
}

const VisualizerControls: React.FC<VisualizerControlsProps> = ({
  onGenerateArray,
  onSort,
  onReset,
  onSpeedChange,
  isSorting,
  arraySize,
  onArraySizeChange,
  currentSpeed,
}) => {
  return (
    <div className="my-6 p-4 bg-[#C5E1A5]/50 rounded-lg shadow flex flex-wrap items-center justify-center gap-3 md:gap-4">
      <button
        onClick={onGenerateArray}
        disabled={isSorting}
        className="bg-[#8BC34A] text-white px-4 py-2 rounded hover:bg-[#689F38] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        New Array
      </button>
      <div className="flex items-center gap-2">
        <label htmlFor="arraySize" className="text-sm font-medium text-[#556B2F]">Size:</label>
        <input
          type="number"
          id="arraySize"
          min="5"
          max="100"
          value={arraySize}
          disabled={isSorting}
          onChange={(e) => onArraySizeChange(parseInt(e.target.value, 10))}
          className="w-20 p-2 border bg-white border-[#8BC34A] rounded text-center text-[#556B2F] disabled:opacity-70"
        />
      </div>
      <button
        onClick={onSort}
        disabled={isSorting || !arraySize} // Disable if no array
        className="bg-[#558B2F] text-white px-4 py-2 rounded hover:bg-[#387002] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Sort
      </button>
      <button
        onClick={onReset}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Reset
      </button>
      <div className="flex items-center gap-2">
        <label htmlFor="speed" className="text-sm font-medium text-[#556B2F]">Speed (ms):</label>
        <select
            id="speed"
            value={currentSpeed}
            onChange={(e) => onSpeedChange(Number(e.target.value))}
            disabled={isSorting}
            className="p-2 border border-[#8BC34A] rounded bg-white disabled:opacity-70"
        >
            <option value={500}>Slow (500ms)</option>
            <option value={250}>Medium (250ms)</option>
            <option value={100}>Fast (100ms)</option>
            <option value={50}>Very Fast (50ms)</option>
            <option value={10}>Lightning (10ms)</option>
        </select>
      </div>
    </div>
  );
};

export default VisualizerControls;