// NPM packages
import { useState} from "react";

// Project files
import iTitle from "types/iTitle";
import { freezeBackground, unFreezeBackground } from "scripts/setBackground";
import Modal from "components/Modal";
import ThumbnailMeta from "components/shared/ThumbnailMeta";

interface iProps {
  item: iTitle;
  imgPath: any;
}

export default function Thumbs10Item({ item, imgPath }:iProps){
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
    freezeBackground();
  }

  function closeModal() {
    setIsModalOpen(false);
    unFreezeBackground();
  }

  return (
    <li className="track-item">
      
      <Modal element={item} isOpen={isModalOpen} onClose={closeModal} />

      <div className = "card-container" onClick={openModal}>
        <img src={imgPath.default} alt="" className="rank" />
        <div className="wrapper">
          {item.logo_url ? (
            <img src={item.logo_url} alt="" className="title-illustration-10" />
          ) : (
            <h3>{item.title}</h3>
          )}
          <img className="thumb" src={item.image_url} alt="" />
        </div>
        <ThumbnailMeta element={item} />
      </div>
    </li>
  );
};
