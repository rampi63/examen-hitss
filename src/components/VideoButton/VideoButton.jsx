import React from "react";
import { VideoButtonStyle } from "./VideoButton.css";
import videoDictionary from "../../utils/videoDictionary";

const VideoButton = ({option, setVideSelected=(e)=>{}, videoSelected}) => {
    
    const videoDict = videoDictionary();

    if(videoSelected === videoDict[option].link){
        return(
            <div className={VideoButtonStyle(true) + ' '}>
                <div className="circle-container">
                    <div className="circle-form pb-4">
                        {videoDict[option].description}
                    </div>
                </div>
                <div className='title font-bold text-center'>
                {option}
                </div>
            </div>
        )
    }else{
        return(
            <div 
                className={VideoButtonStyle() + ' cursor-pointer'}
                onClick={() => {
                    setVideSelected(videoDict[option].link)
                }}
            >
                <img src={videoDict[option].img}/>
                <div className='title font-bold text-center'>
                {option}
                </div>
            </div>
        )
    }
}

export default VideoButton;