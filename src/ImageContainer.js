import React from "react";
import TextContainer from "./TextContainer";
import Frog from "./img/gardenimg/Frog.png"
import Image from 'react-bootstrap/Image'

class ImageContainer extends React.Component {

    render() {
        return (
            <div class="container">
            <div class="row">
              <div class="col-sm"><TextContainer text={this.props.content.text}></TextContainer></div>
              <div class="col-sm">
                <Image src={this.props.content.imgsrc}/>
              </div>
            </div>
          </div>
        );
    }
}

export default ImageContainer;   