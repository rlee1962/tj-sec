import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Markdown from 'markdown-to-jsx';
import { Button } from '../Button';
import { motion } from 'framer-motion';

export const HomeSection = (props) => {
  const router = useRouter();
  console.log(router.asPath);

  return (
    <motion.div
      key={router.asPath}
      id="home"
      className="home"
      data-sb-field-path={props['data-sb-field-path']}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // animate={{ opacity: 1, y: ['100%', '0%'], delay: 0.5 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, times: [0, 0.2, 1], delay: 0.25 }}
    >
      <section id="home-content">
        <div className="home-container">
          {props.heading && (
            <h1 className="home-heading" data-sb-field-path=".heading">
              {props.heading}
            </h1>
          )}
          {props.subheading && (
            <Markdown
              className="home-subheading"
              data-sb-field-path=".subheading"
            >
              {props.subheading}
            </Markdown>
          )}
          {props.buttons?.length > 0 && (
            <div className="home-buttons" data-sb-field-path=".buttons">
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
