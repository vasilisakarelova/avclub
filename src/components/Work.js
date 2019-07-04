import React from 'react'
import Page from './Page'

import about_0 from '../assets/avclub.png'
import about_1 from '../assets/about_1.png'
import about_2 from '../assets/about_2.png'
import about_3 from '../assets/about_3.png'

export default function About(props) {
  return (
    <Page background="#FF8F6B" name='-work'>
      <div className='work-inner'>
        <div className='work--video-block'>
          <div className='work--video-thumbnail'>
            <img alt='video preview' className='work--video-thumbnail-img' src={about_0} />
          </div>
          <div className='work--video-title'>Tatort Weimar: Der Harte Kern</div>
          <div className='work--video-credits'>
            <p>Filmscore: Tobias Kuhn / Markus Perner<br/>Director: Tobias Wiemann<br/>Produktion: Lieblingsfilm<br/>Awards: Deutscher Filmpreis (Bester Kinderfilm) 2018; NDR Filmpreis 2018; GILDE Filmpreis 2017</p>
          </div>
          <div className='work--video-watch'><a href='https://www.youtube.com/watch?v=nD0F31hzPeM' target='_blank' rel='noopener noreferrer' className='work--video-watch-link'>watch trailer</a></div>
        </div>
        <div className='work--video-block'>
          <div className='work--video-thumbnail'>
            <img alt='video preview' className='work--video-thumbnail-img' src={about_1} />
          </div>
          <div className='work--video-title'>amelie rennt</div>
          <div className='work--video-credits'>
            <p>Filmscore: Tobias Kuhn / Markus Perner<br/>Director: Tobias Wiemann<br/>Produktion: Lieblingsfilm<br/>Awards: Deutscher Filmpreis (Bester Kinderfilm) 2018; NDR Filmpreis 2018; GILDE Filmpreis 2017</p>
          </div>
          <div className='work--video-watch'><a href='https://www.youtube.com/watch?v=nD0F31hzPeM' target='_blank' rel='noopener noreferrer' className='work--video-watch-link'>watch trailer</a></div>
        </div>
        <div className='work--video-block'>
          <div className='work--video-thumbnail'>
            <img alt='video preview' className='work--video-thumbnail-img' src={about_2} />
          </div>
          <div className='work--video-title'>rocca verändert die welt (2019)</div>
          <div className='work--video-credits'>
            <p>Filmscore: Tobias Kuhn / Markus Perner<br/>Director: Tobias Wiemann<br/>Produktion: Lieblingsfilm<br/>Awards: Deutscher Filmpreis (Bester Kinderfilm) 2018; NDR Filmpreis 2018; GILDE Filmpreis 2017</p>
          </div>
          <div className='work--video-watch'><a href='https://www.youtube.com/watch?v=nD0F31hzPeM' target='_blank' rel='noopener noreferrer' className='work--video-watch-link'>watch trailer</a></div>
        </div>
        <div className='work--video-block'>
          <div className='work--video-thumbnail'>
            <img alt='video preview' className='work--video-thumbnail-img' src={about_3} />
          </div>
          <div className='work--video-title'>another project (2019)</div>
          <div className='work--video-credits'>
            <p>Filmscore: Tobias Kuhn / Markus Perner<br/>Director: Tobias Wiemann<br/>Produktion: Lieblingsfilm<br/>Awards: Deutscher Filmpreis (Bester Kinderfilm) 2018; NDR Filmpreis 2018; GILDE Filmpreis 2017</p>
          </div>
          <div className='work--video-watch'><a href='https://www.youtube.com/watch?v=nD0F31hzPeM' target='_blank' rel='noopener noreferrer' className='work--video-watch-link'>watch trailer</a></div>
        </div>
      </div>
    </Page>
  );
}
