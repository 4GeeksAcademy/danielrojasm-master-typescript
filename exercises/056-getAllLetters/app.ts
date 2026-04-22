function getAllLetters(str: string): string[] {
  // your code here
 let array: string[] = [];  
  if (str.length === 0) {
    return array;
  } else {
    for (let i = 0; i < str.length; i++) {
        array.push(str[i]);
  }

}
return array;
}
export {};
