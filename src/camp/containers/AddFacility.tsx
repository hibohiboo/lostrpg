import * as React from 'react';
import { Component, Props } from 'react';
import { connect } from 'react-redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import Facility from '../models/Facility';
import i18n from '../utilities/i18n';

interface IProps extends Props<AddFacilityComponent> {
  onClick: (m: Facility) => void;
  list: Facility[];
  selected: string;
}

/**
 * 追加ボタン
 *
 * @class AddFacility
 * @extends {Component<IProps>}
 */
class AddFacilityComponent extends Component<IProps> {
  constructor(public props: IProps) {
    super(props);
  }
  public render() {
    return (
    <div>
      <Field name="addFacility" component="select">
      {this.props.list.map((m, i) => (
        <option key={i} value={m.name}>{m.name}</option>
      ))}
      </Field>

      <button type="button"
         onClick={() => {
           const facility = this.props.list.find(m => m.name === this.props.selected);
           if (facility !== undefined) {
             this.props.onClick(facility);
           }
         }
      }>
      {i18n.t('Add')}
      </button>
    </div>
    );
  }
}
interface IStateToProps {
  list: Facility[];
  selected: string;
}

const selector = formValueSelector('camp'); // <-- same as form name

const mapStateToProps = (store): IStateToProps => {
  const selected = selector(store, 'addFacility');
  return { selected, list: store.addFacilities };
};

export default connect(mapStateToProps, null)(AddFacilityComponent);
