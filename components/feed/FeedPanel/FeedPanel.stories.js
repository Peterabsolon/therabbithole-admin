import React from 'react'
import { storiesOf } from '@storybook/react'
import FeedPanel from './FeedPanel'
import initStories from 'helpers/hoc/initStories'

storiesOf('FeedPanel', module)
  .addDecorator(story => initStories(story()))
  .add('without props', () => <FeedPanel />)
  .add('with some props', () => <FeedPanel text="The Comp" />)
