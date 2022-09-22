import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Markdown from 'markdown-to-jsx';
import { Button } from '../Button';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export const TalentSection = (props) => {
  const router = useRouter();
  // console.log(router.asPath);
  if (typeof window !== 'undefined') {
    const slideImg = document.getElementById('talent');
    // console.log(props.id);
  }

  // console.log(prev);
  // console.log();

  return (
    <motion.div
      key={props.id}
      id="talent"
      className="talent"
      data-sb-field-path={props['data-sb-field-path']}
      initial={{ opacity: 0.75 }}
      animate={{ opacity: 1 }}
      // animate={{ opacity: 1, y: ['-100%', '0%'], delay: 0.5 }}
      exit={{ opacity: 0.75 }}
      transition={{ duration: 0.25, delay: 0.125 }}
    >
      <section id="main-content">
        <div className="talent-container">
          <AnimatePresence>
            <motion.div
              // key={count}
              key={props.id}
              initial={{ opacity: 1, x: `-200%` }}
              animate={{ opacity: 1, x: `0%`, delay: 0 }}
              exit={{ opacity: 1, x: `200%` }}
              transition={{ duration: 0.75, delay: 0 }}
            >
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
  );
};