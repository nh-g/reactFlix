// NPM packages
import { useState, FC } from "react";

//Local Files
import Modal from "components/Modal";
import { freezeBackground, unFreezeBackground } from "scripts/setBackground";
import iTitle from "types/iTitle";
import ThumbsMeta from "components/shared/ThumbsMeta";

interface iProps {
  item: iTitle;
}

const ThumbsItem: FC<iProps> = ({ item }) => {
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
      <button onClick={openModal}>
        <img src={item.image_url} alt="" className="thumbnail" />
        {item.logo_url ? (
          <img src={item.logo_url} alt="" className="title-illustration" />
        ) : (
          <h3>{item.title}</h3>
        )}
        <ThumbsMeta element={item} />
      </button>
      <Modal element={item} isOpen={isModalOpen} onClose={closeModal} />
    </li>
  );
};
export default ThumbsItem;
