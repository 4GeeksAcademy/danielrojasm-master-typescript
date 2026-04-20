function computeAverageLengthOfWords(word1: string, word2: string): number {
  // your code here
  let length1: number = word1.length;
  let length2: number = word2.length;
  let lengthTotal: number = length1+length2;
  return lengthTotal/2;
}

export {};
