import React from 'react'
import { inject, observer } from 'mobx-react'
import { Select, Flex, Box } from 'rebass'

const SourceSelect = ({ appStore: { sourcesStore, articlesStore } }) =>
  (<div>
    <Flex>
      <Box p={2} width={[1, 1 / 2, 1 / 3]}>
        <Select
          bg="white"
          onChange={el => articlesStore.addSource(sourcesStore.sources[el.target.value])}
        >
          {sourcesStore.sources.map((item, index) =>
            (<option key={item.id} value={index}>
              {item.name}
            </option>)
          )}
        </Select>
      </Box>
    </Flex>
  </div>)

export default inject('appStore')(observer(SourceSelect))
