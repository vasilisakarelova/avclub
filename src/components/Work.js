import React, { Component } from 'react'
import {Helmet} from "react-helmet"
import Page from './Page'

export default class extends Component {
  state = {
    isPlaying: []
  }

  handleAudio = (idx) => {
    if (this.state.isPlaying.indexOf(idx) > -1) {
      this.pauseAudio(idx)
    } else {
      this.playAudio(idx)
    }
  }

  playAudio = (idx) => {
    this.refs[`work-audio-${idx}`].play()

    this.setState( state => {
      const list = [...state.isPlaying, idx]

      return {
        isPlaying: list
      }
    })
  }

  pauseAudio = (idx) => {
    this.refs[`work-audio-${idx}`].pause()
    const index = this.state.isPlaying.indexOf(idx)

    this.setState( state => {
      const list = [...state.isPlaying.slice(0, index), ...state.isPlaying.slice(index + 1)]

      return {
        isPlaying: list
      }
    })
  }

  render () {
    const {data} = this.props

    return (
      <Page background="#FF8F6B" name='-work'>
        <Helmet>
          <title>A.V. Club | Music for Films | Work</title>
        </Helmet>
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
                      { block.audio !== undefined &&
                        <span className='work--video-watch-link' onClick={() => this.handleAudio(idx)}>
                          <span className='work--video-watch-icon'>
                            { (this.state.isPlaying.indexOf(idx) > -1)
                              ? <svg width="100%" height="100%" viewBox="0 0 357 357">
                                  <g id="pause">
                                    <path d="M25.5,357h102V0h-102V357z M229.5,0v357h102V0H229.5z"/>
                                  </g>
                                </svg>
                              : <svg width="100%" height="100%" viewBox="0 0 50 62" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2">
                                  <rect id="play" x="0" y="0" width="50" height="62" fill="none"/>
                                  <clipPath id="play-button">
                                    <rect x="0" y="0" width="50" height="62"/>
                                  </clipPath>
                                  <g clipPath="url(#play-button)">
                                    <path d="M0,0l50,31l-50,31l0,-62Z" fillRule="nonzero"/>
                                  </g>
                                </svg>
                            }
                          </span>
                          <audio src={block.audio} ref={`work-audio-${idx}`} />
                          { this.state.isPlaying.indexOf(idx) > -1 ? 'pause' : 'play'} audio</span>
                      }
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
