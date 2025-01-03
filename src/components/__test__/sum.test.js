import {Sum} from "../Sum";

test("Testing Sum function", ()=>{
  const result = Sum(2,5);

  // Assertion
  expect(result).toBe(7);
});