import * as React from 'react';
import { Field, FieldArray } from 'redux-form';
import { connect } from 'react-redux';
import i18n from '../utilities/i18n';
import RenderField from './RenderField';
import Facility from '../models/Facility';
import AddFacility from './AddFacility';

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

const renderMembers = (props) => {
  const { fields, list } = props;
  if(fields.length == 0){
    list.forEach(element => {
      fields.push(element);
    });
  }
  return (
    <ul className="list">
      {fields.map(renderSubFields)}
      <AddFacility onClick={() => fields.push({})} />
      {/* <button type="button" onClick={() => fields.push({})}>{i18n.t('Add')}</button> */}
    </ul>
  )};

  interface IStateToProps {
    list: Facility[];
  }

const facilities = (props) => {
  return (
    <div>
        <label className="label">{i18n.t('Facility')}</label>
        <FieldArray name="facilities" component={renderMembers} props={props} />
  </div>
  )};

  const mapStateToProps = (store): IStateToProps => {
    return { list: store.facilities };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {};
  };
  ;
  
  export default connect(mapStateToProps, null)(facilities);

