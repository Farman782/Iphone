import Nav from "./component/Nav";
import Jumbotron from "./component/Jumbotron";
import SoundSection from "./component/SoundSection";
import DisplaySection from "./component/DisplaySection";
import WebGiViewer from "./component/WebGiViewer";
import Loader from "./component/Loader";
import {useRef} from 'react';

function App() {

  const WebGiViewerRef=useRef();
  const handlePreview=()=>{
    WebGiViewerRef.current.triggerPreview();
  }

  const contentRef=useRef();
  return (
    <div className="App">
      <Loader/>
      <div ref={contentRef} id="content">
      <Nav />
      <Jumbotron />
      <SoundSection />
      <DisplaySection triggerPreview={handlePreview} />
      </div>
      
      <WebGiViewer contentRef={contentRef} ref={WebGiViewerRef} />
    </div>
  );
}

export default App;
