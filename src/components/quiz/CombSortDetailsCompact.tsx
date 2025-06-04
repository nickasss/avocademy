
import React from 'react';

interface CombSortDetailsCompactProps {}

const CombSortDetailsCompact: React.FC<CombSortDetailsCompactProps> = () => {
  return (
    <div className="bg-[#F1F8E9] p-4 md:p-6 rounded-lg shadow-md border border-[#C5E1A5] text-[#333] mt-20">
      <h3 className="text-xl font-bold text-[#558B2F] mb-3 text-center">
        Comb Sort: Key Properties
      </h3>

      <div className="space-y-3 text-sm">
        <div>
          <strong className="text-[#689F38]">Time Complexity:</strong>
          <ul className="list-none pl-2 text-[#795548]">
            <li>• Average: <code className="bg-[#E8F5E9] px-1 rounded">O(n log n)</code></li>
            <li>• Worst: <code className="bg-[#E8F5E9] px-1 rounded">O(n²)</code> (rare)</li>
            <li>• Best: <code className="bg-[#E8F5E9] px-1 rounded">O(n)</code> (if pre-sorted & optimized)</li>
          </ul>
        </div>

        <div>
          <strong className="text-[#689F38]">Space Complexity:</strong>
          <ul className="list-none pl-2 text-[#795548]">
            <li>• In-place: <code className="bg-[#E8F5E9] px-1 rounded">O(1)</code></li>
            <li>• With copy: <code className="bg-[#E8F5E9] px-1 rounded">O(n)</code></li>
          </ul>
        </div>

        <div>
          <strong className="text-[#689F38]">Stability:</strong>
          <p className="pl-2 text-[#795548]">
            Not Stable (original order of equal items may change).
          </p>
        </div>
        
        <div>
          <strong className="text-[#689F38]">Mechanism:</strong>
          <p className="pl-2 text-[#795548]">
            Shrinking gap (factor 1.3) to efficiently move distant elements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CombSortDetailsCompact;