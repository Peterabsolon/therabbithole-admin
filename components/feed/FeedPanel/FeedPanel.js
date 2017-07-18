import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'
import { Panel, PanelHeader, Text, PanelFooter, Box, Toolbar, NavLink } from 'rebass'

// UI
import FeedItem from 'components/feed/FeedItem'
import IconRefresh from 'react-icons/lib/md/refresh'
import IconRemove from 'react-icons/lib/md/clear'

// const Button = styled.button`
//   background: red;
//   ${props => console.log(props.theme)};
// `
const FeedPanel = ({ feed: { source, feed = [], load, isLoading, remove } }) =>
  (<div>
    <Panel color="primary">
      <PanelHeader p={0} color="white" bg="primary">
        <Toolbar color="white" bg="primary" pr={0}>
          {source.name} {isLoading && 'loading'}
          <NavLink ml="auto" py={1} onClick={() => load()}>
            <IconRefresh width={28} height={28} color="#fff" />
          </NavLink>
          <NavLink fpy={1} onClick={() => remove()}>
            <IconRemove width={28} height={28} color="#fff" />
          </NavLink>
        </Toolbar>
      </PanelHeader>
      <Box color="black" bg="white">
        {feed.map(item => <FeedItem key={item.title} article={item} />)}
      </Box>
      <PanelFooter p={0} color="primary" bg="white">
        <Toolbar color="black" bg="white">
          <Text fontSize={0}>Last Update: 2 minutas ago</Text>
        </Toolbar>
      </PanelFooter>
    </Panel>
  </div>)

FeedPanel.defaultProps = {
  feed: {
    source: {
      name: '<Source Title>',
    },
    feed: [],
    load: () => {},
    remove: () => {},
    isLoading: false,
  },
}
export default observer(FeedPanel)
