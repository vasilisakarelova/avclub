import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className="nav nav--left">
      <Link
        to={{
          pathname: '/work',
          state: { prev: true },
        }} className="nav__link" >
        Work
      </Link>
    </div>
  );
}
