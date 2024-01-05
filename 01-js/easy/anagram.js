/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
// let len = 0;
// str1 = "rail safety"
// str2 = "fairy tales"
// function isAnagram(str1, str2) {
//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();
//     for(let i=0; i<str1.length; i++){
//       for(let j=0; j<str2.length; j++){
//         if(str1[i]==str2[j]){
//           console.log(`${str1[i]}==${str2[j]}`)
//           len = len +  1;
//           break
//         }
//       }
//     }
//     console.log(len)
//     console.log(str1.length)
//     if( len == str1.length){
//       return true;
//     }
//     return false
// }
// console.log(isAnagram(str1,str2))


function isAnagram(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the lengths are different
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // Sort the characters and compare the strings
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Example usage:
const result1 = isAnagram("listen", "silent"); // true
const result2 = isAnagram("hello", "world");  // false

console.log(result1);
console.log(result2);

module.exports = isAnagram;
