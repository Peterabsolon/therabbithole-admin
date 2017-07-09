import React from 'react'
import { inject, observer } from 'mobx-react'
import { Button, Select, Heading, Flex, Box } from 'rebass'

const AppState = ({ appStore: { sourcesStore, articlesStore }, appStore }) => {
  console.log('articlesStore', articlesStore)
  return (
    <div>
      <Flex>
        <Box px={3} width={[1, 1 / 2, 1 / 3]}>
          <Heading mb={3} mt={3}>
            Sources {sourcesStore.sources.length}
          </Heading>
          <Select
            mb={3}
            onChange={e => articlesStore.addSource(sourcesStore.sources[e.target.value])}
          >
            {sourcesStore.sources.map((item, index) =>
              <option key={item.id} value={index}>
                {item.name}
              </option>
            )}
          </Select>
          <Button onClick={() => appStore.reset()} children="Reset app" />
        </Box>
      </Flex>
    </div>
  )
}

export default inject('appStore')(observer(AppState))
