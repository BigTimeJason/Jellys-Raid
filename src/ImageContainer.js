import React from "react";
import TextContainer from "./TextContainer";
class ImageContainer extends React.Component {

    render() {
        return (
            <div class="container">
            <div class="row">
              <div class="col-sm"><TextContainer text={this.props.content.text}></TextContainer></div>
              <div class="col-sm">
                <img src={this.props.content.imgsrc}/>
              </div>
            </div>
          </div>
        );
    }
}

export default ImageContainer;   