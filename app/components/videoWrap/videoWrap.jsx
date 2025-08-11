import Link from "next/link";

const VideoWrap = () => {
  return (
    <div className="video-wrap">
        <div className="conatiner">
        <video className="scroll-video" src="/assets/videos/on-page-scroll-text-overlapping.mp4" type="video/mp4" preload="auto"></video>

        </div>
    </div>
  );
};

export default VideoWrap;
