// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ARRAY FLATTEN~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// function flatten(nested){
//   const flat = [];
//   const handleFlat = (array) => {
//     for(let c = 0; c < array.length; c++){
//       const val = array[c];
//       if (Array.isArray(val)) {
//         handleFlat(val);
//       } else {
//         flat.push(val)
//       }
//     };
//   };
//   handleFlat(nested);
//   return flat;
// }

// // [].concat(..arr)

// let arr = [
//   [1, 2],
//   [3, [1, 2]],
//   [5, 6],[7, 8, 9],
//   [10, 11, 12, 13, 14, 15]
// ];

// console.log(flatten(arr))


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~2ND LARGEST ELEMENT IN ARRAY~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// function secondLargest(arr){
//   if(arr.length < 2) return "length < 2";

//   let maxNum = arr[0];
//   let secondMax = Number.NEGATIVE_INFINITY;

//   for(let i = 1; i < arr.length; i++ ){
//     if (arr[i] >= maxNum) {
//       secondMax = maxNum;
//       maxNum = arr[i];
//     } else if (arr[i] > secondMax) {
//       secondMax = arr[i];
//     }
//   }
//   return secondMax
// }

// let arr = [8,5,5,0,9,2,4,9];

// console.log(secondLargest(arr))


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~OBJECT FLATTEN~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// const flattenObj = (obj, propName, res = {}) => {
//     for(const key of Object.keys(obj)){
//         const parent = propName ? propName + '.' + key : key;
//         if(obj[key].constructor === Object){
//             flattenObj(obj[key], parent, res);
//         }else{
//             res[parent] = obj[key];
//         }
//     }
//   return res;
// };

// const obj = {
//   name: "test",
//   address: {
//     personal: "abc",
//     office: {
//       building: 'random',
//       street: 'some street'
//     }
//   }
// }

// const flattened = flattenObj(obj)
// console.log(flattened)


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~REVERSE A STRING~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function reverseString(str){
//   let res = '';
//   for(let i=0; i<str.length; i++){
//     res += str[str.length - i - 1];
//   }
//   return res;
//   // return str.split('').reverse().join('');
// };


// console.log(reverseString("vikram"))


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PALINDROME STRING OR NOT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function reversedStr(str){
//   let res = '';
//   for (let i=str.length-1; i >= 0; i--){
//     res += str[i]
//   }
//   return res;
// }

// function palindrome(str){
//   if(str.length < 2) return true;
//   let reversed = reversedStr(str);
//   if(reversed === str) return true
//   return false
// }

// console.log(palindrome("viv"));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~MISSING NUMBER IN AN ARRAY~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const arr = [1,2,3,4,6,7,8];

// function missingNumber(arr){
//   for(let i=0; i<arr.length-1; i++){
//     if((arr[i+1]-arr[i])=== 2){
//       return arr[i] + 1;
//     }
//   }
// }

// console.log(missingNumber(arr));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~INTERSECTION OF TWO ARRAY ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const nums1 = [4,9,5], nums2 = [9,4,9,8,4];

// function intersectionArray(num1, num2){
//   const set1 = new Set(num1); 
//   const result = new Set();
//   for (let num of num2) {
//     if (set1.has(num)) {
//         result.add(num);
//     }
//   }
//   return Array.from(result);
// }

// console.log(intersectionArray(nums1,nums2))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~REMOVE DUPLICATES FROM AN ARRAY~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const arr = [1, 2, 3, 4, 4, 5, 5, 6, 0, 0, '0', false, false];;

// function removeDuplicates(arr){
//   let a = {};
//   for(let i=0; i<arr.length; i++){
//     if(!a.hasOwnProperty(arr[i])) a[arr[i]] = true; 
//   };
//   return Object.keys(a).map(key => isNaN(key) ? key : Number(key));
// };

// console.log(removeDuplicates(arr));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~SECOND LARGEST ELEMENT IN ARRAY~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const arr = [10,5,5,0,2,10,4,9];

// function secondLargest(arr){
//   let max = arr[0];
//   let secondMax = Number.NEGATIVE_INFINITY
//   for(let i=1; i<arr.length; i++){
//     if(arr[i] > max){
//       secondMax = max;
//       max = arr[i];
//     }else if(arr[i] < max &&  arr[i] > secondMax){
//       secondMax = arr[i];
//     }
//   }
//   return secondMax;
// };

// console.log(secondLargest([10, 20, 4, 45, 99])); // Output: 45
// console.log(secondLargest([4, 4, 4, 4])); // Output: undefined
// console.log(secondLargest([5])); // Output: undefined
// console.log(secondLargest([10, 10, 10, 9])); // Output: 9

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~LENGTH OF LONGEST SUBSTR WITHOUT REPEATING CHARACTERS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function lengthOfLongestSubstring(s) {
//   let maxLen = 0;
//   let c = '';
//   for(let i=0; i<s.length; i++){
//     if(c.includes(s[i])) {
//       c = s[i]
//     } else {
//       c += s[i]
//       if(maxLen < c.length) {
//         maxLen = c.length
//         console.log(c)
//       }
//     }
//   }
//   return maxLen;
// }

// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
// console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
// console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3 ("wke")
// console.log(lengthOfLongestSubstring("abca"));     // Output: 3 ("abc")