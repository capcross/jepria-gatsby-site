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

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "red"
  }
}


// Define what props.theme will look like
const theme = {
  main: "green"
};

const Layout = ({ children, data }) => (
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
        <Header siteTitle={data.site.siteMetadata.title} />
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
          <Button>В теме на большей глубине вложенности</Button>
        </div>
        <Button>В теме</Button>
      </div>
    </ThemeProvider>
    <Button>Вне темы</Button>
  </div>
)

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
