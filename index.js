function push(arr, item) {
  // arr.length = arr.length -1;
  for (let i = 0; i < arr.length; i++);

  // arr[item] = arr [item + 1]
  return arr.length;
}
// read the array length
// set the array length +1
// set element by index

function unshift(arr, item) {
  const firstSpace = arr[1 - arr.length];
  // create a variable that holds onto the position we are trying to push something into
  // loop through the array
  // add new item
  // return new length of array
  for (let i = arr.length - 1; i > arr.length; i--) {
    arr[i] = item;
  }
  return firstSpace;
}
function hasDuplicates(arr) {
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      if(i !== j){
      } 
    }
  }
  return false
}

module.exports = { push, unshift, hasDuplicates };

// const array = ['a', 'b', 'c'];
// console.log (push(array, d))
