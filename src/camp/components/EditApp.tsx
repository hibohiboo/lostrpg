import * as React from 'react';
import { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import CampForm from '../containers/CampForm';
import { putRequsetCamp } from '../modules/camp';
import store from '../store';
import i18n from '../utilities/i18n';

export default class EditApp extends Component {
  public submit = (values) => {
    // print the form values to the console
    console.log(values);
    const { campName, facilities, freeWriting } = values;
    store.dispatch(putRequsetCamp({
      campName, facilities, freeWriting,
    }));
  }
  public render() {
    return (
        <div>
          <h1>{i18n.t('CreateCamp')}</h1>
          <CampForm onSubmit={this.submit} />
        </div>
    );
  }
}
