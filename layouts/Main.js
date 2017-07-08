import Head from 'next/head'
import Wrapper from './Wrapper'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import { Flex, Box } from 'rebass'

export default ({ children, title = 'Mobx starter' }) =>
  <Wrapper>
    <Head>
      <title>
        {title}
      </title>
    </Head>
    <header>
      <Nav />
    </header>

    <main>
      {children}
    </main>

    <Footer>Footer</Footer>
  </Wrapper>
