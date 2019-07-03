import React from 'react'
import Page from './Page'

import imgMobile from '../assets/avclub-mobile.png'
import img from '../assets/avclub.png'

export default function About(props) {
  return (
    <Page background="#E5D5E7" name='-avclub'>
      <div className='avclub-inner'>
        <div className='avclub--img-wrap'>
          <img className='avclub--img-mobile' alt='video placeholder' src={imgMobile} />
          <img className='avclub--img' alt='video placeholder' src={img} />
        </div>
      </div>
    </Page>
  );
}
