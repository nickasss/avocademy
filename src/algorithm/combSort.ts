
function getNextGap(gap: number): number {
  gap = (gap * 10) / 13; 
  if (gap < 1) {
    return 1;
  }
  return Math.floor(gap);
}

export interface Comparable {

}


export function combSort<T extends Comparable>(
  arr: T[],
  compareFn: (a: T, b: T) => number // 
): T[] {
  const n = arr.length;
  let gap = n;
  let swapped = true;
  const arrayCopy = [...arr]; 

  while (gap !== 1 || swapped === true) {
    gap = getNextGap(gap);
    swapped = false;

    for (let i = 0; i < n - gap; i++) {

      if (compareFn(arrayCopy[i], arrayCopy[i + gap]) > 0) {

        [arrayCopy[i], arrayCopy[i + gap]] = [arrayCopy[i + gap], arrayCopy[i]];
        swapped = true;
      }
    }
  }
  return arrayCopy;
}
