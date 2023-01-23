import React from 'react'
import { Field } from 'formik'

function Textarea (props) {
  const { label, name, ...rest } = props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field as='textarea' id={name} name={name} {...rest} />
    </div>
  )
}

export default Textarea