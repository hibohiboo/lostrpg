import * as React from 'react';
import { Component, Props } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray } from 'redux-form';
import Facility from '../models/Facility';
import i18n from '../utilities/i18n';
import AddFacility from './AddFacility';
import RenderField from './RenderField';

const renderSubFields = (member, index, fields) => (
    <li key={index}>
      <div>
        <h4> #{index + 1}</h4>
      </div>
      <div className="facilities">
        <Field
          name={`${member}.name`}
          type="text"
          component={RenderField}
          label={i18n.t('Name')}/>
        <Field
          name={`${member}.type`}
          type="text"
          component={RenderField}
          label={i18n.t('Type')}/>
          <Field
          name={`${member}.speciality`}
          type="text"
          component={RenderField}
          label={i18n.t('Speciality')}/>
          <Field
          name={`${member}.level`}
          type="text"
          component={RenderField}
          label={i18n.t('Level')}/>
          <Field
          name={`${member}.effect`}
          type="text"
          component={RenderField}
          label={i18n.t('Effect')}/>
          <button
            type="button"
            title={i18n.t('Delete')}
            className="delete"
            onClick={() => fields.remove(index)}/>
        </div>
    </li>
  );

const renderMembers = (props: {fields: Facility[]; list: Facility[]}) => {
  const { fields, list } = props;

  if (fields.length === 0) {
    list.forEach((element) => {fields.push(element);});
  }

  return (
    <ul className="list">
      {fields.map(renderSubFields)}
      <AddFacility onClick={(m:Facility) => fields.push(m)} />
    </ul>
  );
};

interface IStateToProps {
  list: Facility[];
}
interface IProps extends Props<FacilitiesComponent> {
  onClick: () => void;
}

class FacilitiesComponent extends Component<IProps> {
  constructor(public props: IProps) {
    super(props);
  }
  public render() {
    return (
      <div>
        <label className="label">{i18n.t('Facility')}</label>
        <FieldArray name="facilities" component={renderMembers} props={this.props} />
      </div>
    );
  }
}

const mapStateToProps = (store): IStateToProps => {
  return { list: store.facilities };
};

export default connect(mapStateToProps, null)(FacilitiesComponent);
