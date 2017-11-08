import * as React from 'react';
import { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import i18n from '../utilities/i18n';
import Facilities from './Facilities';
import RenderField from './RenderField';

interface IErrors {
  campName?: string;
}

const validate = (values) => {
  const errors: IErrors = {};
  if (!values.campName) {
    errors.campName = 'Required';
  }
  return errors;
};

const formComponent = (props) => {
  const { handleSubmit } = props;
  const fields = [];
  return (
      <form onSubmit={ handleSubmit }>
        <div>
          <Field name="campName" component={RenderField} label={i18n.t('CampName')} type="text" />
        </div>
        <Facilities />
        <div>
          <button type="submit">{i18n.t('Submit')}</button>
        </div>
      </form>
  );
};

const campForm = reduxForm({
  validate,
  form: 'camp',
})(formComponent);

export default campForm;
