import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

const { useState } = React;


var App = () => {

  const [currentList, nextList] = useState(exampleVideoData);
  const [currentPlaying, nextVideo] = useState(exampleVideoData[0]);

  // var clickedVid = function(video) {
  //   nextVideo(video);
  // };

  return (

    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
          <VideoPlayer video={currentPlaying} />
        </div>
        <div className="col-md-5">
          {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
          <VideoList videos={currentList} clicked={nextVideo}/>
        </div>
      </div>
    </div>
  );

};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
