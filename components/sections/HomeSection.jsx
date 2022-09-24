import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Markdown from 'markdown-to-jsx';
import { Button } from '../Button';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeAnimation } from '../motion/motionAnimation';

export const HomeSection = (props) => {
  const router = useRouter();
  console.log(router.asPath);

  return (
    <AnimatePresence>
      <motion.div
        key={router.asPath}
        {...fadeAnimation}
        id="home"
        className="home"
        data-sb-field-path={props['data-sb-field-path']}
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
                  <Button
                    {...button}
                    key={idx}
                    data-sb-field-path={`.${idx}`}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};
