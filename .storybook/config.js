import { configure, setAddon, addDecorator } from '@storybook/react'
import infoAddon from '@storybook/addon-info'
import InitStories from '~/helpers/hoc/initStories'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import backgrounds from '@storybook/addon-backgrounds'

global.STORYBOOK = {
  action,
  knobs: {
    boolean,
    text
  }
}

addDecorator(story =>
  <InitStories>
    {story()}
  </InitStories>
)
addDecorator(withKnobs)
addDecorator(
  backgrounds([
    {
      name: 'transparent',
      value:
        "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzUzRkE0RUY2M0MyMTFFNzg5RTVBMzJEQkY0OUMxMEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzUzRkE0RjA2M0MyMTFFNzg5RTVBMzJEQkY0OUMxMEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NTNGQTRFRDYzQzIxMUU3ODlFNUEzMkRCRjQ5QzEwRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NTNGQTRFRTYzQzIxMUU3ODlFNUEzMkRCRjQ5QzEwRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjW7Uz4AAAAqSURBVHjaYjx79jwDNqCmpoZVnImBRDCqgRjAgiu8b926NRpK9NMAEGAAOtsF/ZQkCgkAAAAASUVORK5CYII=')",
      default: true
    },
    { name: 'light', value: '#E0E4CC' },
    { name: 'dark', value: '#402020' },
    { name: 'contrast', value: '#FF8B8B' }
  ])
)

setAddon(infoAddon)

const req = require.context('../components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
