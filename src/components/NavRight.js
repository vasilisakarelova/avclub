import React from 'react'
import { Link } from 'react-router-dom'

export default ({ location }) => {
  const url = (location === '/about') ? '/' : '/about'
  
  return (
    <div className="nav nav--right">
      <Link
        to={{
          pathname: url,
          state: { prev: true },
        }} className="nav__link" >
        About
      </Link>
    </div>
  );
}
