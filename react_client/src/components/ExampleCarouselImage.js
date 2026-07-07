import React from 'react';

export default function ExampleCarouselImage({ text, src }) {
  return (
    <img
      className="d-block w-100 banner-img"
      src={src}
      alt={text}
      draggable="true"
    />
  );
}
