import * as React from 'react';
import { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import CampForm from '../containers/CampForm';
import { putRequsetCamp } from '../modules/camp';
import i18n from '../utilities/i18n';

export default class ListApp extends Component {
  public render() {
    return (
        <div>
          <h1>{i18n.t('Camps')}</h1>
        </div>
    );
  }
}
