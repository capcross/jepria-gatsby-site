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

const MeunStyledLink = styled(Link)`
  color: ${props => props.theme.menuTextColor};
  text-decoration: none;
`;

const Menu = () => (
  <MenuStyled>
    <MenuListStyled>
      <li>
        <MeunStyledLink to="/">JepRia</MeunStyledLink>
      </li>
      <li>
        <MeunStyledLink to="/blog">Новости</MeunStyledLink>
      </li>
      <li>
        <MeunStyledLink to="/apps"><i>Feature</i> как страница</MeunStyledLink>
      </li>
      <li>
        <MeunStyledLink to="/feature"><i>Feature</i> как компонент</MeunStyledLink>
      </li>
      <li>
        <MeunStyledLink to="/feature-as-site"><i>Feature</i> как сайт</MeunStyledLink>
      </li>
      <li>
        <MeunStyledLink to="/about">О нас</MeunStyledLink>
      </li>
    </MenuListStyled>    
  </MenuStyled>)

export default Menu
