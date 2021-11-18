// NPM packages
import getYouTubeID from "get-youtube-id";
import YouTube from "react-youtube";

interface iProps {
  video: string;
  onPlay: any;
  onPause: any;
}

export default function PlayerControlled({ video, onPlay, onPause }: iProps) {
  const videoId = getYouTubeID(video);

  return (
    <div className="video-container">
      {videoId && (
        <YouTube videoId={videoId} onPlay={onPlay} onPause={onPause} />
      )}
    </div>
  );
};
