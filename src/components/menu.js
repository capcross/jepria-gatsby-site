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
      <li>
        <Link to="/">JepRia</Link>
      </li>
      <li>
        <Link to="/blog">Новости</Link>
      </li>
      <li>
        <Link to="/apps"><i>Feature</i> как страница</Link>
      </li>
      <li>
        <Link to="/feature"><i>Feature</i> как компонент</Link>
      </li>
      <li>
        <Link to="/feature-as-site"><i>Feature</i> как сайт</Link>
      </li>
      <li>
        <Link to="/about">О нас</Link>
      </li>
    </ul>
  </div>
)

export default Menu
