import React from "react"; // Import React
import Modal from "react-modal"; // Import Modal component from react-modal library
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"; // Import left and right arrow icons from react-icons/fa
import { FaWindowClose } from "react-icons/fa"; // Import close icon from react-icons/fa

import "./Modal.css"; // Import the CSS file for styling the modal

// ImageModal component
const ImageModal = ({
  isOpen, // Prop to check if the modal is open
  closeModal, // Prop to close the modal
  imageUrl, // Prop for the image URL to be displayed in the modal
  prevImage, // Prop to navigate to the previous image
  nextImage // Prop to navigate to the next image
}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}> {/* Modal component with isOpen and onRequestClose props */}
      <div className="modal">
        <img src={imageUrl} alt="certificate" /> {/* Display the image */}
        <div className="modalNav">
          <FaArrowAltCircleLeft
            className="arrow left"
            onClick={prevImage}
          /> {/* Left arrow for navigating to the previous image */}
          <FaWindowClose className="closebtn" onClick={closeModal}/> {/* Close button to close the modal */}
          <FaArrowAltCircleRight
            className="arrow right"
            onClick={nextImage}
          /> {/* Right arrow for navigating to the next image */}
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal; // Export the ImageModal component
