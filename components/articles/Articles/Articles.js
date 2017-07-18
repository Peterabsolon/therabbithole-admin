import React from 'react'
import { observer } from 'mobx-react'
import { Panel, Box, Toolbar, NavLink } from 'rebass'
import Card from './Card'

const Articles = ({ article: { source, feed = [], load, isLoading, remove } }) =>
  (<Box width={[1]}>
    <Panel color="primary">
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
  </Box>)

export default observer(Articles)
