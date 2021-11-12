//NPM Packages
import { FC } from "react";
import getYouTubeID from "get-youtube-id";

interface IProps {
  video: string;
  autoplay: string;
  controls: string;
}

const Player: FC<IProps> = ({ video, autoplay, controls }) => {
  const videoId = getYouTubeID(video);

  return (
    <div className="video-container">
      <iframe
        src={
          `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay}&mute=${autoplay}&showinfo=0&controls=${controls}` /* ?autoplay=1&mute=1&showinfo=0&controls=0 */
        }
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    </div>
  );
};
export default Player;
