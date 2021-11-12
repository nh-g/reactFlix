//NPM Packages
import reactDom from "react-dom";
import { useState, FC } from "react";

//Local Files
import cross from "assets/icns/cross.png";
import Episodes from "./Episodes";
import Sorter from "./Sorter";
import iTitle from "types/iTitle";
import Meta from "./Meta";

interface IProps {
  isOpen: boolean;
  onClose(): void;
  element: iTitle;
}

const Modal: FC<IProps> = ({ isOpen, onClose, element }) => {
  const [seasonId, setSeasonId] = useState(1);
  const [video, setVideo] = useState(element.trailer);
  const [titleVisibility, setTitleVisibility] = useState(true);

  if (!isOpen) return null;
  return reactDom.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />

      <div className="modal">
        <button className="btn-close" onClick={onClose}>
          <img alt="close" src={cross} />
        </button>

        <div className="illustration">
          {/* <div className="gradient" /> disabled : hides the Youtube controls */}
          {titleVisibility && (
            <div className="bloc">
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

          {element.seasons && element.category === "serie" && (
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
};
export default Modal;
