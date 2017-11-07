import * as React from 'react'
import {Component} from 'react'
import { Field, reduxForm } from 'redux-form'

const FormComponent = props => {
    const { handleSubmit } = props
    return (
      <form onSubmit={ handleSubmit }>
        { /* form body*/ }
      </form>
    )
  }
  
  const CampForm = reduxForm({
    form: 'contact'
  })(FormComponent);
  
  export default CampForm;