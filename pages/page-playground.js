import React from 'react'
import initPage from '~/helpers/hoc/initPage'
import Simple from '~/components/forms/SimpleForm/SimpleForm'

const Index = () =>
  (<div>
    <h1>Playground</h1>
    <Simple initialValues={{ email: 'abc@def.cz' }} onSubmit={model => console.log(model)} />
  </div>)

export default initPage(Index)
