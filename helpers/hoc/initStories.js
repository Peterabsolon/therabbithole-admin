import React from 'react'
import { Provider as ThemeProvider } from 'rebass'
import XRay from 'react-x-ray'
import styled from 'styled-components'

const Wrapper = styled.footer`
  min-height: ${props => props.minHeight ? 'auto' : '100vh'};
  & .css-z33529 > div > div {
    min-height: 100vh;
  }
`
// Theme
import defaultTheme from 'styles/theme/defaultTheme'

export default class Welcome extends React.Component {
  state = {
    xray: true,
  }
  toggle = () => {
    this.setState({
      xray: !this.state.xray,
    })
  }
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <button
          onClick={() => this.toggle()}
          children="x-ray"
          style={{ position: 'absolute', right: 10, bottom: 10, zIndex: 9999 }}
        />
        <Wrapper minHeight={this.state.xray}>
          <XRay className="xxx" disabled={this.state.xray} color="#f0f" backgroundColor="#200020">
            {this.props.children}
          </XRay>
        </Wrapper>
      </ThemeProvider>
    )
  }
}
