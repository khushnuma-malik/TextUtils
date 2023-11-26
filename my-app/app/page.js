"use client"
import React, { useState } from 'react';

const Page = () => {
  const [viewCount, setViewCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  const handleImageClick = () => {
    setViewCount(viewCount + 1);
  };

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className='picture'>
      <h2>LAPTOP</h2>
      <img onClick={handleImageClick}  src='/images/laptop.jpg'alt=' LAPTOP'/>
      <p> view:{viewCount}</p>

      <button  onClick={handleLikeClick}  class="heart-btn"></button>
      <p> {likeCount}</p>
      
    </div>
  );
};

export default Page;

