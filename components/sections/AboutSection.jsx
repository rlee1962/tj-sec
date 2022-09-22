import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Markdown from 'markdown-to-jsx';
import { Button } from '../Button';
import { motion } from 'framer-motion';

export const AboutSection = (props) => {
  const router = useRouter();
  // console.log(router.asPath);

  return (
    <motion.div
      key={router.asPath}
      id="about"
      className="about"
      data-sb-field-path={props['data-sb-field-path']}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // animate={{ opacity: 1, y: ['-100%', '0%'], delay: 0.5 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, times: [0, 0.2, 1], delay: 0.25 }}
    >
      <section id="about-content">
        <div className="about-container">
          {props.heading && (
            <h1 className="about-heading" data-sb-field-path=".heading">
              {props.heading}
            </h1>
          )}
          {props.paragraph && (
            <Markdown
              className="about-paragraph"
              data-sb-field-path=".paragraph"
            >
              {props.paragraph}
            </Markdown>
          )}
          {props.buttons?.length > 0 && (
            <div className="about-buttons" data-sb-field-path=".buttons">
              {props.buttons.map((button, idx) => (
                <Button {...button} key={idx} data-sb-field-path={`.${idx}`} />
              ))}
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};
