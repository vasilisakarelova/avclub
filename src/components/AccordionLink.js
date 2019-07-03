import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import * as css from 'classnames'

const AccordtionLink = (props) => {
  const currentPath = props.location.pathname
  const url = props.to
  const to = url.split('/')[1]

  return (
    <div className={css('nav-mobile--link-wrap', [`nav-mobile--link-${to}`])}>
      <Link to={url === currentPath ? '/' : `/${to}`} className='nav-mobile--link'>
        {props.children}
      </Link>
    </div>
  );
}

export default withRouter(AccordtionLink);
