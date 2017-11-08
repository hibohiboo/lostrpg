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
          label={i18n.t('name')}/>
        <Field
          name={`${member}.type`}
          type="text"
          component={RenderField}
          label={i18n.t('type')}/>
          <Field
          name={`${member}.speciality`}
          type="text"
          component={RenderField}
          label={i18n.t('speciality')}/>
          <Field
          name={`${member}.level`}
          type="text"
          component={RenderField}
          label={i18n.t('level')}/>
          <Field
          name={`${member}.effect`}
          type="text"
          component={RenderField}
          label={i18n.t('effect')}/>
          <button
            type="button"
            title={i18n.t('delete')}
            className="delete"
            onClick={() => fields.remove(index)}/>
        </div>
    </li>
  );

const renderMembers = ({ fields }) => (
    <ul className="list">
      {fields.map(renderSubFields)}
      <button type="button" onClick={() => fields.push({})}>{i18n.t('add')}</button>
    </ul>
  );

const facilities = () => (
    <div>
        <label className="label">{i18n.t('facility')}</label>
        <FieldArray name="members" component={renderMembers} />
  </div>
  );

export default facilities;
