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


const flattenObj = (obj, propName, res = {}) => {
    for(const key of Object.keys(obj)){
        const parent = propName ? propName + '.' + key : key;
        if(obj[key].constructor === Object){
            flattenObj(obj[key], parent, res);
        }else{
            res[parent] = obj[key];
        }
    }
  return res;
};

const obj = {
  name: "test",
  address: {
    personal: "abc",
    office: {
      building: 'random',
      street: 'some street'
    }
  }
}

const flattened = flattenObj(obj)
console.log(flattened)