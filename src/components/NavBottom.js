import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className="nav nav--bottom">
      <Link
        to={{
          pathname: '/composers',
          state: { prev: true },
        }} className="nav__link" >
        Composers
      </Link>
    </div>
  );
}
