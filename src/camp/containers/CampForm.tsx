import * as React from 'react';
import { Component, Props } from 'react';
import { Field, FieldArray, reduxForm, formPropTypes } from 'redux-form';
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

class FormComponent extends Component<formPropTypes, {}> {
  constructor(public props:formPropTypes) {
    super(props);
  }
  public render() {
    const { handleSubmit } = this.props;
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
  }
}

const campForm = reduxForm({
  validate,
  form: 'camp',
})(FormComponent);

export default campForm;
