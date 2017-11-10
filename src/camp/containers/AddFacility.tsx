import * as React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import i18n from '../utilities/i18n';

const addFacility = (props)=>
       (
          <div>
            <button type="button" onClick={() =>{ props.onClick() }}>{i18n.t('Add')}</button>
          </div>
      );

  export default addFacility;