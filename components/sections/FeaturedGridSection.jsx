import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Markdown from 'markdown-to-jsx';
import { Featured } from './FeaturedSection';
import { motion } from 'framer-motion';

export const FeaturedGridSection = (props) => {
  const router = useRouter();
  // console.log(router.asPath);

  return (
    <motion.div
      key={router.asPath}
      id="featured"
      className="featured"
      data-sb-field-path={props['data-sb-field-path']}
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: 1,
        y: [0, -200, 200, 0],
        default: { ease: 'linear' },
        delay: 2,
        duration: 5000,
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, times: [0, 0.2, 1], delay: 0.25 }}
    >
      <div className="featured-grid">
        {props.heading && (
          <h2 className="featured-heading " data-sb-field-path=".heading">
            {props.heading}
          </h2>
        )}
        {props.subheading && (
          <Markdown data-sb-field-path=".subheading">
            {props.subheading}
          </Markdown>
        )}
        {props.cards?.length > 0 && (
          <div className="featured-grid-cards" data-sb-field-path=".cards">
            {props.cards.map((card, idx) => (
              <Featured {...card} key={idx} data-sb-field-path={`.${idx}`} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
