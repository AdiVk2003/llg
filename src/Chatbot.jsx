import React from 'react';

const MyReactComponent = () => {
  return (
    <html lang="en">
      <head>
        <style>
          {`
            body {
              margin: 0;
            }

            .wrapper {
              position: relative;
              z-index: 1;
              display: inline-block;
              width: 100vw;
            }

            iframe {
              display: block;
              background: #ffffff;
              border: none;
              height: 99vh;
              width: 100%;
            }
          `}
        </style>
      </head>
      <body>
        <div className="wrapper">
          <iframe
            src="https://legallaw.streamlit.app/?embed=true"
            scrolling="True"
          >
            <p>Your browser doesn't support iframes</p>
          </iframe>
        </div>
      </body>
    </html>
  );
};

export default MyReactComponent;