import React, { Component } from 'react'
import Page from './Page'
import Collapsible from 'react-collapsible'

import tobias_kuhn from '../assets/tobias_kuhn.png'

export default class extends Component {
  constructor (props) {
    super(props)

    this.setBorderBottom = this.setBorderBottom.bind(this)
  }

  setBorderBottom (ev) {
    console.log(ev)
  }

  render () {
    return (
      <Page background="#FFB169" name='-composers'>
        <div className='composers-inner'>
          <Collapsible open classParentString='composers-item' trigger='Tobias Kuhn' onClose={this.setBorderBottom}>
            <div className='composers-item--img-wrap'>
              <img src={tobias_kuhn} alt='Tobias Kuhn' className='composers-item--img'/>
            </div>
            <div className='composers-item--text'>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
              <p>Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
            </div>
          </Collapsible>
          <Collapsible classParentString='composers-item' trigger='Markus Perner' onClose={this.setBorderBottom}>
            <div className='composers-item--img-wrap'>
              <img src={tobias_kuhn} alt='Markus Perner' className='composers-item--img'/>
            </div>
            <div className='composers-item--text'>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
              <p>Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
            </div>
          </Collapsible>
          <Collapsible classParentString='composers-item' trigger='Dave Anderson' onClose={this.setBorderBottom}>
            <div className='composers-item--img-wrap'>
              <img src={tobias_kuhn} alt='Dave Anderson' className='composers-item--img'/>
            </div>
            <div className='composers-item--text'>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
              <p>Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
              <p>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
            </div>
          </Collapsible>
        </div>
      </Page>
    )
  }
}
