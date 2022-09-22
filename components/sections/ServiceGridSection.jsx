import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Markdown from 'markdown-to-jsx';
import { Card } from './ServiceSection';
import { motion } from 'framer-motion';

export const ServiceGridSection = (props) => {
  const router = useRouter();
  console.log(router);

  return (
    <motion.div
      key={router.asPath}
      id="service"
      className="service"
      data-sb-field-path={props['data-sb-field-path']}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // animate={{ opacity: 1, y: ['-100%', '0%'], delay: 0.5 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, times: [0, 0.2, 1], delay: 0.25 }}
    >
      <div
        id="services"
        className="service"
        data-sb-field-path={props['data-sb-field-path']}
      >
        <div className="service-grid">
          {props.heading && (
            <h2 className="service-heading " data-sb-field-path=".heading">
              {props.heading}
            </h2>
          )}
          {props.paragraph && (
            <Markdown data-sb-field-path=".paragraph">
              {props.paragraph}
            </Markdown>
          )}
          {props.cards?.length > 0 && (
            <div className="service-grid-cards" data-sb-field-path=".cards">
              {props.cards.map((card, idx) => (
                <Card {...card} key={idx} data-sb-field-path={`.${idx}`} />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
