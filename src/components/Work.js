import React, { Component } from 'react'
import Page from './Page'

export default class extends Component {
  render () {
    const {data} = this.props

    return (
      <Page background="#FF8F6B" name='-work'>
        <div className='work-inner'>
          { data.map((block,idx) => {

              return (
                <div className='work--video-block' key={idx}>
                  <div className='work--video-block-inner'>
                    <div className='work--video-thumbnail'>
                      <img alt='video preview' className='work--video-thumbnail-img' src={block.img} />
                    </div>
                    <div className='work--video-title'>{block.title}</div>
                    <div className='work--video-credits'>
                      <p dangerouslySetInnerHTML={{ __html: block.description }}></p>
                    </div>
                    <div className='work--video-watch'>
                      <a href={block.videoLink} target='_blank' rel='noopener noreferrer' className='work--video-watch-link'>
                        <span className='work--video-watch-icon'>
                          <svg width="100%" height="100%" viewBox="0 0 50 62" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2">
                            <rect id="play" x="0" y="0" width="50" height="62" fill="none"/>
                            <clipPath id="play-button">
                              <rect x="0" y="0" width="50" height="62"/>
                            </clipPath>
                            <g clipPath="url(#play-button)">
                              <path d="M0,0l50,31l-50,31l0,-62Z" fillRule="nonzero"/>
                            </g>
                          </svg>
                        </span>
                        watch trailer</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </Page>
    )
  }
}
