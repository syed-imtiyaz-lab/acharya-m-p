import ImageSlider from "./ImageSlider";
import "../ImageSlider/ImageSlider.css";

const Slider = () => {
    const slides = [
        {url: 'https://quotesbook.com/images/quotes/preview/life-quote-time-is-long-but-life-is-short-1543.jpg', title: "Beach"},
        {url: 'https://wallpapershome.com/images/pages/pic_h/24198.jpg', title: "Beach"},
        {url: 'https://wallpapershome.com/images/pages/pic_h/4388.jpg', title: "Beach"},
        {url: 'https://wallpapershome.com/images/pages/pic_h/19836.jpg', title: "Beach"},
        {url: 'https://quotesbook.com/images/quotes/preview/life-quote-life-being-what-it-is-one-dreams-of-revenge-3838.jpg', title: "Beach"},
        {url: 'https://quotesbook.com/images/quotes/preview/motivational-quote-a-change-in-bad-habits-leads-to-a-change-in-life-190.jpg', title: "Beach"},
    ];

    const containerStyles = {
        width: "1200px",
        height: "500px",
        margin: "0 auto",
    };

    return (
        <div className="pimfl"> 
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
        </div>
    );
};

export default Slider;