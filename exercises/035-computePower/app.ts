function computePower(num: number, exponent: number): number {
  // your code here
  let numElevado: number=1;
  for(let i=0;i<exponent;i++){
    numElevado=numElevado*num;
  }
  return numElevado;
}

export {};
