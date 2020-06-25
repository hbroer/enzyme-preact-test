import {h, Component} from "preact";
import {Swipe} from "@notexisting/dependency";

export class TestComponent extends Component {
    render() {
        return (
            <Swipe>
                <span>Hello World</span>
            </Swipe>
        );
    }
}
