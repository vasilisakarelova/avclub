import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className="nav nav--right">
      <Link
        to={{
          pathname: '/about',
          state: { prev: true },
        }} className="nav__link" >
        About
      </Link>
    </div>
  );
}
