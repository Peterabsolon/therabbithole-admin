import React from 'react'
import styled from 'styled-components'
import { Panel, PanelHeader, Text, PanelFooter, Box, Toolbar, NavLink } from 'rebass'

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
      <Box color="black" bg="white">
        {feed.map(item => <FeedItem key={item.title} {...item} />)}
      </Box>
      <PanelFooter p={0} color="primary" bg="white">
        <Toolbar color="black" bg="white">
          <Text fontSize={0}>Last Update: 2 minutas ago</Text>
          <NavLink ml="auto" disabled onClick={() => load()}>
            Update
          </NavLink>
        </Toolbar>
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
