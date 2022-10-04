import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Markdown from 'markdown-to-jsx';
import { Achievements } from './AchievementSection';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeAnimation, rotateAnimation } from '../motion/motionAnimation';
import { BsMic, BsMusicPlayer } from 'react-icons/bs';
import { ImMusic, ImPodcast, ImMic, ImFilm } from 'react-icons/im';

export const AchievementGridSection = (props) => {
  const router = useRouter();

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const [viewTab, setViewTab] = useState(0);
  const showthis = props.cards[viewTab];

  const iconStyle = {
    display: 'inline-flex',
    margin: '0',
    paddingTop: '2px',
  };

  // console.log(indexed);
  // console.log(isActive);
  // console.log(props.cards.findIndex((elem) => elem.url == [viewTab]));

  return (
    <motion.div
      key={router.asPath}
      {...fadeAnimation}
      id="achievements"
      className="achievements"
      data-sb-field-path={props['data-sb-field-path']}
    >
      <section id="achievements-content">
        <div className="achievements-container">
          {props.heading && (
            <h2 className="achievements-heading " data-sb-field-path=".heading">
              {props.heading}
            </h2>
          )}
          <div className="tabpanel styled-tabs uniform-height">
            <ul className="nav nav-tabs" role="tablist" text-hidden-xs="true">
              <li role="presentation">
                <a
                  href="#tabs-tab1"
                  onClick={() => {
                    setViewTab((viewTab = 0));
                  }}
                  className={viewTab == 0 ? 'isActive' : 'tabs-tab1'}
                  aria-controls="tabs-tab1"
                  role="tab"
                  data-toggle="tab"
                >
                  <div className="icon-parent">
                    <div icon-div1>
                      {' '}
                      <ImMic
                        className="uniform-height"
                        style={iconStyle}
                      />{' '}
                    </div>
                    <div className="bs-mic">Best Lyrics</div>
                  </div>
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#tabs-tab2"
                  onClick={() => {
                    setViewTab((viewTab = 1));
                  }}
                  className={viewTab == 1 ? 'isActive' : 'tabs-tab1'}
                  aria-controls="tabs-tab2"
                  role="tab"
                  data-toggle="tab"
                >
                  <div className="icon-parent">
                    <div icon-div1>
                      {' '}
                      <ImFilm
                        className="uniform-height"
                        style={iconStyle}
                      />{' '}
                    </div>
                    <div className="bs-mic">Best Video</div>
                  </div>
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#tabs-tab3"
                  onClick={() => setViewTab((viewTab = 2))}
                  className={viewTab == 2 ? 'isActive' : 'tabs-tab1'}
                  aria-controls="tabs-tab1"
                  role="tab"
                  data-toggle="tab"
                >
                  <div className="icon-parent">
                    <div icon-div1>
                      {' '}
                      <ImMusic
                        className="uniform-height"
                        style={iconStyle}
                      />{' '}
                    </div>
                    <div className="bs-mic">Best Single</div>
                  </div>
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#tabs-tab4"
                  onClick={() => setViewTab((viewTab = 3))}
                  className={viewTab == 3 ? 'isActive' : 'tabs-tab1'}
                  aria-controls="tabs-tab1"
                  role="tab"
                  data-toggle="tab"
                >
                  <div className="icon-parent">
                    <div icon-div1>
                      {' '}
                      <ImPodcast
                        className="uniform-height"
                        style={iconStyle}
                      />{' '}
                    </div>
                    <div className="bs-mic">Best Podcast</div>
                  </div>
                </a>
              </li>
            </ul>
            <AnimatePresence initial={false}>
              <motion.div key={viewTab} {...rotateAnimation}>
                {props.subheading && (
                  <Markdown data-sb-field-path=".subheading">
                    {props.subheading}
                  </Markdown>
                )}
                {props.cards?.length > 0 && (
                  <div
                    className="achievements-grid-cards"
                    data-sb-field-path=".cards"
                  >
                    <Achievements
                      {...showthis}
                      data-sb-field-path={`.${showthis}`}
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
