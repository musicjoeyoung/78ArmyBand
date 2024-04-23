import { useState, useEffect } from 'react';
import axios from 'axios';
import './Videos.scss';

const Videos = () => {
    const [videos, setVideos] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [visibleVideos, setVisibleVideos] = useState([]);

    const API_KEY = process.env.REACT_APP_API_KEY;
    const channelId = 'UCnvvkFN8g_YqQDxFx9oQL2w';

    const getVideos = async () => {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`
            );
            setVideos(response.data.items);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getVideos();
    }, []);

    useEffect(() => {
        if (showMore) {
            setVisibleVideos(videos);
        } else {
            setVisibleVideos(videos.slice(0, 6));
        }
    }, [showMore, videos]);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <>
            <h2>YouTube</h2>
            <div className="videos-container">
                {visibleVideos.map((video) => (
                    <iframe
                        key={video.id.videoId}
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.id.videoId}?si=wPRYjmJRG9TiBmxq`}
                        title={video.snippet.title}
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="videos-container__video"
                    ></iframe>
                ))}
            </div>
            <button onClick={toggleShowMore} className="videos-container__button">
                {showMore ? 'Show Less' : 'Show More'}
            </button>
        </>
    );
};

export default Videos;
