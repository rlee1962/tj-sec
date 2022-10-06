import React from 'react';
// import { ImageCarousel } from '../content/ImageCarousel.json';
import { heading } from '../.././content/data/image-carousel.json';

export const ImageCarousel = () => {
  console.log(heading);
  return (
    <div className="imageCarousel">
      {/* <p className="text-[32px] capitalize text-gray-100">{heading}</p> */}
      <h1 data-sb-field-path=".heading">{heading}</h1>
    </div>
  );
};
