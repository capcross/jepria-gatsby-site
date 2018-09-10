import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from "styled-components"

import Header from '../components/header'
import Footer from '../components/footer'
import Menu from '../components/menu'
import './index.css'

// Create a Wrapper component that'll render a <article> tag with some styles
const Wrapper = styled.article`
//  padding: 4em;
  background: papayawhip;
`

const Layout = ({ children, data }) => (
  <Wrapper>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'JepRia new site' },
          { name: 'keywords', content: 'jepria, library, react' },
        ]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Menu/>
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
      {/* <Footer/> */}
    </div>
  </Wrapper>    
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
