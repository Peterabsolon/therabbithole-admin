import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'
import InitStories from 'helpers/hoc/initStories'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('Button', module)
  .addDecorator(story =>
    (<InitStories>
      {story()}
    </InitStories>)
  )
  .addDecorator(withKnobs)
  .addWithInfo('default view', () => <Button children="Hello Button" />)
  .add('default view (with knobs)', () =>
    (<Button
      onClick={action('click')}
      children={text('Label', 'Hello Button')}
      disabled={boolean('Disabled', false)}
    />)
  )
  .add('disabled', () =>
    <Button onClick={action('click')} children={text('Label', 'Hello Button')} disabled />
  )
