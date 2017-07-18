import React from 'react'
import styled from 'styled-components'
import { Panel, PanelHeader, Subhead, PanelFooter, Box } from 'rebass'

// UI
import FeedItem from 'components/feed/FeedItem/FeedItem'

// const Button = styled.button`
//   background: red;
//   ${props => console.log(props.theme)};
// `
const FeedPanel = ({ source, feed = [], load, isLoading, remove }) =>
  (<div>
    <Panel color="primary">
      <PanelHeader color="white" bg="primary">
        {source.name} {isLoading && 'loading'}
      </PanelHeader>
      <Box p={3} color="black" bg="white">
        {feed.map(item => <FeedItem key={item.title} {...item} />)}
      </Box>
      <PanelFooter color="white" bg="primary">
        Footer
      </PanelFooter>
    </Panel>
  </div>)

FeedPanel.defaultProps = {
  source: {
    name: '<Source Title>',
  },
  feed: [],
  load: () => {},
  remove: () => {},
  isLoading: false,
}
export default FeedPanel
