import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  return (
    <header class="header">
    {/* <header style={headerStyle}> */}
    {/* <header style={{ color: 'red', backgroundColor: 'black' }}> */}
      <h1>{title}</h1>
      <Button btnName="Add"/>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string,
}

// const headerStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header