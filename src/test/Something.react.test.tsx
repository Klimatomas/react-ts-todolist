import React from "react";

test("values are equal", () => {
  const a = 1;
  const b = 2;
  const val = a + b;
  expect(val).toEqual(3);
});
