//NPM Packages
import { useState, FC } from "react";

//Local Files
import Modal from "components/modal/Modal";
import { fixBG, unfixBG } from "scripts/modal";
import iTitle from "types/iTitle";
import ThumbsMeta from "components/shared/ThumbsMeta";

interface IProps {
  item: iTitle;
  imgPath: any;
}

const Thumbs10Item: FC<IProps> = ({ item, imgPath }) => {
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
        <img src={imgPath.default} alt="" className="rank" />
        <div className="wrapper">
          {item.logo_url ? (
            <img src={item.logo_url} alt="" className="title-illustration-10" />
          ) : (
            <h3>{item.title}</h3>
          )}
          <img className="thumb" src={item.image_url} alt="" />
        </div>
        <ThumbsMeta element={item} />
      </button>
      <Modal element={item} isOpen={isModalOpen} onClose={closeModal} />
    </li>
  );
};
export default Thumbs10Item;
