import * as React from 'react';
import { Component, Props } from 'react';
import { connect } from 'react-redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import i18n from '../utilities/i18n';

interface IProps extends Props<AddFacility> {
  onClick: () => void;
}

/**
 *
 *
 * @class AddFacility
 * @extends {Component<IProps>}
 */
class AddFacility extends Component<IProps> {
  constructor(public props: IProps) {
    super(props);
  }
  public render() {
    return (
        <div>
        <button type="button" onClick={() => { this.props.onClick(); }}>{i18n.t('Add')}</button>
    </div>
    );
  }
}

export default AddFacility;
