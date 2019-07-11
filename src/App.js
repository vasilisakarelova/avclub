import React, { Component } from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import AccordionRoute from './components/AccordionRoute'
import AccortionLink from './components/AccordionLink'

import NavTop from './components/NavTop'
import NavRight from './components/NavRight'
import NavBottom from './components/NavBottom'
import NavLeft from './components/NavLeft'
import Main from './components/Main'
import Work from './components/Work'
import Contact from './components/Contact'
import Composers from './components/Composers'
import AVClub from './components/AVClub'
import Error404 from './components/Error404'

export default class App extends Component {
  state = {
    isMobile: false,
    documentHasFocus: document.hasFocus()
  }

  constructor (props) {
    super(props)

    this.updateRouteState = this.updateRouteState.bind(this)

    this.customHistory = createBrowserHistory({ basename: '/getdeveloped' })
    this.customHistory.listen(location => {
      this.updateRouteState(location.pathname)
    });

    this.state = {
      location: this.customHistory.location.pathname
    }
  }

  componentDidMount () {
    document.querySelector('.page-inner').style.opacity = 1

    if (this.state.documentHasFocus) {
      setTimeout(() => {
        // go to a.v. club
      }, 5000)
    } else {
      window.addEventListener('focus', ev => {
        if (!this.state.documentHasFocus) {
          this.setState({
            documentHasFocus: document.hasFocus()
          })
          // go to a.v. club
        }
      })
    }

    document.addEventListener('resized', (ev) => {
      if (ev.data.width < 984 && !this.state.isMobile) {
        this.setState({
          isMobile: true
        })
      } else if (ev.data.width >= 984 && this.state.isMobile) {
        this.setState({
          isMobile: false
        })
      }
    })
  }

  updateRouteState (location) {
    this.setState({
      location
    })
  }

  render () {
    const supportsHistory = 'pushState' in window.history

    return (
      <Router history={this.customHistory} forceRefresh={!supportsHistory}>
        { this.state.isMobile
          ? <div className='main-wrap--mobile'>
              <Main />
              <div className='main-inner--mobile'>
                <AccortionLink to="/avclub">A.V. Club</AccortionLink>
                <AccordionRoute path="/avclub" component={AVClub}/>

                <AccortionLink to="/work">Work</AccortionLink>
                <AccordionRoute path="/work" component={Work}/>

                <AccortionLink to="/composers">Composers</AccortionLink>
                <AccordionRoute exact path="/composers" component={Composers}/>

                <AccortionLink to="/contact">Contact</AccortionLink>
                <AccordionRoute path="/contact" component={Contact}/>
              </div>
            </div>
          : <div className='main-wrap'>
              <NavTop location={this.state.location} />
              <NavRight location={this.state.location} />
              <NavBottom location={this.state.location} />
              <NavLeft location={this.state.location} />
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
                            enter: 500,
                            exit: 500,
                          }}
                          onEnter={page => { setTimeout(() => { page.querySelector('.page-inner').style.opacity = 1 },200) }}
                        >
                          <Route
                            location={location}
                            render={() => (
                              <Switch>
                                <Route exact path="/" component={Main} />
                                <Route path="/work" component={Work} />
                                <Route path="/composers" component={Composers} />
                                <Route path="/contact" component={Contact} />
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
        }
      </Router>
    )
  }
}
