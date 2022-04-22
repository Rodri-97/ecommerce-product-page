import "./_ImageSlider.scss";

import ImgProduct1 from "../../images/image-product-1.jpg";
import ImgProduct2 from "../../images/image-product-2.jpg";
import ImgProduct3 from "../../images/image-product-3.jpg";
import ImgProduct4 from "../../images/image-product-4.jpg";

import IconPrevious from "../../images/icon-previous.svg";
import IconNext from "../../images/icon-next.svg";

import ThumbnailProduct1 from "../../images/image-product-1-thumbnail.jpg";
import ThumbnailProduct2 from "../../images/image-product-2-thumbnail.jpg";
import ThumbnailProduct3 from "../../images/image-product-3-thumbnail.jpg";
import ThumbnailProduct4 from "../../images/image-product-4-thumbnail.jpg";

import { useState } from "react";

const ImageSlider = () => {
    const productImages = [ImgProduct1, ImgProduct2, ImgProduct3, ImgProduct4];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const displayPreviousImage = () => {
        let newIndex = currentImageIndex - 1;
        if (newIndex < 0) newIndex += productImages.length;
        setCurrentImageIndex(newIndex);
    }

    const displayNextImage = () => {
        const newIndex = (currentImageIndex + 1) % productImages.length
        setCurrentImageIndex(newIndex);
    }

    const thumbnails = [ThumbnailProduct1, ThumbnailProduct2, ThumbnailProduct3, ThumbnailProduct4]
    const displayedThumbnails = thumbnails.map((thumbnail, index) => {
        return <img 
                    key={index} 
                    src={thumbnail} 
                    alt={`Product ${index} thumbnail`}
                    className="thumbnail" 
               />
    })

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