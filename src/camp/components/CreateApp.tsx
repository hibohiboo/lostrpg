import * as React from 'react';
import { Component, Props } from 'react';
import { Field, reduxForm } from 'redux-form';
import CampForm from '../containers/CampForm';
import { putRequsetCamp } from '../modules/camp';
import store from '../store';
import { connect } from 'react-redux';
import i18n from '../utilities/i18n';
import { fetchStart } from '../modules/camp';
import { fetchStart as fetchAddFacilities } from '../modules/addFacility';
import {history} from '../store'
interface ICreateProps extends Props<CreateAppComponent>{
  submit: (campName, facilities, freeWriting)=>void;
  fetchCamp: ()=>void;
  camp: any;
  fetchAddFacilities: ()=>void;
}

class CreateAppComponent extends Component<ICreateProps> {
  constructor(public props: ICreateProps) {
    super(props);
    this.props.fetchCamp();
    this.props.fetchAddFacilities();
  }
  public submit = (values) => {
    const { campName, facilities, freeWriting } = values;
    this.props.submit(campName, facilities, freeWriting);

    // topにリダイレクト
    history.push('/');
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
  return { auth: store.auth, camp:store.camp, addFacilities:store.addFacilities  };
};
const mapDispatchToProps = (dispatch)=> {
  return {
    submit(campName:string, facilities:any, freeWriting:string) {
      dispatch(putRequsetCamp({
        campName, facilities, freeWriting,
      }));
    },
    fetchCamp(){
      dispatch(fetchStart('data/blankCamp.json'))
    },
    fetchAddFacilities(){
      dispatch(fetchAddFacilities('data/additionalFacilities.json'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAppComponent);