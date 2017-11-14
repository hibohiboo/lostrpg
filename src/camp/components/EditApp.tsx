import * as React from 'react';
import { Component, Props } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import CampForm from '../containers/CampForm';
import { fetchStart as fetchAddFacilities } from '../modules/addFacility';
import { getRequsetCamp, fetchStart, postRequsetCamp } from '../modules/camp';
import { history } from '../store';
import store from '../store';
import i18n from '../utilities/i18n';
import { resetCamp } from '../modules/camp';

interface IEditProps extends Props<EditAppComponent> {
  match: {
    params: {
      id: string;
    },
  };
  submit: (campId, campName, facilities, freeWriting) => void;
  fetchCamp: (id) => void;
  camp: any;
  fetchAddFacilities: () => void;
  reset: ()=>void;
}

class EditAppComponent extends Component<IEditProps> {
  constructor(public props: IEditProps) {
    super(props);
    this.props.fetchAddFacilities();
  }
  public submit = (values) => {
    const { campName, facilities, freeWriting } = values;
    const { id } = this.props.match.params;
    this.props.submit(id, campName, facilities, freeWriting);

    // topにリダイレクト
    location.href = "/";
//    history.push('/');
  }

  public componentWillMount(){
    const { id } = this.props.match.params;
    this.props.fetchCamp(id);
  }
  
  public render() {
    const { camp } = this.props;
    if(camp === null){
      return (<div>読み込み中</div>);
    }
    return (
        <div>
          <h1>{i18n.t('EditCamp')}</h1>
          <CampForm onSubmit={this.submit} camp={this.props.camp} />
          <Link to="/">{i18n.t('Back')}</Link>
        </div>
    );
  }
  public componentWillUnmount(){
    console.log('unmount');
    this.props.reset();
  }
}

const mapStateToProps = (store) => {
  return { auth: store.auth, camp:store.camp, addFacilities:store.addFacilities  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    submit(campId:string, campName: string, facilities: any, freeWriting: string) {
      dispatch(postRequsetCamp({
        campId, campName, facilities, freeWriting,
      }));
    },
    fetchCamp(id) {
      dispatch(getRequsetCamp(id));
    },
    fetchAddFacilities() {
      dispatch(fetchAddFacilities('/data/additionalFacilities.json'));
    },
    reset(){
      dispatch(resetCamp())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAppComponent);
