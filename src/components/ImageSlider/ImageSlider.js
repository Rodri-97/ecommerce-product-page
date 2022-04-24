import "./_ImageSlider.scss";

import IconPrevious from "../../images/icon-previous.svg";
import IconNext from "../../images/icon-next.svg";

const ImageSlider = (props) => {
    const { productImages, currentImageIndex, changeCurrentImage, thumbnails, isMobile, showLightbox } = props;
    
    const displayedThumbnails = thumbnails.map((thumbnail, index) => {
        return <div 
                    key={index} 
                    className="thumbnail-container"
                    onClick={() => changeCurrentImage(index)} 
                >
                    <div 
                        className="bright-overlay"
                        style={currentImageIndex === index ? { borderColor: "orange", background: "rgba(255, 255, 255, 0.7)"} : null}
                    ></div>
                    <img 
                        src={thumbnail} 
                        alt={`Product ${index} thumbnail`}
                        className="thumbnail"
                    />
               </div>
    })

    const displayPreviousImage = () => {
        let newIndex = currentImageIndex - 1;
        if (newIndex < 0) newIndex += productImages.length;
        changeCurrentImage(newIndex);
    }

    const displayNextImage = () => {
        const newIndex = (currentImageIndex + 1) % productImages.length
        changeCurrentImage(newIndex);
    }

    return (
        <div className="image-slider">
            <div className="current-image-container">

                <div 
                    className="arrow-container left-arrow-container"
                    onClick={() => displayPreviousImage()}
                >
                    <img src={IconPrevious} alt="Previous Icon" />
                </div>

                <img src={productImages[currentImageIndex]} 
                     alt="Product"
                     className="current-image"
                     onClick={isMobile ? null : () => showLightbox()} 
                />

                <div 
                    className="arrow-container right-arrow-container"
                    onClick={() => displayNextImage()}
                >
                    <img src={IconNext} alt="Next Icon" />
                </div>

            </div>

            <div className="thumbnails-container">
                {displayedThumbnails}
            </div>
        </div>
    )
}

export default ImageSlider;