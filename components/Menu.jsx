import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Menu = (props) => {
  const router = useRouter();

  // console.log('/' + props.url);
  // console.log(router.asPath);

  return (
    <div>
      <Link href={props.url ?? '/'}>
        <a data-sb-field-path={props['data-sb-field-path']}>
          {props.heading && (
            <h3 data-sb-field-path=".heading">{props.heading}</h3>
          )}
          {props.name && (
            <ul id="main-menu">
              <il
                className={
                  router.asPath == '/' + `${props.url}` ? 'active' : ''
                }
                id="menu-item-text"
                data-sb-field-path=".name"
              >
                {props.name}
              </il>
            </ul>
          )}
        </a>
      </Link>
    </div>
  );
};
