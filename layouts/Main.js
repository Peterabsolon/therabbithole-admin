import Head from 'next/head'
import Wrapper from './Wrapper'
import Header from 'components/layout/Header'
import Footer from 'components/Footer'
import { Flex, Box } from 'rebass'

export default ({ children, title = 'Mobx starter' }) =>
  (<Wrapper>
    <Header />
    <Head>
      <title>
        {title}
      </title>
    </Head>

    <main>
      {children}
    </main>

    <Footer>Footer</Footer>
  </Wrapper>)
