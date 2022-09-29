import React, { useState, useEffect } from 'react';
import Modal from '../Modal';
import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageCarousel } from '../featured/ImageCarousel';
import { ImageText } from '../featured/ImageText';
import { ImageGallery } from '../featured/ImageGallery';

export const Featured = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <Modal onClose={() => setShowModal(false)} show={showModal}>
        <p className="text-xl capitalize">Hello from the modal!</p>

        {showModal === `${props.card}` && <ImageCarousel />}
        {showModal === `${props.card}` && <ImageText />}
        {showModal === `${props.card}` && <ImageGallery />}
      </Modal> */}

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Fancy Modal
      </Modal>
      <Link href={props.url ?? '/'} as={'#featured'}>
        <div className="featured-inner">
          <motion.button
            className="featuredBtn"
            onClick={() => setIsOpen(true)}
            data-sb-field-path={props['data-sb-field-path']}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.25 },
            }}
            whileTap={{ scale: 0.99 }}
          >
            {' '}
            <div className="featured-top">
              <Image
                src={`/images/featured/${props.photo}.jpg`}
                alt={props.heading}
                width="250%"
                height="175%"
              />
            </div>
            <div className="featured-bottom">
              {props.heading && (
                <h3
                  // className="featured-subheading"
                  data-sb-field-path=".heading"
                >
                  {props.heading}
                </h3>
              )}
              {props.paragraph && (
                <Markdown
                  className="featured-paragraph"
                  data-sb-field-path=".paragraph"
                >
                  {props.paragraph}
                </Markdown>
              )}
            </div>
          </motion.button>
        </div>
      </Link>
    </>
  );
};
