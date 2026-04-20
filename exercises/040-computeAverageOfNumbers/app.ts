function computeAverageOfNumbers(nums: unknown[], arg2: number, arg3: unknown): number {
  // your code here
  if (nums.length == 0) return 0;

  let total: number=0;
  for(let i=0; i<nums.length; i++){
    total+=nums[i];
  }
  let promedio: number=total/nums.length;
  return promedio;
}

export {};
