import React from 'react';
import HeroImg from './Images/Hero.jpeg';
import './Styles/Hero.css';
import Lottie from "lottie-react";
import roadLove from "./Animation/dancingHeart.json";

function Hero() {
  return (
    <div className='herowrapper'>
        <div className='roadLovewrapper'>
        <div className='roadLove'>
            <Lottie animationData={roadLove}/>
            <Lottie animationData={roadLove}/>
            <Lottie animationData={roadLove}/>
            <Lottie animationData={roadLove}/>
            <Lottie animationData={roadLove}/>
            <Lottie animationData={roadLove}/>
            <Lottie animationData={roadLove}/>
            <Lottie animationData={roadLove}/>
        </div>
        </div>
        
    
    <section className="hero">
        
      <img src={HeroImg} alt="Hero" className="hero-image" />
      <div className="animated-line line1"></div>
      <div className="animated-line line2"></div>
      <div className="animated-line line3"></div>
      <div className="animated-line line4"></div>
      <div className="animated-line line5"></div>
      <div className="animated-line line6"></div>
      <div className="animated-line line7"></div>
      <div className="animated-line line8"></div>
    </section>

    <div className='roadLovewrapper'>
        <div className='roadLove'>
            <Lottie animationData={roadLove}/>
            <Lottie animationData={roadLove}/>
            <Lottie animationData={roadLove}/>
            <Lottie animationData={roadLove}/>
            <Lottie animationData={roadLove}/>
            <Lottie animationData={roadLove}/>
            <Lottie animationData={roadLove}/>
            <Lottie animationData={roadLove}/>
        </div>
        </div>
        
    </div>
  );
}

export default Hero;
