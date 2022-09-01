import React from 'react'

const Header = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}
export default Header