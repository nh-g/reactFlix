// NPM packages
import { useState } from "react";

// Project files
import Modal from "components/Modal";
import { freezeBackground, unFreezeBackground } from "scripts/setBackground";
import iTitle from "types/iTitle";
import playIcon from "assets/icon/play.png";
import infoIcon from "assets/icon/info.png";

interface iProps {
  data: iTitle;
}

export default function Hero({ data }: iProps) {
  //Local states
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
    <>
      <Modal element={data} isOpen={isModalOpen} onClose={closeModal} />

      <section className="block-title">
        {data.logo_url ? (
          <img src={data.logo_url} alt="" className="title-illustration" />
        ) : (
          <h1>{data.title}</h1>
        )}

        <h2>{data.description}</h2>
        <div className="buttons">
          <button className="btn-play" onClick={openModal}>
            <img src={playIcon} alt="" /> Play
          </button>
          <button className="btn-more-info" onClick={openModal}>
            <img src={infoIcon} alt="" />
            More Info
          </button>
        </div>
      </section>
      <section className="hero"></section>
    </>
  );
};
