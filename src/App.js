import { AppStyle } from './AppStyle.css';
import Countdown from './components/CountDown/CountDown';
import { useState } from 'react';
import VideoButton from './components/VideoButton/VideoButton';
import videoDictionary from './utils/videoDictionary';
        

function App() {

  const videoDict = videoDictionary()

  const [videoSelected,setVideSelected] = useState(videoDict["TEAM LATAM"].link)
  
  return (
    <div className={AppStyle()}>
      <div className="video py-4 flex flex-column justify-content-center align-items-center">
        <h2 className='mt-0'>
          FALTAN
        </h2>
        <div className='sm:pb-5 pb-1'>
          <Countdown/>
        </div>
        <div className='video-container'>
          <iframe 
            src={videoSelected}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" r
            eferrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className=" select-video flex flex-column justify-content-center align-items-center">
        <h1 className='sm:py-4 py-1 text-center'>
          CLARO SPORTS EN SOCHI 2014
        </h1>
        <div className='video-reel flex flex-row sm:gap-4 gap-1 sm:pb-6 pb-1'>
          {
            Object.keys(videoDict).map(e => {
              return <VideoButton option={e} setVideSelected={(w) => setVideSelected(w)} videoSelected={videoSelected}/>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
