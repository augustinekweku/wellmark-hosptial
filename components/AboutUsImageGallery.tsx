import React, { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

const AboutUsImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "assets/img/hitabel-1.jpg",
    "assets/img/hitabel-2.jpg",
    "assets/img/hitabel-3.jpg",
    "assets/img/hitabel-4.jpg",
    "assets/img/hitabel-5.jpg",
    "assets/img/hitabel-6.jpg",
  ];

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div>
      <div className="row g-3 ">
        <div className="col-6 text-start">
          <img
            onClick={() => openImageViewer(0)}
            className="img-fluid  w-100 cursor-pointer rounded"
            src="assets/img/hitabel-1.jpg"
          />
        </div>
        <div className="col-6 text-start">
          <img
            onClick={() => openImageViewer(1)}
            className="img-fluid rounded "
            src="assets/img/hitabel-2.jpg"
            style={{ marginTop: "25%" }}
          />
        </div>
        <div className="col-6 text-end">
          <img
            onClick={() => openImageViewer(2)}
            className="img-fluid rounded w-75"
            src="assets/img/hitabel-3.jpg"
          />
        </div>
        <div className="col-6 text-end">
          <img
            onClick={() => openImageViewer(4)}
            className="img-fluid rounded w-100"
            src="assets/img/hitabel-5.jpg"
          />
        </div>
        <div className="col-6 text-end">
          <img
            onClick={() => openImageViewer(5)}
            className="img-fluid rounded w-100"
            src="assets/img/hitabel-6.jpg"
          />
        </div>
        <div className="col-6 text-end">
          <img
            onClick={() => openImageViewer(3)}
            className="img-fluid rounded w-100"
            src="assets/img/hitabel-4.jpg"
          />
        </div>
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          disableScroll={true}
          currentIndex={currentImage}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};

export default AboutUsImageGallery;
