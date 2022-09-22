import React, { useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import { Featured } from './FeaturedSection';

export const FeaturedGridSection = (props) => {
  return (
    <div
      id="featured"
      className="featured"
      data-sb-field-path={props['data-sb-field-path']}
    >
      <div className="featured-grid">
        {props.heading && (
          <h2 className="featured-heading " data-sb-field-path=".heading">
            {props.heading}
          </h2>
        )}
        {props.subheading && (
          <Markdown data-sb-field-path=".subheading">
            {props.subheading}
          </Markdown>
        )}
        {props.cards?.length > 0 && (
          <div className="featured-grid-cards" data-sb-field-path=".cards">
            {props.cards.map((card, idx) => (
              <Featured {...card} key={idx} data-sb-field-path={`.${idx}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
