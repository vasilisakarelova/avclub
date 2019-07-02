import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './index.css'
import resized from './utils/resized'

import NavTop from './components/NavTop'
import NavRight from './components/NavRight'
import NavBottom from './components/NavBottom'
import NavLeft from './components/NavLeft'
import Main from './components/Main'
import About from './components/About'
import Work from './components/Work'
import Composers from './components/Composers'
import AVClub from './components/AVClub'
import Error404 from './components/Error404'

import { unregister } from './serviceWorker'

const supportsHistory = 'pushState' in window.history

const App = () => (
  <BrowserRouter forceRefresh={!supportsHistory}>
    <div className='main-wrap'>
      <NavTop />
      <NavRight />
      <NavBottom />
      <NavLeft />
      <div className='page-wrap'>
        <Route
          render={({ location }) => {
            const { pathname } = location;
            let newPage = `-${location.pathname.split('/').slice(-1)[0]}`
            if (newPage === '-') newPage = ''

            return (
              <TransitionGroup>
                <CSSTransition
                  classNames={`page${newPage}`}
                  key={pathname}
                  timeout={{
                    enter: 1000,
                    exit: 1000,
                  }}
                >
                  <Route
                    location={location}
                    render={() => (
                      <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/about" component={About} />
                        <Route path="/composers" component={Composers} />
                        <Route path="/work" component={Work} />
                        <Route path="/avclub" component={AVClub} />
                        <Route component={Error404} />
                      </Switch>
                    )}
                  />
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
      </div>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'))
unregister()
resized()
