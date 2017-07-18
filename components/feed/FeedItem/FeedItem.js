import React from 'react'
import { Box, Media } from 'rebass'
import styled from 'styled-components'

const imageWidth = 80

const FeedHeading = styled.h3`
  flex: 1;
  font-weight: normal;
  font-size: 14px;
  margin-left: ${imageWidth + 12}px;
`
const ImageWrapper = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${imageWidth}px;
  background: url(${props => props.urlToImage});
  background-size: cover;
`
const FeedItem = ({ article: { urlToImage, title } }) =>
  (<Box pr={2} style={{ position: 'relative' }}>
    <Media>
      {urlToImage && <ImageWrapper urlToImage={urlToImage} />}
      <FeedHeading>
        {title}
      </FeedHeading>
    </Media>
  </Box>)

export default FeedItem
