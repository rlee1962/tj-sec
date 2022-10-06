import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Markdown from 'markdown-to-jsx';
import { Button } from '../Button';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeAnimation, sliderAnimation } from '../motion/motionAnimation';
import Image from 'next/image';

export const TalentSection = (props) => {
  const router = useRouter();

  if (typeof window !== 'undefined') {
    const slideImg = document.getElementById('talent');
    // console.log(props.id);
  }

  // console.log(router.asPath);
  // console.log(sliderAnimation);
  // console.log(fadeAnimation.key);

  return (
    <AnimatePresence>
      <motion.div
        key={router.asPath}
        {...fadeAnimation}
        id="talent"
        className="talent"
        data-sb-field-path={props['data-sb-field-path']}
      >
        <section id="main-content">
          <div className="talent-container">
            <AnimatePresence>
              <motion.div key={props.photo} {...sliderAnimation}>
                <Image
                  src={`/images/carousel/${props.photo}.png`}
                  alt="image1"
                  width={220}
                  height={220}
                  className="self-center"
                />

                {props.heading && (
                  <h1 className="talent-heading" data-sb-field-path=".heading">
                    {props.heading}
                  </h1>
                )}
                {props.paragraph && (
                  <div>
                    <Markdown
                      className="talent-paragraph"
                      data-sb-field-path=".paragraph"
                    >
                      {props.paragraph}
                    </Markdown>
                  </div>
                )}
                {props.buttons?.length > 0 && (
                  <div className="talent-buttons" data-sb-field-path=".buttons">
                    {props.buttons.map((button, idx) => (
                      <Button
                        className="relative pt-12"
                        {...button}
                        key={idx}
                        data-sb-field-path={`.${idx}`}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};
