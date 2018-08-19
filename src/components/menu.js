import React from 'react'
import Link from 'gatsby-link';

const Menu = () => (
  <div
    style={{
      background: '#CBF7F7',
      paddingTop: '10px',
    }}>

    <ul 
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
    }}>
      <li><Link to="/">JepRia</Link></li>
      {/* <li><Link to="/news">Новости</Link></li> */}
      <li><Link to="/services">Сервисы</Link></li>
      <li><Link to="/about">О нас</Link></li>
    </ul>
  </div>
)

export default Menu
