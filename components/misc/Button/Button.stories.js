import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './Button'

storiesOf('Button', module).addWithInfo('default view', () =>
  (<Button
    onClick={STORYBOOK.action('click')}
    children={STORYBOOK.knobs.text('Label', 'Hello Button')}
    disabled={STORYBOOK.knobs.boolean('Disabled', false)}
  />)
)
