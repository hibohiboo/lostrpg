import * as React from 'react';
import { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import CampForm from '../containers/CampForm';
import i18n from '../utilities/i18n';

class App extends Component {
  public submit = (values) => {
        // print the form values to the console
    console.log(values);
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

export default App;
