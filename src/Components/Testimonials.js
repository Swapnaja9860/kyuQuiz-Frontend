import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="/images/images10.jpg" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Lecturer at Yale University</h4>
            <p>
            It is a great experience working with this website.
            It is very efficient to use and makes my job very easy. My 
             students also love this website
            </p>
          </div>
        </div>

        <div>
          <img src="/images/image4.jpg" />
          <div className="myCarousel">
            <h3>Diana Keystone</h3>
            <h4>Student at Duke University</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/image6.jpg" />
          <div className="myCarousel">
            <h3>Jenny Sorel</h3>
            <h4>Professor at The Liberty College</h4>
            <p>
            Loved this site!!It proved to be very helpful for 
             me as it provided an amazing platform for me to evaluate 
            my students regularly without much hassle. 
            </p>
          </div>
        </div>

        <div>
          <img src="/images/images11.jpg" />
          <div className="myCarousel">
            <h3>Theo Larry</h3>
            <h4>Student at Saint Francis College</h4>
            <p>
            Absolutely love this website. My lecturers take quiz on it and 
             I love how user friendly this website it.Me and my friends appear for 
             the quizzes in our leisure time.  
            </p>
          </div>
        </div>

        <div>
          <img src="/images/images8.jpg" />
          <div className="myCarousel">
            <h3>Loraine Ellis</h3>
            <h4>Student at MIT</h4>
            <p>
            Great website. It is very informative and quite efficients.The collection of the 
            questions is also very good. No doubt it is gaining so much 
            of popularity.   
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}