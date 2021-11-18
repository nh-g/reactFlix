// NPM packages
import { useState } from "react";
import reactDom from "react-dom";

// Project files
import exit from "assets/icon/cross.png";
import Episodes from "./Episodes";
import Sorter from "./Sorter";
import PlayerControlled from "./PlayerControlled";
import iTitle from "types/iTitle";
import Meta from "./Meta";

interface iProps {
  element: iTitle;
  isOpen: boolean;
  onClose(): void;
}

export default function Modal({ isOpen, onClose, element }: iProps) {
  const [seasonId, setSeasonId] = useState(1);
  const [video, setVideo] = useState(element.trailer);
  const [showLogo, setShowLogo] = useState(true);

  if (!isOpen) return null;

  return reactDom.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />

      <div className="modal">
        <button className="btn-close" onClick={onClose}>
          <img alt="close" src={exit} />
        </button>

        <div className="illustration">
          <PlayerControlled
            video={video}
            onPlay={() => setShowLogo(false)}
            onPause={() => setShowLogo(true)}
          />
          {showLogo && (
            <div className="block">
              {element.logo_url && (
                <img
                  src={element.logo_url}
                  alt=""
                  className="title-illustration"
                />
              )}
              <h1>{element.title}</h1>
            </div>
          )}
        </div>

        <div className="container">
          <Meta element={element} />

          {element.seasons && element.genre === "series" && (
            <>
              <Sorter data={element.seasons} hook={[seasonId, setSeasonId]} />
              <Episodes
                data={element.seasons}
                seasonId={seasonId}
                setVideo={setVideo}
              />
            </>
          )}
        </div>
      </div>
    </>, //@ts-ignore
    document.getElementById("modal")
  );
}
