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
  match:{
    params:{
    id:string;
  }
}
}

class CreateAppComponent extends Component<ICreateProps> {
  constructor(public props: ICreateProps) {
    super(props);
    const {id} = this.props.match.params;
  }

  public render() {
    return (
        <div>
          <h1>{id}</h1>
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

export default connect(null, null)(CreateAppComponent);