import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./carousel.css";

function Carousel({ homePageMovies }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    lazyload: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings} aria-roledescription="carousel">
        {homePageMovies.slice(0, 5).map((movie, index) => (
          <div key={index}>
            <iframe
              className="carousel-video"
              width="100%"
              height="315"
              src={movie.Trailer_link}
              title={movie.Title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
