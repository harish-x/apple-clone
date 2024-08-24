import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { rightImg, watchImg } from "../utils";
import VideoSlider from "./VideoSlider";
import { animateWithGsap } from "../utils/animations";


const Highlights = () => {
  useGSAP(() => {
    animateWithGsap("#title", { opacity: 1, y: 0 });
    animateWithGsap(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="srceen-max-width sm:px-5 md:px-1  lg:px-56">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the flim <img className="ml-2" src={watchImg} alt="" />
            </p>
            <p className="link">
              Watch the event <img className="ml-2" src={rightImg} alt="" />
            </p>
          </div>
        </div>
        <VideoSlider/>
      </div>
    </section>
  );
};

export default Highlights;
