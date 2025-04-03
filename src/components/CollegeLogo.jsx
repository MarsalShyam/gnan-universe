import React from 'react';
import img1 from '../assets/images/gmani-logo.png';
import img2 from '../assets/images/naac_logo.png';
import img3 from '../assets/images/nba_logo.png';




const CollegeLogo = () => {
  return (
    <div className='bg-url("../")'>
      <div className='h-36 bg-blue-950 flex flex-row items-center gap-x-10 justify-center'>
      <div><img src={img2} className='h-24' alt='second'/></div>
        <div><img src={img1} className='h-24' alt='first'/></div>
        
        
        <div><img src={img3} className='h-24' alt='third'/></div>
        
        
        
      </div>
    </div>
  )
}

export default CollegeLogo
