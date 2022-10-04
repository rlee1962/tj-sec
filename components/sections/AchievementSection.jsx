import React, { useState, useEffect } from 'react';
import Modal from '../Modal';
import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

export const Achievements = (props) => {
  const [showModal, setShowModal] = useState(props.card);

  // console.log(props.float);

  return (
    <>
      <Link href={props.url ?? '/'} as={'#achievements'}>
        <div id="img-container" className="img-container">
          <div id={props.float}>
            <Image
              id={props.heading}
              className="achievementsImg"
              src={`/images/achievements/${props.photo}.jpg`}
              alt="image1"
              width={260}
              height={260}
            />
          </div>
          {props.heading && (
            <h3 className="achievements-heading" data-sb-field-path=".heading">
              {props.heading}
            </h3>
          )}
          {props.subheading && (
            <h3
              className="achievements-subheading text-right"
              data-sb-field-path=".subheading"
            >
              {props.subheading}
            </h3>
          )}
          {props.paragraph && (
            <Markdown
              className="achievements-paragraph pl-25"
              data-sb-field-path=".paragraph"
            >
              {props.paragraph}
            </Markdown>
          )}
        </div>
      </Link>
    </>
  );
};
