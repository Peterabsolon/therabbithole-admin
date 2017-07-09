import React from 'react'
import { inject, observer } from 'mobx-react'
import {
  Panel,
  PanelHeader,
  Subhead,
  PanelFooter,
  Button,
  Select,
  Heading,
  Flex,
  Box,
  Toolbar,
  NavLink
} from 'rebass'
import Card from './Card'

const Articles = ({ article: { source, feed = [], load, isLoading, remove } }) => {
  return (
    <Box width={[1]}>
      <Panel color="blue">
        <Toolbar>
          <NavLink>
            {source.name}
          </NavLink>
          <NavLink disabled ml="auto">
            {isLoading && 'loading'}
          </NavLink>
          <NavLink disabled onClick={() => load()}>
            Reload
          </NavLink>
        </Toolbar>
        <Box>
          {feed.map(item => <Card key={item.title} article={item} />)}
        </Box>
        <Toolbar>
          <NavLink ml="auto" disabled onClick={() => remove()}>
            Remove
          </NavLink>
        </Toolbar>
      </Panel>
    </Box>
  )
}

export default observer(Articles)
