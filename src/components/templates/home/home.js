import React from 'react'
import PropTypes from 'prop-types'
import HeaderWithLogo from '../../organisms/headerWithLogo/headerWithLogo'
import './style.css'

const propTypesHome = {
  href: PropTypes.string,
}

function Home({
  href = '',
  ...props
}) {
  return (
    <div
      className="homePage"
      id={href}
    >
      <HeaderWithLogo {
        ...props
      } />
    </div>
  )
}
Home.propTypes = propTypesHome

export default Home