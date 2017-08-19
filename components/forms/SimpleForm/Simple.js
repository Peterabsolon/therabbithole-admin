import React from 'react'
import { observer } from 'mobx-react'

import Input from '~/components/forms/fields/Input'

export default observer(({ form }) =>
  (<form>
    <h2 className="light-red">Form Register</h2>

    <Input field={form.$('email')} />
    <Input field={form.$('password')} type="password" />
    <button type="button" onClick={form.onReset}>
      Reset
    </button>
    <button type="button" onClick={form.onClear}>
      Clear
    </button>
    <button type="submit" onClick={form.onSubmit}>
      Submit
    </button>
  </form>)
)
