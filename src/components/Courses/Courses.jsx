import React, { useState } from "react"; // Import React and useState hook
import ImageModal from "../Modal/Modal"; // Import ImageModal component
import Container from "../Container/Container"; // Import Container component
import translations from "../../utils/translations"; // Import translations for multilingual support
import "./Courses.css"; // Import CSS for styling

// Import images used in this component
import responsivewebdev from "../../assets/img/courses/ResponsiveWebDesigne.png";
import javascript from "../../assets/img/courses/Javascript.png";
import react from "../../assets/img/courses/React.png";
import pythonfree from "../../assets/img/courses/Pythonfree.png";
import python from "../../assets/img/courses/Python.png";
import programming from "../../assets/img/courses/Intro to Programming.png";
import pandas from "../../assets/img/courses/Pandas.png";
import dataanalysis from "../../assets/img/courses/DataAnalysis.png";
import datavisualization from "../../assets/img/courses/Data Visualization.png";
import introml from "../../assets/img/courses/Intro to Machine Learning.png";
import interml from "../../assets/img/courses/Intermediate Machine Learning.png";
import machinelearning from "../../assets/img/courses/MachineLearning.png";

// Courses component
const Courses = ({ lang }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false); // State for modal open/close status
  const [selectedImage, setSelectedImage] = useState(null); // State for currently selected image
  const [imageIndex, setImageIndex] = useState(0); // State for index of the currently selected image

  const currentLang = translations[lang].titles; // Get the current language titles

  // Function to open the modal and set the selected image and index
  const openModal = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setImageIndex(index);
    setModalIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  // Arrays of images for different courses
  const freecodeImages = [
    responsivewebdev,
    javascript,
    react,
    pythonfree,
    machinelearning,
    dataanalysis,
  ];

  const kaggleImages = [
    datavisualization,
    introml,
    interml,
    python,
    programming,
    pandas,
  ];

  // Function to handle displaying the previous image in the modal
  const handlePrevImage = () => {
    const newIndex = (imageIndex - 1 + totalImages) % totalImages;
    setSelectedImage(images[newIndex]);
    setImageIndex(newIndex);
  };

  // Function to handle displaying the next image in the modal
  const handleNextImage = () => {
    const newIndex = (imageIndex + 1) % totalImages;
    setSelectedImage(images[newIndex]);
    setImageIndex(newIndex);
  };

  // Combine all images into a single array and get the total count
  const images = [...freecodeImages, ...kaggleImages];
  const totalImages = images.length;

  return (
    <Container index={2}> {/* Use Container component with index 2 */}
      <div className="courses">
        <h2>{currentLang[2]}</h2> {/* Display the title for the courses section */}
        <div className="certContainer">
          <div className="freecode">
            {freecodeImages.map((imageUrl, index) => (
              <div key={index}>
                <img
                  className="cert"
                  src={imageUrl}
                  alt="certificate"
                  onClick={() => openModal(imageUrl, index)} // Open modal on image click
                />
              </div>
            ))}
          </div>
          <div className="kaggle">
            {kaggleImages.map((imageUrl, index) => (
              <div key={index}>
                <img
                  className="cert"
                  src={imageUrl}
                  alt="certificate"
                  onClick={() =>
                    openModal(imageUrl, index + freecodeImages.length) // Open modal on image click
                  }
                />
              </div>
            ))}
          </div>
        </div>
        <ImageModal
          isOpen={modalIsOpen} // Pass modal open state
          closeModal={closeModal} // Pass function to close modal
          imageUrl={selectedImage} // Pass selected image URL
          prevImage={handlePrevImage} // Pass function to go to previous image
          nextImage={handleNextImage} // Pass function to go to next image
        />
      </div>
    </Container>
  );
};

export default Courses;
