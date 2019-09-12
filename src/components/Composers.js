import React, { Component } from 'react'
import {Helmet} from "react-helmet"
import Page from './Page'
import Collapsible from 'react-collapsible'

export default class extends Component {
  render () {
    const { data } = this.props

    return (
      <Page background="#FFB169" name='-composers'>
        <Helmet>
          <title>A.V. Club | Music for Films | Composers</title>
        </Helmet>
        <div className='composers-inner'>
          { data.map((composer, idx) => {
              return (
                <Collapsible open={idx === 0} classParentString='composers-item' trigger={composer.name} key={idx}>
                  <div className='composers-item--img-wrap'>
                    <img src={composer.img} alt={composer.name} className='composers-item--img'/>
                  </div>
                  <div className='composers-item--text' dangerouslySetInnerHTML={{ __html: composer.description }}></div>
                </Collapsible>
              )
            })
          }
        </div>
      </Page>
    )
  }
}
