import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

export const Card = (props) => {
  return (
    <Link href={props.url ?? '/'}>
      <a data-sb-field-path={props['data-sb-field-path']}>
        <div className="parent">
          <div className="grid-item">
            <Image
              id={props.heading}
              className="serviceImg"
              src={`/images/services/${props.photo}.png`}
              alt="image1"
              width={72}
              height={72}
            />
          </div>
          <div className="grid-item">
            {props.subheading && (
              <h3
                className="service-subheading"
                data-sb-field-path=".subheading"
              >
                {props.subheading}
              </h3>
            )}
            {props.paragraph && (
              <Markdown
                className="service-paragraph"
                data-sb-field-path=".paragraph"
              >
                {props.paragraph}
              </Markdown>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
};
