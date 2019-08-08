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
  constructor (props) {
    super(props)

    this.updateRouteState = this.updateRouteState.bind(this)

    let prevPath = window.location.pathname.replace('/getdeveloped', '')

    this.customHistory = createBrowserHistory({ basename: '/getdeveloped' })
    this.customHistory.listen(currentLocation => {
      this.updateRouteState(currentLocation.pathname, prevPath)
      prevPath = currentLocation.pathname
    });

    this.state = {
      isMobile: window.innerWidth < 984,
      documentHasFocus: document.hasFocus(),
      location: this.customHistory.location.pathname,
      prevPath
    }
  }

  componentDidMount () {
    document.querySelector('.page-inner').style.opacity = 1

    document.addEventListener('resized', (ev) => {
      if (ev.data.width < 984 && !this.state.isMobile) {
        this.setState({
          isMobile: true
        })
      } else if (ev.data.width >= 984 && this.state.isMobile) {
        this.setState({
          isMobile: false
        })
        document.querySelector('.page-inner').style.opacity = 1
      }
    })

    if (this.state.location !== '/') return

    if (this.state.documentHasFocus) {
      setTimeout(() => {
        this.customHistory.push('/avclub')
      }, 5000)
    } else {
      window.addEventListener('focus', ev => {
        if (!this.state.documentHasFocus) {
          this.setState({
            documentHasFocus: document.hasFocus()
          })
          this.customHistory.push('/avclub')
        }
      })
    }
  }

  updateRouteState (location, prevPath) {
    this.setState({
      location,
      prevPath
    })
  }

  render () {
    const supportsHistory = 'pushState' in window.history
    const avclub = this.props.data.avclub
    const composers = this.props.data.composers
    const contact = this.props.data.contact
    const work = this.props.data.work

    return (
      <Router history={this.customHistory} forceRefresh={!supportsHistory}>
        { this.state.isMobile
          ? <div className='main-wrap--mobile'>
              <Main />
              <div className='main-inner--mobile'>
                <AccortionLink to="/avclub">A.V. Club</AccortionLink>
                <AccordionRoute history={this.customHistory} path="/avclub" data={avclub} component={AVClub}/>

                <AccortionLink to="/work">Work</AccortionLink>
                <AccordionRoute history={this.customHistory} path="/work" data={work} component={Work}/>

                <AccortionLink to="/composers">Composers</AccortionLink>
                <AccordionRoute history={this.customHistory} exact path="/composers" data={composers} component={Composers}/>

                <AccortionLink to="/contact">Contact</AccortionLink>
                <AccordionRoute history={this.customHistory} path="/contact" data={contact} component={Contact}/>
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
                                <Route path="/work" render={() => <Work data={work} />} />
                                <Route path="/composers" render={() => <Composers data={composers} />} />
                                <Route path="/contact" render={() => <Contact data={contact} />} />
                                <Route path="/avclub" render={() => <AVClub data={avclub} />} />
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
