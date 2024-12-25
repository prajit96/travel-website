import React from 'react';
import logo from '../styles/logo.mp4';

const Loading = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000', 
        zIndex: 9999,
      }}
    >
      <video
        src={logo}
        autoPlay
        loop
        muted
        style={{
          width: '30%',
          maxWidth: '600px',
          borderRadius: '10px',
        }}
      />
    </div>
  );
};

export default Loading;
