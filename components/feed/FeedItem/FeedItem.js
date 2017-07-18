import React from 'react'
import { Box, Media, Image } from 'rebass'

const FeedItem = ({ urlToImage, title }) =>
  (<Box px={3} width={[1]}>
    <Media>
      <Image mr={3} width={50} height={50} src={urlToImage} />
      <p>
        {title}
      </p>
    </Media>
  </Box>)

export default FeedItem
