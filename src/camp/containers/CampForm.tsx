import * as React from 'react';
import { Component, Props } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, formPropTypes, reduxForm } from 'redux-form';
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
  constructor(public props: formPropTypes) {
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
            <label>{i18n.t('FreeWriting')}</label>
            <Field name="freeWriting" component="textarea" />
          </div>
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

// You have to connect() to any reducers that you wish to connect to yourself
const initializeFromStateForm = connect(
  (store, ownProps: any) =>  ({ initialValues: ownProps.camp }),
  null,
)(campForm);

export default initializeFromStateForm;
