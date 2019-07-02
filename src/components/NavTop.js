import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className="nav nav--top">
      <Link
        to={{
          pathname: '/avclub',
          state: { prev: true },
        }} className="nav__link" >
        A.V. Club
      </Link>
    </div>
  );
}
