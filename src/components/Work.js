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
                  <div className='work--video-thumbnail'>
                    <img alt='video preview' className='work--video-thumbnail-img' src={block.img} />
                  </div>
                  <div className='work--video-title'>{block.title}</div>
                  <div className='work--video-credits'>
                    <p dangerouslySetInnerHTML={{ __html: block.description }}></p>
                  </div>
                  <div className='work--video-watch'>
                    <a href={block.videoLink} target='_blank' rel='noopener noreferrer' className='work--video-watch-link'><span className='work--video-watch-icon'>&#9654;</span>watch trailer</a>
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
