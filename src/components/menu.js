import React from 'react'
import Link from 'gatsby-link';
import styled from 'styled-components';

const MenuStyled = styled.div`
  background: black;
  paddingTop: 10px;
`;

const MenuListStyled = styled.ul`
  listStyle: none;
  display: flex;
  justifyContent: space-evenly;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.menuTextColor};
  textDecoration: none;
`;


const Menu = () => (
  <MenuStyled>
    <MenuListStyled>
      <li>
        <StyledLink to="/">JepRia</StyledLink>
      </li>
      <li>
        <StyledLink to="/blog">Новости</StyledLink>
      </li>
      <li>
        <StyledLink to="/apps"><i>Feature</i> как страница</StyledLink>
      </li>
      <li>
        <StyledLink to="/feature"><i>Feature</i> как компонент</StyledLink>
      </li>
      <li>
        <StyledLink to="/feature-as-site"><i>Feature</i> как сайт</StyledLink>
      </li>
      <li>
        <StyledLink to="/about">О нас</StyledLink>
      </li>
    </MenuListStyled>    
  </MenuStyled>)

export default Menu
