import * as React from 'react';
import { Component, Props } from 'react';
import { Field, reduxForm } from 'redux-form';
import CampForm from '../containers/CampForm';
import { putRequsetCamp } from '../modules/camp';
import store from '../store';
import { connect } from 'react-redux';
import i18n from '../utilities/i18n';

interface IEditProps extends Props<EditAppComponent>{
  submit: (campName, facilities, freeWriting)=>void;
}

class EditAppComponent extends Component<IEditProps> {
  constructor(public props: IEditProps) {
    super(props);
  }
  public submit = (values) => {
    const { campName, facilities, freeWriting } = values;
    this.props.submit(campName, facilities, freeWriting);
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

const mapStateToProps = (store) => {
  return { auth: store.auth };
};
const mapDispatchToProps = (dispatch)=> {
  return {
    submit(campName:string, facilities:any, freeWriting:string) {
      dispatch(putRequsetCamp({
        campName, facilities, freeWriting,
      }));
    },
  };
}

export default connect(mapStateToProps, null)(EditAppComponent);