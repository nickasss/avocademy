
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Bar from './Bar';
import VisualizerControls from './VisualizerControls';
import { getCombSortAnimations, AnimationStep } from '@/algorithm/combSortVisualizerSteps';

const DEFAULT_ARRAY_SIZE = 20;
const DEFAULT_ANIMATION_SPEED_MS = 250;
const MAX_ARRAY_VALUE = 100; 

function generateRandomArray(size: number): number[] {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * MAX_ARRAY_VALUE) + 5); 
  }
  return array;
}

const CombSortVisualizerClient: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [arraySize, setArraySize] = useState<number>(DEFAULT_ARRAY_SIZE);
  const [animationSpeed, setAnimationSpeed] = useState<number>(DEFAULT_ANIMATION_SPEED_MS);
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [isSorted, setIsSorted] = useState<boolean>(false); 

  const [animationSteps, setAnimationSteps] = useState<AnimationStep[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);


  const [comparingIndices, setComparingIndices] = useState<[number, number] | null>(null);
  const [swappedIndices, setSwappedIndices] = useState<[number, number] | null>(null);
  const [currentGap, setCurrentGap] = useState<number | null>(null);
  const [finalSortedIndices, setFinalSortedIndices] = useState<number[]>([]);


  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetArrayAndAnimation = (size = arraySize) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    const newArray = generateRandomArray(size);
    setArray(newArray);
    setAnimationSteps([]);
    setCurrentStepIndex(0);
    setIsSorting(false);
    setIsSorted(false);
    setComparingIndices(null);
    setSwappedIndices(null);
    setCurrentGap(null);
    setFinalSortedIndices([]);
  };

  useEffect(() => {
    resetArrayAndAnimation(arraySize);

  }, [arraySize]); 

  useEffect(() => {

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleGenerateArray = () => {
    resetArrayAndAnimation(arraySize);
  };

  const handleSort = () => {
    if (array.length === 0 || isSorted) {
      resetArrayAndAnimation(); 
      setTimeout(() => { 
        const newArrayForSort = generateRandomArray(arraySize); 
        setArray(newArrayForSort);
        const steps = getCombSortAnimations(newArrayForSort);
        setAnimationSteps(steps);
        setCurrentStepIndex(0);
        setIsSorting(true);
        setIsSorted(false);
        setComparingIndices(null);
        setSwappedIndices(null);
        setCurrentGap(steps[0]?.gap || null);
        setFinalSortedIndices([]);
      }, 50); 
      return;
    }

    const steps = getCombSortAnimations([...array]); // copy 
    setAnimationSteps(steps);
    setCurrentStepIndex(0);
    setIsSorting(true);
    setIsSorted(false);
    setComparingIndices(null);
    setSwappedIndices(null);
    setCurrentGap(steps[0]?.gap || null);
    setFinalSortedIndices([]);
  };

  const handleReset = () => {
    resetArrayAndAnimation(arraySize);
  };

  useEffect(() => {
    if (!isSorting || currentStepIndex >= animationSteps.length) {
      if(isSorting && currentStepIndex >= animationSteps.length && animationSteps.length > 0) {
        setIsSorted(true); 
        const lastStep = animationSteps[animationSteps.length - 1];
        if (lastStep && lastStep.isFinalState) {
            setArray(lastStep.arrayState); 
            setFinalSortedIndices(lastStep.sortedIndices || []);
        }
      }
      setIsSorting(false);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      const step = animationSteps[currentStepIndex];
      setArray(step.arrayState);
      setComparingIndices(step.comparing || null);
      setSwappedIndices(step.swapped || null);
      setCurrentGap(step.gap);

      if(step.isFinalState) {
        setFinalSortedIndices(step.sortedIndices || []);
        setIsSorted(true);
      } else {
        setFinalSortedIndices(step.sortedIndices || []); 
      }



      if (step.swapped) {
        setTimeout(() => setSwappedIndices(null), animationSpeed / 2);
      }

      setCurrentStepIndex(prev => prev + 1);
    }, animationSpeed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

  }, [isSorting, currentStepIndex, animationSteps, animationSpeed]);


  return (
    <div className="flex flex-col items-center">
      <VisualizerControls
        onGenerateArray={handleGenerateArray}
        onSort={handleSort}
        onReset={handleReset}
        onSpeedChange={setAnimationSpeed}
        isSorting={isSorting}
        arraySize={arraySize}
        onArraySizeChange={(size) => {
            if (!isSorting) setArraySize(size);
        }}
        currentSpeed={animationSpeed}
      />

      {currentGap !== null && isSorting && !isSorted && (
        <p className="text-lg text-[#556B2F] my-2">Current Gap: {currentGap}</p>
      )}
      {isSorted && (
        <p className="text-lg text-[#689F38] my-2 font-semibold">Array Sorted!</p>
      )}

      <div
        className="mt-4 flex items-end justify-center border-2 border-[#C5E1A5] p-4 rounded-md bg-white shadow-inner"
        style={{ height: '400px', minWidth: '300px', width: '90%', maxWidth: '1000px' }} // Responsive width
      >
        {array.map((value, idx) => (
          <Bar
            key={idx}
            height={value}
            maxHeight={MAX_ARRAY_VALUE}
            isComparing={comparingIndices?.[0] === idx || comparingIndices?.[1] === idx}
            isSwapping={swappedIndices?.[0] === idx || swappedIndices?.[1] === idx}
            isSorted={finalSortedIndices.includes(idx)}
          />
        ))}
      </div>
      <p className="mt-4 text-sm text-center text-[#795548]/80">
        Visualize the <strong>Comb Sort</strong> algorithm. Bars change color:
        <span style={{ color: '#FFC107' }} className="font-semibold"> Yellow</span> for comparing,
        <span style={{ color: '#E91E63' }} className="font-semibold"> Pink</span> for swapping,
        <span style={{ color: '#C5E1A5' }} className="font-semibold"> Light Green</span> for sorted.
      </p>
    </div>
  );
};

export default CombSortVisualizerClient;