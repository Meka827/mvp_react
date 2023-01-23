import React from 'react';
import { Field, ErrorMessage } from 'formik';


const Select = ({ label, name, options, ...rest }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field as='select' id={name} name={name} {...rest} >
        {options.map(option => <option key={option.key} value={option.value} >{option.key}</option>)}
      </Field>
    </div>
  );
}

export default Select;
