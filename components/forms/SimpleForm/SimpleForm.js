import React from 'react'
import MobxReactForm from 'mobx-react-form'
import validatorjs from 'validatorjs'
import Simple from '~/components/forms/SimpleForm/Simple'

const plugins = { dvr: validatorjs }

const fields = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Insert Email',
    rules: 'required|email|string|between:5,25',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Insert Password',
    rules: 'required|string|between:5,25',
  },
]

class MyForm extends MobxReactForm {
  onSuccess(form) {
    // alert('Form is valid! Send the request here.')
    // get field values
    console.log('Form Values!', form, form.values())
  }

  onError(form) {
    // get all form errors
    console.log('All form errors', form.errors())
    // invalidate the form with a custom error message
    form.invalidate('This is a generic error message!')
  }
}

export default props => {
  const form = new MyForm({ values: props.initialValues, fields }, { plugins })

  form.onSuccess = form => props.onSubmit(form.values())

  return <Simple form={form} />
}
