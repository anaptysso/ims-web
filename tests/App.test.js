import React from "react";
import App from "../src/App.jsx";
import Singin from "../src/components/backboneComponents/account/signin.jsx";

import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App.jsx Testing", () => {
  test("Check if Singin component in exists app div", () => {
    const wrapper = shallow(<App />);

    let result = wrapper.find("#app").find(Singin).exists();

    expect(result).toBeTruthy();
  });
});
