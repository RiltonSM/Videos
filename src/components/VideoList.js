import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) =>{
    const lista = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    });
    return (
        <div className="ui relaxed divided list">
            {lista}
        </div>
    );
}

export default VideoList;