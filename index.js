function push(arr, item) {
    const i = arr.length;
    arr[i] = item;
    return arr.length; 
}
// read the array length 
// set the array length +1
// set element by index 
module.exports = { push };

// const array = ['a', 'b', 'c'];
// console.log (push(array, d))