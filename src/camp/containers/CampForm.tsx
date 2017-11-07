import * as React from 'react'
import {Component} from 'react'
import { Field, reduxForm } from 'redux-form'

interface IErrors{
  campName?: string;
}

const validate = values => {
  const errors:IErrors = {}
  if (!values.campName) {
    errors.campName = 'Required'
  }
  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const FormComponent = props => {
    const { handleSubmit } = props
    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="campName">キャンプ名</label>
          <Field name="campName" component={renderField} type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
  
  const CampForm = reduxForm({
    form: 'camp',
    validate
  })(FormComponent);
  
  export default CampForm;