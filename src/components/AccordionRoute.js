import React from 'react'
import { Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import AnimateHeight from 'react-animate-height'
/* Bounce animation is dependent on animate.css library.
Source: https://github.com/daneden/animate.css */
import 'animate.css/source/_base.css'
import 'animate.css/source/bouncing_entrances/bounceInDown.css'


export default ({component: Component, data, ...rest}) => {
  return (
    <Route {...rest} children={({match}) => (
      <AnimateHeight duration={ 300 } height={  match !== null ? 'auto' : 0 } className='page-mobile'>
        <div className='page-mobile--inner'>
          <CSSTransition in={match !== null}
            timeout={{
              enter: 1000,
              exit: 300
            }}
            appear
            onEntered={page => { page.querySelector('.page-inner').style.opacity = 1; page.closest('.page-mobile').style.height = 'calc(100% - 160px)'; }}
            onExit={page => { page.querySelector('.page-inner').style.opacity = 0; page.closest('.page-mobile').style.height = ''; }}
          >
            <Component data={data} />
          </CSSTransition>
        </div>
      </AnimateHeight>
    )}
    >
    </Route>
  );
}
