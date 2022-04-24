import "./_Lightbox.scss";

import IconClose from "../../images/icon-close.svg";

const Lightbox = (props) => {
    const { lightboxActive, hideLightbox, ImageSlider, isMobile } = props;

    if (!lightboxActive || isMobile) return null;

    return (
        <div className="lightbox">
            <img 
                src={IconClose} 
                alt="Close Icon" 
                className="close-icon" 
                onClick={() => hideLightbox()}
            />
            {ImageSlider}
        </div>
    )
}

export default Lightbox;