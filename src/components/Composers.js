import React, { Component } from 'react'
import Page from './Page'
import Collapsible from 'react-collapsible'

import tobias_kuhn from '../assets/tobias_kuhn.png'

export default class extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {data} = this.props

    return (
      <Page background="#FFB169" name='-composers'>
        <div className='composers-inner'>
          { data.map((composer, idx) => {
              console.log(composer)

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
