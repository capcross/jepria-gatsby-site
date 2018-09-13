import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components';

import Header from '../components/header'
import Menu from '../components/menu'
import './index.css'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// Define what props.theme will look like
const rfTheme = {
  headerColor: "#bf0028",
  headerTextColor: "#fff",
  menuColor: "#474747",
  menuTextColor: "white",
};

const jrTheme = {
  headerColor: "#006363",
  headerTextColor: "#94ECEC",
  menuColor: "#CBF7F7",
  menuTextColor: "black",
};

let theme = jrTheme;

const toggleTheme = () => {
  if(JSON.stringify(document.location).indexOf("/themes") >= 0)
    return theme === rfTheme ? jrTheme : rfTheme;
  else
    return theme;
}

const Layout = ({ children, data }) => {
  theme = toggleTheme();

  const skinButton = theme === jrTheme ?
    <Button>Кнопка "малахитового" скина</Button> :
    <Button>Кнопка "корпоративного" скина</Button>;

  return (
    <div>
      <ThemeProvider theme={theme}>
        <div>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'JepRia new site' },
              { name: 'keywords', content: 'jepria, library, react' },
            ]}
          />
          <Header>
            {data.site.siteMetadata.title}
          </Header>
          <Menu />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children()}
          </div>
          {skinButton}
        </div>
      </ThemeProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
