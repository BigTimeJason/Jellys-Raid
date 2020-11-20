import React from "react";
import ReactMarkdown from "react-markdown";
class TextContainer extends React.Component {

    render() {
        return (
            <ReactMarkdown>{this.props.text}</ReactMarkdown>
        );
    }
}

export default TextContainer;   