import React, { useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';

function FlipBook({ images }) {
  const bookRef = useRef(null);

  useEffect(() => {
    if (!images || images.length === 0) return;

    let currentPage = 0;
    const flipInterval = setInterval(() => {
      const pageFlip = bookRef.current.pageFlip();

      if (currentPage < images.length - 1) {
        currentPage += 1;
      } else {
        currentPage = 0;
      }

      pageFlip.flip(currentPage);
    }, 2000); // Flip every 3 seconds

    return () => clearInterval(flipInterval);
  }, [images]);

  if (!images || !Array.isArray(images)) {
    return <div>No images to show</div>;
  }

  return (
    <HTMLFlipBook
      width={350}
      height={450}
      size="stretch"
      minWidth={315}
      maxWidth={600}
      minHeight={400}
      maxHeight={800}
      maxShadowOpacity={0.5}
      showCover={true}
      mobileScrollSupport={true}
      className="flipbook"
      ref={bookRef}
    >
      {images.map((img, i) => (
        <div key={i} className="page">
          <img
            src={img.src}
            alt={`Page ${i + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '10px',
              userSelect: 'none',
            }}
            draggable={false}
          />
        </div>
      ))}
    </HTMLFlipBook>
  );
}

export default FlipBook;
