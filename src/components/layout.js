import React from 'react'
import base from './base.css'
import Container from './container'
import Navigation from './navigation'
import Footer from './Footer'
import PreFooter from './preFooter'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Head />
        {children}
        <PreFooter />
        <Footer />
      </Container>
    )
  }
}

export default Template
