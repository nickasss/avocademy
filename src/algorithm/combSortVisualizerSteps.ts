
export interface AnimationStep {
  arrayState: number[];        
  comparing?: [number, number]; 
  swapped?: [number, number];  
  gap: number;
  isFinalState?: boolean;      
  sortedIndices?: number[];     
}

function getNextGap(gap: number): number {
  gap = (gap * 10) / 13;
  if (gap < 1) {
    return 1;
  }
  return Math.floor(gap);
}

export function getCombSortAnimations(initialArray: number[]): AnimationStep[] {
  const animations: AnimationStep[] = [];
  if (!initialArray || initialArray.length === 0) return animations;

  const array = [...initialArray];
  const n = array.length;
  let gap = n;
  let swapped = true;
  let sortedFromEnd = 0; 


  animations.push({ arrayState: [...array], gap, sortedIndices: [] });

  while (gap !== 1 || swapped === true) {
    gap = getNextGap(gap);
    swapped = false;

    const currentSortedIndices = [];
    if (gap === 1) {

        for(let k=n-1; k >= n - sortedFromEnd && k >=0; k--) {
            currentSortedIndices.push(k);
        }
    }


    for (let i = 0; i < n - gap; i++) {

      animations.push({
        arrayState: [...array],
        comparing: [i, i + gap],
        gap,
        sortedIndices: [...currentSortedIndices]
      });

      if (array[i] > array[i + gap]) {

        [array[i], array[i + gap]] = [array[i + gap], array[i]];
        swapped = true;

        animations.push({
          arrayState: [...array],
          swapped: [i, i + gap],
          gap,
          sortedIndices: [...currentSortedIndices]
        });
      }
    }
    if (gap === 1 && !swapped) {

    }
    if (gap === 1) {

        if(swapped) sortedFromEnd = 0;
        else sortedFromEnd++; 

    }
  }

  animations.push({
    arrayState: [...array],
    gap,
    isFinalState: true,
    sortedIndices: array.map((_,idx) => idx)
  });
  return animations;
}