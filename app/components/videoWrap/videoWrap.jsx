import Link from "next/link";

const VideoWrap = () => {
  return (
    <div className="video-wrap">
        <div className="conatiner">
        <video className="scroll-video" src="https://videos.pexels.com/video-files/2104648/2104648-hd_1280_720_30fps.mp4" type="video/mp4" preload="auto"></video>

        </div>
    </div>
  );
};

export default VideoWrap;
