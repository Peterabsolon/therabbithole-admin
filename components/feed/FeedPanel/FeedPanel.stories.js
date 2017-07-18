import React from 'react'
import { storiesOf } from '@storybook/react'
import FeedPanel from './FeedPanel'

storiesOf('FeedPanel', module)
  .addWithInfo('empty', () =>
    (<FeedPanel
      source={{ name: STORYBOOK.knobs.text('Source Name', '<Source Name>') }}
      isLoading={STORYBOOK.knobs.boolean('IsLoading', false)}
    />)
  )
  .addWithInfo('with articles', () =>
    (<FeedPanel
      source={{ name: STORYBOOK.knobs.text('Source Name', '<Source Name>') }}
      isLoading={STORYBOOK.knobs.boolean('IsLoading', false)}
    />)
  )
