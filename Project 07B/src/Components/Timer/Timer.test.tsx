import React from "react";
import { shallow } from "enzyme";
import Timer from "./Timer";

describe("Timer", () => {
  let container: any;

  beforeEach(() => (container = shallow(<Timer />)));

  it("should render  3 Divs", () => {
    expect(container.find("div").length).toEqual(3);
  });
  it("should render  1 Span", () => {
    expect(container.find("span").length).toEqual(1);
  });
  it("should render a allButtons Div", () => {
    expect(container.find(".allButtons").length).toEqual(1);
  });
    it("should render  3 Button Component", () => {
      expect(container.find("Buttons").length).toEqual(3);
    });
    it("should render  initial Value of State (SPAN)", () => {
      expect(container.find("span").text()).toEqual("0:0:0");
    });
  
});
