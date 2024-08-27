import React, { useCallback, useRef, useState } from "react";
import { cham, phonecam } from "../utils";
import { animateWithGsap } from "../utils/animations";
import { useGSAP } from "@gsap/react";
import ImgSlider from "./ImgSlider";
import "./components.css";
const Camera48p = () => {
  useGSAP(() => {
    animateWithGsap("#animatetxt", { opacity: 1, duration: 2 });
    animateWithGsap("#chameleon", { scale: 1 });
    animateWithGsap("#mobilecam", { scale: 1 });
    animateWithGsap("#g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      stagger: 0.2,
    });
  }, []);
  const sliderRef = useRef(null);
  const [imgIndex, setImgIndex] = useState();
  let sliderp;
  let sliderb;

  const getfunc = useCallback(
    ({ imgIndex }) => {
      setImgIndex(imgIndex);
    },
    [imgIndex]
  );
  console.log(imgIndex);
  switch (imgIndex) {
    case 0:
      sliderp = "Ultra Wide | Macro";
      sliderb = "0.5x";
      break;
    case 1:
      sliderb = "0.5x";
      sliderp = " Ultra wide |13 mm";

      break;
    case 2:
      sliderb = "1x";
      sliderp = " Main | 24 mm";
      break;
    case 3:
      sliderb = "1x";
      sliderp = " Main | 28 mm";
      break;
    case 4:
      sliderb = "1x";
      sliderp = " Main | 35 mm";
      break;
    case 5:
      sliderb = "2x";
      sliderp = " Telephoto | 48 mm";
      break;
    case 6:
      sliderb = "New 5x";
      sliderp = " Telephoto | 48 mm";
      break;
    default:
      break;
  }
  return (
    <div>
      <section className="common-padding">
        <div className="screen-max-width">
          <div className="flex flex-col ">
            <div id="animatetxt" className="opacity-0">
              <h2 className="text-5xl lg:text-7xl pl-5 font-semibold ">
                A camera that captures your
              </h2>
              <h2 className="text-5xl lg:text-7xl pl-5 font-semibold">
                wildest imagination.
              </h2>
            </div>

            <p className="hiw-subtitle">
              From dramatic framing flexibility to next-generation portraits,
              see what you can do with our most powerful iPhone camera system.
            </p>
          </div>
          <div>
            <img className="scale-150" id="chameleon" src={cham} alt="" />
          </div>
          <p className="text-gray font-semibold text-lg md:text-xl py-10">
            A green iguana, captured by the 48MP Main camera
          </p>
          <div className="flex-1 mt-10 w-full md:w-[80%] flex-center">
            <p
              className="text-gray max-w-md text-lg md:text-xl font-semibold translate-y-[100px]"
              id="g_text"
            >
              With iPhone 15 Pro, you have multiple focal lengths to work with.
              It’s like having
              <span className="text-white">
                {" "}
                seven pro lenses in your pocket
              </span>
              , everywhere you go.
            </p>
          </div>
        </div>
      </section>
      <div className="imgslidercontainer">
        <ImgSlider ref={sliderRef} getfunc={getfunc} />
      </div>

      <div className="screen-max-width">
        <div className="flex flex-1 mt-10 w-full ml-auto md:w-[80%] ">
          <div className="mx-auto flex">
            <p className="hiw-text" id="sliderp">
              <span className="text-white">{sliderb}</span>&nbsp; {sliderp}
            </p>
          </div>
          <div className="ml-auto" style={{ insetInlineStart: "unset" }}>
            <button type="button" onClick={() => sliderRef.current.prevImg()}>
              <svg
                width="35"
                className="bg-gray-400 rounded-full text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
              >
                <path
                  d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </button>
            <button
              className="mx-5"
              type="button"
              onClick={() => sliderRef.current.nextImg()}
            >
              <svg
                width="35"
                className="bg-gray-400 rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
              >
                <path
                  d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"
                  fill="#FFFFFF"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  mt-20 py-8 w-full ml-auto md:w-[80%]" id="mobilecam">
          <img src={phonecam} alt="" srcset="" />
          <div className="px-24 text- my-auto">
            <p className="hiw-text text-justify">
              The 48MP Main camera is more advanced than ever, capturing
              super‑high‑resolution photos with a <span className="text-white">new level of detail and
              colour.</span> 
            </p>
            <p className="hiw-text text-justify mt-7">
              You’ll see the improvements in your portraits. And now you no
              longer have to switch to Portrait mode. If your subject is a
              person, dog or cat, iPhone automatically captures depth
              information. So <span className="text-white"> you can choose to instantly see your photo as a
              portrait</span>, with an artful blur effect. Or later in the Photos app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camera48p;
