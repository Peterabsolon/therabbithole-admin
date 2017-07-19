import React from 'react'
import { storiesOf } from '@storybook/react'
import FeedItem from './FeedItem'

storiesOf('FeedItem', module)
  .addWithInfo('default', () =>
    <FeedItem article={{ title: STORYBOOK.knobs.text('Title', 'Aritcle title') }} />
  )
  .addWithInfo('with image', () =>
    (<FeedItem
      article={{
        title: STORYBOOK.knobs.text('Title', 'Aritcle title'),
        urlToImage:
          'https://storage.googleapis.com/afs-prod/media/media:102d1ebfb7344596ad1b8c5ad0170090/3000.jpeg',
      }}
    />)
  )
