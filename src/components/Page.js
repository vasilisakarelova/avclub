import React from 'react'
import PropTypes from 'prop-types'
import * as css from 'classnames'
import { withRouter } from 'react-router-dom'

function Page({
  children,
  background,
  name,
  location: {
    state,
  },
}) {
  return (
    <section className={css('page', { [`page${name}--prev`]: state && state.prev, [`page${name}`]: name !== undefined } )} style={{ background }}>
      {children}
    </section>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
};

Page.defaultProps = {
  background: '#223',
};

export default withRouter(Page);
