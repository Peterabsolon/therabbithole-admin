import React, { Component } from 'react'
import Head from 'next/head'
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'
import { Flex, Box } from 'rebass'
import { FormattedMessage } from 'react-intl'

import styled from 'styled-components'

const Wrapper = styled.footer`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: #d6d463;

  main {
    flex: 1;
  }
`

export default ComposedComponent =>
  class WithLayout extends Component {
    render() {
      return (
        <Wrapper>
          <Header />
          <Head>
            <title>Mobx app</title>
          </Head>

          <main>
            <ComposedComponent {...this.props} />
          </main>

          <Footer>
            <FormattedMessage
              id="Footer.madeBy"
              values={{
                author: 'Vladimír Vaněk',
              }}
            />
          </Footer>
        </Wrapper>
      )
    }
  }
