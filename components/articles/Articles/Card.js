import React from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Select, Heading, Flex, Box, Media, Image } from 'rebass'

const Card = ({ article }) => {
  console.log('props', article)
  return (
    <Box px={3} width={[1]}>
      <Media>
        <Image mr={3} width={50} height={50} src={article.urlToImage} />
        <p>
          {article.title}
        </p>
      </Media>
    </Box>
  )
}

export default Card
