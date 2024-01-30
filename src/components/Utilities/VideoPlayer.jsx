"use client"

import { useState } from "react"
const { default: YouTube } = require("react-youtube")

const VideoPlayer = ({ youtubeId }) => {

    const [isOpen, setIsOpen] = useState(true)
    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }
    

    const option = {
        width:"300",
        height:"250"
    }


    const Player = () => {
        return(
            <div className="fixed bottom-2 right-2">
                <button
                    onClick={handleVideoPlayer} 
                    className="text-xl text-color-primary float-right bg-color-secondary px-3 mb-1 border 
                    rounded-full hover:bg-color-danger transition-all">
                X
                </button>
                <YouTube 
                    videoId={youtubeId} 
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                    onError={() => alert("Video is broken, try again")}
                    // style={playerStyle}
                />
            </div>
        )
    }

    const ButtoOpenPlayer = () => {
        return(
            <button 
                onClick={handleVideoPlayer}
                className="rounded fixed bottom-10 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl"
            >
                Toton triler
            </button>
        )
    }
        
    return isOpen ? <Player /> : <ButtoOpenPlayer />
    
}

export default VideoPlayer