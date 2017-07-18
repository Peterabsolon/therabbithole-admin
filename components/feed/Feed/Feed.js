import React from 'react'
import { inject, observer } from 'mobx-react'
import { Flex, Box } from 'rebass'
import FeedPanel from 'components/feed/FeedPanel/FeedPanel'

const Feed = ({ appStore: { articlesStore } }) =>
  (<div>
    <Flex>
      {articlesStore.list.map(item =>
        (<Box key={item.source.id} px={3} width={[1, 1 / 2, 1 / 3]}>
          <FeedPanel {...item} />
        </Box>)
      )}
    </Flex>
  </div>)

export default inject('appStore')(observer(Feed))
