import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Markdown from 'markdown-to-jsx';
import { Menu } from '../Menu';
import { motion } from 'framer-motion';

import { Button } from '../Button';

export const MenuSection = (props) => {
  return (
    <div>
      <motion.div
        id="menu"
        className="menu"
        data-sb-field-path={props['data-sb-field-path']}
        initial={{ opacity: 0 }}
        // initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div
          // className="card-grid-container inner"
          className="logo"
        >
          <div className="img-holder">
            <Link href={props.url ?? '/'}>
              <Image
                id="logo"
                src={`/images/${props.logo}.svg`}
                alt=""
                width={126}
                height={126}
              />
            </Link>
          </div>
          {props.heading && (
            <h2
              // className="card-grid-heading"
              data-sb-field-path=".heading"
            >
              {props.heading}
            </h2>
          )}
          {props.subheading && (
            <Markdown
              // className="card-grid-subheading"
              data-sb-field-path=".subheading"
            >
              {props.subheading}
            </Markdown>
          )}
          {props.cards?.length > 0 && (
            <div
              id="main-menu"
              // className="card-grid-cards"
              data-sb-field-path=".cards"
            >
              {props.cards.map((card, idx) => (
                <Menu {...card} key={idx} data-sb-field-path={`.${idx}`} />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
