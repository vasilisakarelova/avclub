import React from 'react'
import { Link } from 'react-router-dom'

export default ({ location }) => {
  const url = (location === '/contact') ? '/' : '/contact'

  return (
    <div className="nav nav--left">
      <Link
        to={{
          pathname: url,
          state: { prev: true },
        }} className="nav__link" >
        Contact
      </Link>
    </div>
  );
}
