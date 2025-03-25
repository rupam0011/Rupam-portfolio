import React from 'react';
import loadstyle from '@/styles/loader.module.css'; // Ensure correct import path

const Loader = () => {
  return (
    <div className={loadstyle.body}>
    <div className={loadstyle.preloader}>
      <div>Loading</div>
      {[...Array(8)].map((_, i) => (
        <span key={i} className={`${loadstyle.line} ${loadstyle[`line-${i + 1}`]}`} />
      ))}
    </div>
    </div>
  );
};

export default Loader;
