import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

const HeaderStyled = styled.div`
  background: ${props => props.theme.headerColor};
  marginBottom: 0;
`;

const SubHeaderStyled = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.headerTextColor};
  textDecoration: none;
`;

const Header = (props) => (
  <HeaderStyled>  
    <SubHeaderStyled>
      <h1 style={{ margin: 0 }}>
        <StyledLink to="/">
          {props.children}
        </StyledLink>
      </h1>
    </SubHeaderStyled>
  </HeaderStyled>  
)

export default Header
