import React from 'react'
import { useBaseUrl } from '../hooks/useBaseUrl'
import { useCarousel } from '../hooks/useCarousel'
import slidesData from '../data/slides.json'

function Header() {
  const { getImageUrl } = useBaseUrl();
  const { activeSlide, goToSlide, goToNextSlide, goToPrevSlide } = useCarousel(slidesData.slides.length);

  const renderTitle = (slide) => {
    if (slide.titleBold && slide.titleRegular) {
      return (
        <>
          <b>{slide.titleBold}</b> {slide.titleRegular}
        </>
      );
    }
    return slide.title;
  };

  return (
    <div id="template-mo-zay-hero-carousel" className="carousel slide">
      <ol className="carousel-indicators">
        {slidesData.slides.map((_, index) => (
          <li
            key={index}
            onClick={() => goToSlide(index)}
            className={activeSlide === index ? 'active' : ''}
            data-bs-target="#template-mo-zay-hero-carousel"
            data-bs-slide-to={index}
          ></li>
        ))}
      </ol>
      
      <div className="carousel-inner">
        {slidesData.slides.map((slide, index) => (
          <div key={index} className={`carousel-item ${activeSlide === index ? 'active' : ''}`}>
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img className="img-fluid" src={getImageUrl(slide.image)} alt=""/>
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left align-self-center">
                    <h1 className="h1">{renderTitle(slide)}</h1>
                    <h3 className="h2">{slide.subtitle}</h3>
                    <p>{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a 
        className="carousel-control-prev text-decoration-none w-auto ps-3" 
        href="#template-mo-zay-hero-carousel" 
        role="button" 
        onClick={goToPrevSlide}
      >
        <i className="fas fa-chevron-left"></i>
      </a>
      <a 
        className="carousel-control-next text-decoration-none w-auto pe-3" 
        href="#template-mo-zay-hero-carousel" 
        role="button" 
        onClick={goToNextSlide}
      >
        <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  )
}

export default Header 