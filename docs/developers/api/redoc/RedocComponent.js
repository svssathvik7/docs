import React from 'react';
import { RedocStandalone } from 'redoc';

const RedocComponent = ({ specUrl }) => (
  <RedocStandalone
    specUrl={specUrl}
    options={{
      theme: {
        colors: {
          primary: {
            main: '#3498db',
          },
          text: {
            primary: '#333',
            secondary: '#555',
          },
        },
        sidebar: {
          backgroundColor: '#f4f4f4',
          textColor: '#333',
        },
      },
    }}
  />
);

export default RedocComponent;
