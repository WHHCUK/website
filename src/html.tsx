import React from 'react';
import PropTypes from 'prop-types';

import LoaderImg from './assets/images/loader.svg';

interface Props {
  htmlAttributes: Record<string, any>;
  headComponents: any[];
  bodyAttributes: Record<string, any>;
  preBodyComponents: any[];
  body: string;
  postBodyComponents: any[];
}

export default function HTML(props: Props) {
  return (
    <html {...props.htmlAttributes} lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="West Hampstead Hockey Club, The first choice for social and competitive hockey in London"
        />
        {props.headComponents}
        <style>{'nav a { color: #ffffff }'}</style>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`loader`}
          id="___loader"
          style={{
            alignItems: 'center',
            backgroundColor: '#181818',
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
          }}
        >
          <img src={LoaderImg} alt="loading spinner" width="150" height="150" />
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
