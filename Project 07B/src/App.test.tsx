import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Timer from "./Components/Timer/Timer";
describe("App", () => {
  let container: any;

  beforeEach(() => (container = shallow(<App />)));

  it("should render a div", () => {
    expect(container.find("div").length).toEqual(4);
  });
  it("Should render h1 Tag", () => {
    expect(container.find("h1").text()).toContain("React Timer App");
  });

  it("should render the Timer Component", () => {
    expect(container.containsMatchingElement(<Timer />)).toEqual(true);
  });
});
