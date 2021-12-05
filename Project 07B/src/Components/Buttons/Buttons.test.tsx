import React from "react";
import { shallow } from "enzyme";
import Buttons from "./Buttons";
describe("App", () => {
  let container: any;

  beforeEach(() => (container = shallow(<Buttons />)));

  it("should render a <button />", () => {
    expect(container.find("button").length).toEqual(1);
  });
});
