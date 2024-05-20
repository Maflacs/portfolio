import React, { useState } from "react";
import ImageModal from "./Modal";

import responsivewebdev from "../img/courses/ResponsiveWebDesigne.png";
import javascript from "../img/courses/Javascript.png";
import react from "../img/courses/React.png";
import pythonfree from "../img/courses/Pythonfree.png";
import python from "../img/courses/Python.png";
import programming from "../img/courses/Intro to Programming.png";
import pandas from "../img/courses/Pandas.png";
import dataanalysis from "../img/courses/DataAnalysis.png";
import datavisualization from "../img/courses/Data Visualization.png";
import introml from "../img/courses/Intro to Machine Learning.png";
import interml from "../img/courses/Intermediate Machine Learning.png";
import machinelearning from "../img/courses/MachineLearning.png";
import Container from "./Container";

const Courses = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openModal = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

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

  const handlePrevImage = () => {
    const newIndex = (imageIndex - 1 + totalImages) % totalImages;
    setSelectedImage(images[newIndex]);
    setImageIndex(newIndex);
  };
  
  const handleNextImage = () => {
    const newIndex = (imageIndex + 1) % totalImages;
    setSelectedImage(images[newIndex]);
    setImageIndex(newIndex);
  };
  

  const images = [...freecodeImages, ...kaggleImages];
  const totalImages = images.length;

  return (
    <Container index={1}>
    <div id="courses">
      <h1>Tanfolyamok</h1>
      <div className="certContainer">
        <div className="freecode">
          {freecodeImages.map((imageUrl, index) => (
            <div key={index}>
              <img
                className="cert"
                src={imageUrl}
                alt="certificate"
                onClick={() => openModal(imageUrl, index)}
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
                  openModal(imageUrl, index + freecodeImages.length)
                }
              />
            </div>
          ))}
        </div>
      </div>
      <ImageModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        imageUrl={selectedImage}
        prevImage={handlePrevImage}
        nextImage={handleNextImage}
      />
    </div>
    </Container>
  );
};

export default Courses;
