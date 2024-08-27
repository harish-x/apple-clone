import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Modal from "./components/Modal";
import Features from "./components/Features";
import HowitWorks from "./components/HowitWorks";
import Footer from "./components/Footer";
import Camera48p from "./components/Camera48p";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Modal />
      <Features />
      <HowitWorks />
      <Camera48p/>
      <Footer />
    </main>
  );
};

export default App;
