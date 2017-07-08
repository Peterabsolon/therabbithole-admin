import React from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Select, Heading, Flex, Box } from 'rebass'
import Card from './Card'

const Articles = ({ article: { source, feed = [] } }) => {
  console.log('pro', source)
  return (
    <Box px={3} width={[1]}>
      <Heading children={source.name} />
      <p>
        Feed length {feed.length}
        {feed.map(item => <Card key={item.title} article={item} />)}
      </p>
    </Box>
  )
}

export default observer(Articles)
