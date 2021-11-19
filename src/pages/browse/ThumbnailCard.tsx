// NPM packages
import { useState } from "react";

// Project files
import iTitle from "types/iTitle";
import { freezeBackground, unFreezeBackground } from "scripts/setBackground";
import Modal from "components/Modal";
import ThumbnailMeta from "components/shared/ThumbnailMeta";

interface iProps {
  item: iTitle;
}

export default function ThumbnailCard({ item }: iProps) {
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

      <button onClick={openModal}>
        <img src={item.image_url} alt="" className="thumbnail" />
        {item.logo_url ? (
          <img src={item.logo_url} alt="" className="title-illustration" />
        ) : (
          <h3>{item.title}</h3>
        )}
        <ThumbnailMeta element={item} />
      </button>
    </li>
  );
}
