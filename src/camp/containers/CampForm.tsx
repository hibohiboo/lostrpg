import * as React from 'react'
import {Component} from 'react'
import { Field, reduxForm, FieldArray } from 'redux-form'
import RenderField from './RenderField'
import Facilities from './Facilities'

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


const FormComponent = props => {
    const { handleSubmit } = props
    const fields = [];
    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <Field name="campName" component={RenderField} label="キャンプ名" type="text" />
        </div>
        <Facilities />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
  
  const CampForm = reduxForm({
    form: 'camp',
    validate
  })(FormComponent);
  
  export default CampForm;