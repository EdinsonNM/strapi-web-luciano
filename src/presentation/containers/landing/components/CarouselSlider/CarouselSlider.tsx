import React, { useContext, useEffect } from "react";

import {
  ButtonBack,
  ButtonNext,
  DotGroup,
  Slide,
  Slider
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselContext } from "pure-react-carousel";

import styled from "styled-components";

import Arrow from "/public/arrow.svg";
import Card from "../Card/Card";
import useWindowSize from "../hooks/windowSize";

const CarouselSlider = ({ setSlideCount, setCurrentSlide,data }) => {
  const screenWidth = useWindowSize();

  //pure-react-carousel context
  const carouselContext = useContext(CarouselContext);

  useEffect(() => {
    const updateCarouselSlide = (slideToBeVisible) => {
      const {
        currentSlide,
        totalSlides,
        visibleSlides
      } = carouselContext.state;

      setSlideCount(slideToBeVisible);

      //this is a fix to reset currentSlide when screen resizes
      if (
        currentSlide >= totalSlides - visibleSlides ||
        currentSlide >= totalSlides - slideToBeVisible
      ) {
        setCurrentSlide(totalSlides - slideToBeVisible);
      }
    };

    if (screenWidth < 832) {
      updateCarouselSlide(1);
    } else if (screenWidth < 1088) {
      updateCarouselSlide(2);
    }
    //>= 1088
    else {
      updateCarouselSlide(3);
    }
  }, [screenWidth, setSlideCount, setCurrentSlide, carouselContext,data]);

  return (
    <Wrapper>
      <Slider>
      {data.map((item, index) => (
        <Slide key={`program` + item.id} index={index} className="slide">
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
        {/* <Slide index={1}>
          <Card />
        </Slide>
        <Slide index={2}>
          <Card />
        </Slide>
        <Slide index={3}>
          <Card />
        </Slide>
        <Slide index={4}>
          <Card />
        </Slide>
        <Slide index={5}>
          <Card />
        </Slide> */}
      </Slider>
      <div className="controls">
        <ButtonBack className="btn-arrow reverse-arrow">
          <img src={Arrow} alt="arrow" />
        </ButtonBack>
        <DotGroup className="dot-group" />
        <ButtonNext className="btn-arrow">
          <img src={Arrow} alt="arrow" />
        </ButtonNext>
      </div>
    </Wrapper>
  );
};

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

export default CarouselSlider;
