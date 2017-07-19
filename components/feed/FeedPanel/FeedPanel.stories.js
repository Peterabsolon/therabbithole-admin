import React from 'react'
import { storiesOf } from '@storybook/react'
import FeedPanel from './FeedPanel'

storiesOf('FeedPanel', module)
  .addWithInfo('empty feed', () =>
    (<FeedPanel
      item={{
        source: { name: STORYBOOK.knobs.text('Source Name', '<Source Name>') },
        isLoading: STORYBOOK.knobs.boolean('IsLoading', false),
      }}
    />)
  )
  .addWithInfo('with articles', () =>
    (<FeedPanel
      item={{
        source: { name: STORYBOOK.knobs.text('Source Name', '<Source Name>') },
        isLoading: STORYBOOK.knobs.boolean('IsLoading', false),
        load: STORYBOOK.action('Reload'),
        feed: [
          { title: 'Article without image' },
          {
            title: 'Article with image',
            urlToImage:
              'https://storage.googleapis.com/afs-prod/media/media:102d1ebfb7344596ad1b8c5ad0170090/3000.jpeg',
          },
          {
            title:
              'First on CNN: Special Counsel investigators seeking info from eighth man at Trump Tower meeting',
            urlToImage:
              'http://i2.cdn.cnn.com/cnnnext/dam/assets/170410121034-trump-super-tease.jpg',
          },
          {
            title: 'Samsung Galaxy Note 7s will be scrapped for parts and rare metals',
            urlToImage:
              'https://i.amz.mshcdn.com/zjFGCDGerR8b_CwIiLXDdXeMZkE=/1200x630/2017%2F07%2F18%2Fe5%2Fd7621ff0b490475c9bd65ae3fda9fb1d.84d64.jpg',
          },
        ],
      }}
    />)
  )
