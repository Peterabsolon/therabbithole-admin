import compose from 'recompose/compose'

import withData from './withData'
import withIntl from './withIntl'
import withLayout from './withLayout'
import withStyle from './withStyle'

export const pageWithoutLayout = compose(withData, withIntl, withStyle)

export default compose(pageWithoutLayout, withLayout)
