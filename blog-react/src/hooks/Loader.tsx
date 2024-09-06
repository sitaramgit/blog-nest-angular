import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Theme } from '@mui/material';
import ReactDOM from 'react-dom/client';

const loaderId = 'loader-div';
const useLoader = () => {

  // Function to open the loader
  const openLoader = () => {
     // Create a loader container if it doesn't exist
     const loaderContainer: HTMLElement | any = document.getElementById(loaderId);
     if (!loaderContainer) {
       const div = document.createElement('div');
       div.id = loaderId;
       document.body.appendChild(div);
     }

      // Render the loader
      const loader = ReactDOM.createRoot(document.getElementById(loaderId) as HTMLElement);
      loader.render(
        <Backdrop
        sx={(theme: Theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      )
  };

  // Function to close the loader
  const closeLoader = () => {
    const elm: any = document.getElementById(loaderId);
    elm?.remove();
  };


  return { openLoader, closeLoader };
};

export default useLoader;
