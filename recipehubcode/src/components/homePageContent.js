import React, { useState } from 'react';
import { curRentState } from '../assets/pageTitles';

const HomePageContent = () => {
  //eslint-disable-next-line
  const [currentInfo, setCurrentInfo] = useState({ ...curRentState });

  return (
    <div className='Home-Content'>
      <p>{currentInfo.home.text}</p>
    </div>
  );
};

export default HomePageContent;
