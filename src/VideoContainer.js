import React from "react";
import YouTube from "react-youtube";
import TextContainer from "./TextContainer";
class VideoContainer extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm"><TextContainer text={this.props.content.text}></TextContainer></div>
          <div class="col-sm">
            <YouTube videoId={this.props.content.videoId} opts={{height: '350', width: '640'}} />
          </div>
        </div>
      </div>
    );
  }
}

export default VideoContainer;
