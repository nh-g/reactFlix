//NPM Packages
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";
import { FC } from "react";

interface IProps {
  video: string;
  onPlay: any;
  onPause: any;
}

const PlayerControlled: FC<IProps> = ({ video, onPlay, onPause }) => {
  const videoId = getYouTubeID(video);

  return (
    <div className="video-container">
      {videoId && (
        <YouTube videoId={videoId} onPlay={onPlay} onPause={onPause} />
      )}
    </div>
  );
};
export default PlayerControlled;
