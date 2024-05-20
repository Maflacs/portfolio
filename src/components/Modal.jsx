import React from "react";
import Modal from "react-modal";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const ImageModal = ({
  isOpen,
  closeModal,
  imageUrl,
  prevImage,
  nextImage
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <div className="modal">
        <img src={imageUrl} alt="certificate" />
        <div className="modalNav">
        <FaArrowAltCircleLeft
          className="arrow left"
          onClick={prevImage}
        />
        <button className="closebtn" onClick={closeModal}>Close</button>
        <FaArrowAltCircleRight
          className="arrow right"
          onClick={nextImage}
        />
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
