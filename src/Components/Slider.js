import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (<div >
        <Slider {...settings} >
            <div className="slider-wrapper ">
                <div className="card-slider">
                    <div className="card-image-slider">
                        <img src="images/8.png"   />
                    </div>
                    
                    <div className="details">
                        <h2>IBM <span className="job-title"></span></h2>
                    </div>
                </div>
            </div>
            <div className="slider-wrapper">
                <div className="card-slider">
                    <div className="card-image-slider">
                        <img src="images/4.jpg"   />
                    </div>
                   
                    <div className="details">
                        <h2>INSTAGRAM <span className="job-title"></span></h2>
                    </div>
                </div>
            </div>
            <div className="slider-wrapper">
                <div className="card-slider">
                    <div className="card-image-slider">
                        <img src="images/18.png"   />
                    </div>
                    
                    <div className="details">
                        <h2>ADIDAS <span className="job-title"></span></h2>
                    </div>
                </div>
            </div>

            <div className="slider-wrapper">
                <div className="card-slider">
                    <div className="card-image-slider">
                        <img src="images/2.png"   />
                    </div>
                    
                    <div className="details">
                        <h2>AMAZON <span className="job-title"></span></h2>
                    </div>
                </div>
            </div>



            <div className="slider-wrapper">
                <div className="card-slider">
                    <div className="card-image-slider">
                        <img src="images/15.png"  />
                    </div>
                   
                    <div className="details">
                        <h2>ORACLE <span className="job-title"></span></h2>
                    </div>
                </div>
            </div>
            <div className="slider-wrapper">
                <div className="card-slider">
                    <div className="card-image-slider">
                        <img src="images/7.png" />
                    </div>
                   
                    <div className="details">
                        <h2>TWITTER <span className="job-title">s</span></h2>
                    </div>
                </div>
            </div>
            <div className="slider-wrapper">
                <div className="card-slider">
                    <div className="card-image-slider">
                        <img src="images/16.png"  />
                    </div>
                   
                    <div className="details">
                        <h2>FACEBOOK <span className="job-title"></span></h2>
                    </div>
                </div>
            </div>
        </Slider></div>
    )
}

export default ImageSlider

//... is called spread operator

//thanks for watching
//pleae subscribe my channel