import React from 'react'
import Page from './Page'

import wasted_telent from '../assets/wasted_telent.png'

export default function About(props) {
  return (
    <Page background="#95A8B2" name='-contact'>
      <div className='contact-inner'>
        <div className='contact-text--wrap'>
          <p className='contact-text'>Der A.V. Club ist ein Kollektiv bestehend aus den Komponisten, Songwritern und Produzenten Tobias Kuhn, Markus Perner und Dave Anderson. Gemeinsam komponieren Sie Filmscores und auf den jeweiligen Film zugeschnittene Original-Songs in ihren Studios in Berlin, Düsseldorf und Wien.</p>
        </div>
        <div className='contact-request--block'><a href='mailto' className='contact-request--link'>request showreel</a></div>
        <div className='contact-logo--wrap'>
          <img className='contact-logo--img' alt='wated talent logo' src={wasted_telent} />
        </div>
        <div className='contact-footer--wrap'>
          <div className='contact-footer--link'>instagram</div>
          <div className='contact-footer--link'>legal info</div>
          <div className='contact-footer--link'>data privacy</div>
        </div>
      </div>
    </Page>
  );
}
