import {h} from "preact";
import {shallow, ShallowWrapper} from "enzyme";

import {TestComponent} from "./index";

describe("Test Component", () => {
    let output: ShallowWrapper;
    beforeEach(() => {
        output = shallow((<TestComponent />) as any);
    });

    test("should render without <p> (snapshot)", () => {
        expect(output).toMatchSnapshot();
    });

    test("should render without <p> (.html())", () => {
        expect(output.html()).toBe('<div style="pointer-events: none;"><span>Hello World</span></div>');
    });
});
