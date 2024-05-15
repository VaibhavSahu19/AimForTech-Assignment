import React from 'react';
import Carousel from './Carousel/Carousel';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

const App = () => {
  const items = [<Component1 />, <Component2 />, <Component3 />];

  return (
    <div className='mt-[100px] px-[40px]'>
      <Carousel items={items} />
    </div>
  );
};

export default App;
