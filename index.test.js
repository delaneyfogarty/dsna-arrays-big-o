const { push, unshift, hasDuplicates } = require("./index.js");

describe("push", () => {
  it.skip("should add an element to an array", () => {
    const arr = ["a", "b", "c"];
    expect(push(arr, "d")).toBe(4);
    expect(arr.length).toBe(4);
    expect(arr[3]).toBe("d");
  });
});
it.skip("should add an element to the beginning of the array", () => {
  const arr = ["a", "b", "c"];
  expect(unshift(arr, "g")).toBe(4);
  expect(arr.length).toBe(4);
  expect(arr[0].toBe("g"));
});
it('should check to see if there are duplicates in the array', () => {
  const arr1 = ['j', 'o', 'w', 'w'];
  const arr2 = ['m', 'b', 'p', 'x'];
  expect(hasDuplicates(arr1)).toBe(true);
  expect(hasDuplicates(arr2)).toBe(false);
})