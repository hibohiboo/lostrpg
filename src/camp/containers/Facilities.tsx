import * as React from 'react';
import { Field, FieldArray } from 'redux-form';
import i18n from '../utilities/i18n';
import RenderField from './RenderField';

const renderSubFields = (member, index, fields) => (
    <li key={index}>
      <div>
        <h4> #{index + 1}</h4>
      </div>
      <div>
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

const renderMembers = ({ fields }) => (
    <ul className="list">
      {fields.map(renderSubFields)}
      <button type="button" onClick={() => fields.push({})}>{i18n.t('Add')}</button>
    </ul>
  );

const facilities = () => (
    <div>
        <label className="label">{i18n.t('Facility')}</label>
        <FieldArray name="members" component={renderMembers} />
  </div>
  );

export default facilities;
