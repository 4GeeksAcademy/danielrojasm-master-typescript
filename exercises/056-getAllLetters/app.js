"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllLetters(str) {
    // your code here
    let array = [];
    if (str.length === 0) {
        return array;
    }
    else {
        for (let i = 0; i < str.length; i++) {
            array.push(str[i]);
        }
    }
    return array;
}
