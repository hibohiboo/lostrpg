import * as React from 'react'
import {Component} from 'react'
import { Field, reduxForm } from 'redux-form'

const FormComponent = props => {
    const { handleSubmit } = props
    return (
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="campName">キャンプ名</label>
          <Field name="campName" component="input" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
  
  const CampForm = reduxForm({
    form: 'camp'
  })(FormComponent);
  
  export default CampForm;