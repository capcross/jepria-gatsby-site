import React from 'react'
import Link from 'gatsby-link';
import styled from 'styled-components';

const MenuStyled = styled.div`
  background: ${props => props.theme.menuColor};
  padding-top: 10px;
`;

const MenuListStyled = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`;

const MenuStyledLink = styled(Link)`
  color: ${props => props.theme.menuTextColor};
  text-decoration: none;
`;

const Menu = () => (
  <MenuStyled>
    <MenuListStyled>
      <li>
        <MenuStyledLink to="/">JepRia</MenuStyledLink>
      </li>
      <li>
        <MenuStyledLink to="/blog">Новости</MenuStyledLink>
      </li>
      <li>
        <MenuStyledLink to="/apps"><i>Feature</i> как страница</MenuStyledLink>
      </li>
      <li>
        <MenuStyledLink to="/feature"><i>Feature</i> как компонент</MenuStyledLink>
      </li>
      <li>
        <MenuStyledLink to="/feature-as-site"><i>Feature</i> как сайт</MenuStyledLink>
      </li>
      <li>
        <MenuStyledLink to="/about">О нас</MenuStyledLink>
      </li>
      <li>
        <MenuStyledLink to="/themes">Темы</MenuStyledLink>
      </li>
    </MenuListStyled>    
  </MenuStyled>)

export default Menu
