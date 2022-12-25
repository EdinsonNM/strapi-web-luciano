import React, { useContext, useEffect,useState } from "react";
import { CarouselProvider} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselContext } from "pure-react-carousel";
import useWindowSize from "../hooks/windowSize";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import styled from "styled-components";
 import { Program } from "../../../../../domain/models/program";
 import "pure-react-carousel/dist/react-carousel.es.css";
 type Props = {
   data: Program[];
};
export const Programs = ({ data }: Props) => {
  const [slideCount, setSlideCount] = useState(2);
  const [currentSlide, setCurrentSlide] = useState(0);

 
  return (
    <section className="mt-8">
      <h3 className="text-center text-3xl mb-10">
        Conoce nuestros programas de estudio
      </h3>
      <div className="flex flex-col">
      <CarouselWrapper className="carousel-container">
      <CarouselProvider
        visibleSlides={slideCount}
        totalSlides={6}
        step={2}
        currentSlide={currentSlide}
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isIntrinsicHeight={true}
      >
        <CarouselSlider
          data={data}
          setSlideCount={setSlideCount}
          setCurrentSlide={setCurrentSlide}
        />
      </CarouselProvider>
    </CarouselWrapper>
{/*         
      <CarouselWrapper className="carousel-container">      
      <CarouselProvider
        visibleSlides={slideCount}
        totalSlides={6}
        step={1}
        currentSlide={currentSlide}
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isIntrinsicHeight={true}
      ><Wrapper>
        <Slider >
        {data.map((item, index) => (
        <Slide key={`program` + item.id} index={index} className="slide">        
          <CardWrapper>
            {/* <div className="image-container">
              <img src="/lemon.png" alt="lemon" />
            </div> }
            <div className="content">
              <div className="heading">
                <h4 className="group-hover:text-[#F4EBFF] font-bold text-ellipsis overflow-hidden h-16">
                    {item.nombrePrograma}
                  </h4>
                <p className="details__text">
          	      {item.descripcion}
                  <span className="next-line">sed do eiusmod tempor</span>
                </p>
                <button className="details__btn">Conoce mas</button>
              </div>
            </div>
          </CardWrapper>        
        </Slide>
        ))}
        </Slider></Wrapper>
        <div className="controls">
        <ButtonBack className="btn-arrow reverse-arrow">
          <img src={Arrow} alt="arrow" />
        </ButtonBack>
        <DotGroup className="dot-group" />
        <ButtonNext className="btn-arrow">
          <img src={Arrow} alt="arrow" />
        </ButtonNext>
      </div>
      </CarouselProvider>
      </CarouselWrapper> */}
        {/* <CarouselProvider
          naturalSlideWidth={426.6}
          naturalSlideHeight={280}
          totalSlides={data.length}
          orientation="horizontal"
          visibleSlides={3}
          infinite={true}
        >
          <Slider className="max-w-7xl">
            {data.map((item, index) => (
              <Slide key={`program` + item.id} index={index} className="p-6">
                <div
                  role="button"
                  className="group bg-white hover:bg-[#7F56D9] rounded-xl drop-shadow-md px-5 py-7 m-auto w-[340px]"
                >
                  <h4 className="group-hover:text-[#F4EBFF] font-bold text-ellipsis overflow-hidden h-16">
                    {item.nombrePrograma}
                  </h4>
                  <p className="text-sm font-light text-[#c2c2c2] group-hover:text-white text-ellipsis overflow-hidden h-[80px]">
                    {item.descripcion}
                  </p>
                  <a
                    href="#"
                    className="flex flex-row content-start gap-2 mt-4"
                  >
                    <span className="text-[#7F56D9] group-hover:text-white">
                      Conoce mas
                    </span>
                    <svg
                      className="my-auto group-hover:fill-white"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 11.5L6 6.5L1 1.5"
                        stroke="#7F56D9"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </Slide>
            ))}
          </Slider>
        </CarouselProvider> */}
      </div>
    </section>
  );
};
const CarouselWrapper = styled.div`
  &.carousel-container {
    margin: 12px auto;
    max-width: 272px;
    filter: drop-shadow(0px 12px 30px rgba(50, 50, 50, 0.2));

    /* Total-width (including margin) + 1 additional margin */
    @media (min-width: 832px) {
      max-width: 704px;
    }

    @media (min-width: 1088px) {
      max-width: 960px;
    }

    @media (min-width: 1272px) {
      max-width: 1152px;
    }

    @media (min-width: 1504px) {
      max-width: 1344px;
    }
  }

  /* This class is found in Slide from pure-react-carousel */
  /* We need to override it to add space between slides */
  .carousel__inner-slide {
    /* width: 100% - margin */
    width: calc(100% - 16px);
    /* margin-left: margin/2 */
    /* margin is required to adjust positioning as the width is diminished*/
    margin-left: 8px;

    @media (min-width: 1272px) {
      width: calc(100% - 24px);
      margin-left: 12px;
    }

    @media (min-width: 1272px) {
      width: calc(100% - 32px);
      margin-left: 16px;
    }
  }
`;const CardWrapper = styled.div`
border-radius: 8px;
background: #f5f5f6;

.image-container {
  height: 168px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;

  @media (min-width: 832px) {
    height: 192px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.content {
  padding: 24px 16px 31px;

  .heading {
    .heading__title {
      font-weight: 400;
      font-size: 28px;
      padding-bottom: 10px;
      line-height: 34px;
    }

    .heading__subtitle {
      font-weight: 600;
      font-size: 25px;
      color: #4b4c53;
      padding-bottom: 19px;
    }
  }

  .details {
    .details__text {
      font-weight: 200;
      line-height: 26px;
      color: #4b4c53;
      font-size: 15px;
      padding-bottom: 31px;
      word-spacing: 1px;
    }

    .details__btn {
      border: none;
      background: none;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 1px;
      word-spacing: -4px;
      color: #6267a1;
    }
  }

  .next-line {
    display: inline-block;
  }
}
`;
const Wrapper = styled.div`
  .controls {
    display: flex;
    align-items: center;
    justify-content: center;

    .btn-arrow {
      border: none;
      background: none;
      padding: 11px 20px;
    }

    .reverse-arrow {
      transform: rotateY(180deg);
    }

    .dot-group {
      display: flex;
      align-items: center;
      justify-content: center;

      .carousel__dot {
        width: 8px;
        height: 8px;
        border: none;
        border-radius: 50%;
        margin: 0 4px;
        padding: 0;
        background-color: #c3c4ca;
      }

      /* This class is found in DotGroup from pure-react-carousel */
      /* We need to override it to add our styles */
      .carousel__dot--selected {
        width: 16px;
        height: 8px;
        border-radius: 10px;
        background-color: #6267a1;
        transition: background 0.4s ease;
      }
    }
  }
`;
