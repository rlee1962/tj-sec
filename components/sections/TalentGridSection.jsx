import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Markdown from 'markdown-to-jsx';
// import Carousel from 'framer-motion-carousel';
import { TalentSection } from './TalentSection';
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
  FaSlideshare,
} from 'react-icons/fa';

export const TalentGridSection = (props) => {
  const router = useRouter();

  const [count, setCount] = useState(0);
  const [recount, setRecount] = useState(1);
  const length = props.cards.length;

  const refCount = useRef();
  const refRecount = useRef(recount);

  const newcount = 0;
  const newRecount = 1;

  // console.log(count);
  // console.log(recount);
  // console.log(router.asPath);

  // useEffect(() => {
  //   const slideInterval = setInterval(() => {
  //     setCount((count) => (count < length - 1 ? count + 1 : (count = 0)));
  //     setRecount((recount) => (recount < length ? recount + 1 : (recount = 1)));
  //   }, 6000);

  //   return () => setInterval(slideInterval);
  // }, [length]);

  const goToPrevious = () => {
    setCount(count > 0 ? count - 1 : length - 1);
    setRecount(recount > 1 ? recount - 1 : length);
  };

  const goToNext = () => {
    setCount(count < length - 1 ? count + 1 : (count = 0));
    setRecount(recount < length ? recount + 1 : (recount = 1));
  };

  return (
    <div data-sb-field-path={props['data-sb-field-path']}>
      <div className="slider-container">
        {props.cards?.length > 0 && (
          <div className="slides " data-sb-field-path=".cards">
            <div className="left-arrow " onClick={goToPrevious}>
              <FaRegArrowAltCircleLeft />
            </div>
            <div className="right-arrow " onClick={goToNext}>
              <FaRegArrowAltCircleRight />
            </div>

            {props.cards.slice(count, recount).map((card, idx) => (
              <TalentSection
                {...card}
                key={idx}
                data-sb-field-path={`.${idx}`}
              />
            ))}

            {/* {theSlide.slice(0, 1).map((theSlide, idx) => (
              <TalentSection
                // {...card}
                {...theSlide}
                key={idx}
                data-sb-field-path={`.${idx}`}
              />
            ))} */}
          </div>
        )}
      </div>
    </div>
  );
};
