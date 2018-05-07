import React from "react";
import renderer from "react-test-renderer";
import EmptyToDoList from "../components/EmptyToDoList";

test("Empty todo list gets rendered", () => {
  const component = renderer.create(<EmptyToDoList />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test ("kokot sa stane", () => {
  const a = 1;
  const b = 2;
  const val = a+b;
  expect(val).toEqual(3);
})