import React from 'react'
import { Link } from 'react-router-dom'

export default ({ location }) => {
  const url = (location === '/work') ? '/' : '/work'

  return (
    <div className="nav nav--left">
      <Link
        to={{
          pathname: url,
          state: { prev: true },
        }} className="nav__link" >
        Work
      </Link>
    </div>
  );
}
