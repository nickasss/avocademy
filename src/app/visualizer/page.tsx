// app/visualizer/page.tsx
import type { Metadata } from 'next';
import CombSortVisualizerClient from '@/components/visualizer/CombSortVisualizerClient';
import CombSortDetailsCompact from '@/components/quiz/CombSortDetailsCompact';

export const metadata: Metadata = {
  title: 'Comb Sort Visualizer',
  description: 'Watch the Comb Sort algorithm in action!',
};

export default function VisualizerPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center text-[#558B2F] mb-8">
        Comb Sort Visualizer
      </h1>
      <CombSortVisualizerClient />
      <CombSortDetailsCompact />
    </div>
  );
}