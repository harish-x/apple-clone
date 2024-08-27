import React, { useState, useImperativeHandle, forwardRef } from "react";
import {
  sliderimg1,
  sliderimg2,
  sliderimg3,
  sliderimg4,
  sliderimg5,
  sliderimg6,
} from "../utils";
import "./components.css"

const ImgSlider = forwardRef((props, ref) => {
  const [imgIndex, setImgIndex] = useState(0);
  const imgArr = [
    sliderimg1,
    sliderimg2,
    sliderimg3,
    sliderimg4,
    sliderimg5,
    sliderimg6,
  ];
props.getfunc({imgIndex})
  const prevImg = () => {
    setImgIndex((index) => {
      if (index === 0) return imgArr.length - 1;
      return index - 1;
    });
  };

  const nextImg = () => {
    setImgIndex((index) => {
      if (index === imgArr.length - 1) return 0;
      return index + 1;
    });
  };

  useImperativeHandle(ref, () => ({
    prevImg,
    nextImg,
  }));

  return (
    <div className="flex ml-[30%]">
      {imgArr.map((data, i) => (
        <img
          key={i}
          src={data}
          style={{
            transform: `translateX(${-106 * imgIndex}%)`,
            opacity: imgIndex === i ? 1 : 0.2,
          }}
          className="w-[100%] ml-10 relative flex-grow flex-shrink"
          alt=""
          width="100%"
        />
      ))}
    </div>
  );
});

export default ImgSlider;
