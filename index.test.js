const { push, unshift } = require("./index.js");

describe("push", () => {
  it("should add an element to an array", () => {
    const arr = ["a", "b", "c"];
    expect(push(arr, "d")).toBe(4);
    expect(arr.length).toBe(4);
    expect(arr[3]).toBe("d");
  });
});
it("should add an element to the beginning of the array", () => {
  const arr = ["a", "b", "c"];
  expect(unshift(arr, "g")).toBe(4);
  expect(arr.length).toBe(4);
  expect(arr[0].toBe("g"));
});
