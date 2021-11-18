// NPM packages
import getYouTubeID from "get-youtube-id";

interface iProps {
  video: string;
  autoplay: string;
  controls: string;
}

export default function Player({ video, autoplay, controls }: iProps) {
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
}
