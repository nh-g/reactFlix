//NPM Packages
import { useState, FC } from "react";

//Local Files
import Modal from "components/modal/Modal";
import { fixBG, unfixBG } from "scripts/modal";
import iTitle from "types/iTitle";
import ThumbsMeta from "components/shared/ThumbsMeta";

interface IProps {
  item: iTitle;
}

const ThumbsItem: FC<IProps> = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
    fixBG();
  }

  function closeModal() {
    setIsModalOpen(false);
    unfixBG();
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
