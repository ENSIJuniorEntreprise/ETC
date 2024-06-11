import React from 'react';
import './Loader.css';
import Loader1 from './components/loader1/loader1';
import Sec1 from './components/sec1/sec1';

const Loader = () => {
  return (
    <div id='load'>
      <Sec1 />
      <Loader1 />
    </div>
  );
};

export default Loader;
