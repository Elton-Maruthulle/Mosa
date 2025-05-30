import React from 'react';
import './Styles/Gallery.css';
import FlipBook from './FlipBook';

import pic1 from './Images/Hero.jpeg';
import pic2 from './Images/1.JPEG';
import pic3 from './Images/2.jpg';
import pic4 from './Images/3.jpg';
import pic5 from './Images/4.JPG';
import pic7 from './Images/5.jpg';
import pic8 from './Images/6.JPG';
import pic9 from './Images/7.jpg';
import pic10 from './Images/8.jpg';
import pic11 from './Images/9.jpg';
import pic12 from './Images/10.jpg';
import pic13 from './Images/11.JPG';
import pic14 from './Images/12.jpg';
import pic15 from './Images/14.jpg';
import pic16 from './Images/15.jpg';
import pic17 from './Images/16.jpg';
import pic18 from './Images/17.jpg';
import pic19 from './Images/18.jpg';
import pic20 from './Images/19.jpg';
import pic21 from './Images/20.jpg';
import pic22 from './Images/21.jpeg';
import pic23 from './Images/22.jpeg';
import pic24 from './Images/23.jpg';
import pic25 from './Images/24.jpg';
import pic26 from './Images/25.jpg';
import pic27 from './Images/26.jpeg';


const images = [
  { src: pic1, date: "2023-02-14" },
  { src: pic2, date: "2023-03-01" },
  { src: pic3, date: "2023-04-10" },
  { src: pic4, date: "2023-05-25" },
  { src: pic5, date: "" },
  { src: pic7, date: "" },
  { src: pic8, date: "" },
  { src: pic9, date: "" },
  { src: pic10, date: "" },
  { src: pic11, date: "" },
  { src: pic12, date: "" },
  { src: pic13, date: "" },
  { src: pic14, date: "" },
  { src: pic15, date: "" },
  { src: pic16, date: "" },
  { src: pic17, date: "" },
  { src: pic18, date: "" },
  { src: pic19, date: "" },
  { src: pic20, date: "" },
  { src: pic21, date: "" },
  { src: pic22, date: "" },
  { src: pic23, date: "" },
  { src: pic24, date: "" },
  { src: pic25, date: "" },
  { src: pic26, date: "" },
  { src: pic27, date: "" },
];

function Gallery() {
  return (
    <section className="gallery-section">
      
      <h2 className="gallery-title">Our Memories</h2>
      <div className="gallery-grid">
        {images.map(({ src, date }, idx) => (
          <div key={idx} className="gallery-item" data-date={date}>
            <img src={src} alt={`Memory ${idx + 1}`} />
          </div>
        ))}
        
      </div>
      {/* <FlipBook images={images} /> */}
    </section>
  );
}

export default Gallery;
