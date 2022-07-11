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
  const firstSpace = arr[0];
  // create a variable that holds onto the position we are trying to push something into
  // loop through the array
  // add new item
  // return new length of array
  for (let i = arr.length - 1; i > arr.length; i--) {
    firstSpace.push(item);
  }
  return arr.length;
}

module.exports = { push, unshift };

// const array = ['a', 'b', 'c'];
// console.log (push(array, d))
