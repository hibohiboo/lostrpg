import * as React from 'react'
import {Component} from 'react'
import { Field, reduxForm, FieldArray } from 'redux-form'
import RenderField from './RenderField'
import Facilities from './Facilities'
import i18n from '../utilities/i18n';

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
          <Field name="campName" component={RenderField} label={i18n.t('campName')} type="text" />
        </div>
        <Facilities />
        <div>
          <button type="submit">{i18n.t('submit')}</button>
        </div>
      </form>
    )
  }
  
  const CampForm = reduxForm({
    form: 'camp',
    validate
  })(FormComponent);
  
  export default CampForm;