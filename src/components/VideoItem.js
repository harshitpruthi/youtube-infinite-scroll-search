import React from 'react';

const VideoItem = ({video, handleVideoSelect}) =>{
    return (
        <div onClick={ () => handleVideoSelect(video)} className='video-item item'>
            <div className="content" style={{ display: 'flex', marginBottom: 20 }}>
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                <div style={{ marginLeft: 20 }}>{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem;