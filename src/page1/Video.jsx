import React, { useState } from "react";

const Video = () => {
    const [playVideo, setPlayVideo] = useState(false);

    return (
        <div className="relative  lg:w-full  flex justify-center items-center">

            {!playVideo && (
                < >

                    <img
                        src="/video.png"
                        alt="thumbnail"
                        className="max-w-full h-auto"
                    />

                    <img
                        src="/btn.png"
                        alt="play"
                        className="absolute cursor-pointer  "
                        onClick={() => setPlayVideo(true)}
                    />

                </>
            )}

            {playVideo && (
                <iframe
                    width="550"
                    height="450"
                    className="rounded-2xl max-[540px]:w-102.5  lg:w-126 lg:h-100 max-[440px]:w-77.5 max-[330px]:w-60 max-[330px]:h-60 mx-2"
                    src="https://www.youtube.com/embed/BRW2qLi9YDM?autoplay=1"
                    title="YouTube video player"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            )}

        </div>
    );
};

export default Video;
