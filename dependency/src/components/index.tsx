import {Component, ComponentChildren, h} from "preact";

interface Props {
    children?: ComponentChildren;
}

export class Swipe extends Component<Props> {
    render(props: Props,) {
        return <div style={{pointerEvents: "none"}}>{props.children}</div>;
    }
}
