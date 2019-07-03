import React from 'react'
import { Link } from 'react-router-dom'

export default ({ location }) => {
  const url = (location === '/composers') ? '/' : '/composers'

  return (
    <div className="nav nav--bottom">
      <Link
        to={{
          pathname: url,
          state: { prev: true },
        }} className="nav__link" >
        Composers
      </Link>
    </div>
  );
}
