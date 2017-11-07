import * as React from 'react'
import { Field, FieldArray } from 'redux-form'
import RenderField from './RenderField'

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
          label="名前"/>
        <Field
          name={`${member}.type`}
          type="text"
          component={RenderField}
          label="タイプ"/>
          <Field
          name={`${member}.speciality`}
          type="text"
          component={RenderField}
          label="指定特技"/>
          <Field
          name={`${member}.level`}
          type="text"
          component={RenderField}
          label="レベル"/>
          <Field
          name={`${member}.effect`}
          type="text"
          component={RenderField}
          label="効果"/>
          <button
            type="button"
            title="Remove Member"
            className="delete"
            onClick={() => fields.remove(index)}/>
        </div>
    </li>
  )
  
  const renderMembers = ({ fields }) => (
    <ul className="list">
      <button type="button" onClick={() => fields.push({})}>Add Facility</button>
      {fields.map(renderSubFields)}
    </ul>
  )
  
  const Facilities = ()=>(
    <div>
        <label className="label">施設</label>
        <FieldArray name="members" component={renderMembers} />
  </div>
  )

  export default Facilities;