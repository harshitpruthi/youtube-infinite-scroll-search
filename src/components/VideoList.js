import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos , handleVideoSelect}) => {
    return (
        <div>
            {videos.map((video,index) => {
                return <VideoItem key={index} video={video} handleVideoSelect={handleVideoSelect} />
            })}
        </div>
    )
}

export default VideoList;