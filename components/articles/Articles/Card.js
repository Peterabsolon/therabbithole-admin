import React from 'react'
import { Box, Media, Image } from 'rebass'

const Card = ({ article }) =>
  (<Box px={3} width={[1]}>
    <Media>
      <Image mr={3} width={50} height={50} src={article.urlToImage} />
      <p>
        {article.title}
      </p>
    </Media>
  </Box>)

export default Card
