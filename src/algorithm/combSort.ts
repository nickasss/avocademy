// Helper to get the next gap size
function getNextGap(gap: number): number {
  gap = (gap * 10) / 13; // Shrink factor of 1.3
  if (gap < 1) {
    return 1;
  }
  return Math.floor(gap);
}

export interface Comparable {
  // Objects being sorted should ideally have a way to be compared
  // For primitives, the compareFn handles this.
  // For objects, compareFn will access their properties.
}

// Generic Comb Sort function
export function combSort<T extends Comparable>(
  arr: T[],
  compareFn: (a: T, b: T) => number //  -1 if a < b, 0 if a == b, 1 if a > b
): T[] {
  const n = arr.length;
  let gap = n;
  let swapped = true;
  const arrayCopy = [...arr]; // Work on a copy to avoid mutating original

  while (gap !== 1 || swapped === true) {
    gap = getNextGap(gap);
    swapped = false;

    for (let i = 0; i < n - gap; i++) {
      // Compare arr[i] and arr[i + gap]
      if (compareFn(arrayCopy[i], arrayCopy[i + gap]) > 0) {
        // Swap arr[i] and arr[i + gap]
        [arrayCopy[i], arrayCopy[i + gap]] = [arrayCopy[i + gap], arrayCopy[i]];
        swapped = true;
      }
    }
  }
  return arrayCopy;
}
