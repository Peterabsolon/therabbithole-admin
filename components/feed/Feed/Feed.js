import React from 'react'
import { inject, observer } from 'mobx-react'
import { Flex, Box } from 'rebass'
import FeedPanel from 'components/feed/FeedPanel'

const Feed = ({ appStore: { articlesStore } }) =>
  (<Box my={2}>
    <Flex>
      {articlesStore.list.map(item =>
        (<Box key={item.source.id} px={2} width={[1, 1 / 2, 1 / 3]}>
          <FeedPanel feed={item} />
        </Box>)
      )}
    </Flex>
  </Box>)

export default inject('appStore')(observer(Feed))
