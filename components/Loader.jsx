import React from 'react';

export default () => (
  <div className="loader">
    <span>Loading...</span>
    <style jsx>
      {`
        .loader {
          position: relative;
          width: 100%;
          height: 100%;
        }
      `}
    </style>
  </div>
);
