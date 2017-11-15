import * as React from 'react';
import { Component, Props } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import CampForm from '../containers/CampForm';
import { fetchStart as fetchAddFacilities } from '../modules/addFacility';
import { getRequsetCamp } from '../modules/camp';
import { history } from '../store';
import store from '../store';
import i18n from '../utilities/i18n';
import Camp from '../models/Camp';
import { resetCamp } from '../modules/camp';
interface ICreateProps extends Props<ViewAppComponent> {
  match: {
    params: {
      id: string;
    },
  };
  camp: Camp;
  fetchCamp:(id)=>void;
  reset: ()=>void;
}

class ViewAppComponent extends Component<ICreateProps> {
  constructor(public props: ICreateProps) {
    super(props);
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
          <h1>{ camp.campName }</h1>
          <h2>施設</h2>
          <table>
            <tbody>
            <tr>
              <th>{i18n.t('Name')}</th>
              <th>{i18n.t('Type')}</th>
              <th>{i18n.t('Speciality')}</th>
              <th>{i18n.t('Level')}</th>
              <th>{i18n.t('Effect')}</th>
            </tr>
          {camp.facilities.map((facility, index)=>{
            return (
              <tr key={index}>
                <td>{facility.name}</td>
                <td>{facility.type}</td>
                <td>{facility.speciality}</td>
                <td>{facility.level}</td>
                <td>{facility.effect}</td>
              </tr>
            );

          })}
          </tbody>
          </table>
          <h2>{i18n.t('FreeWriting')}</h2>
          <div>{camp.freeWriting}</div>
          <Link to="/campform/">{i18n.t('Back')}</Link>
        </div>
    );
  }
  public componentWillUnmount(){
    console.log('unmount');
    this.props.reset();
  }
}

const mapStateToProps = (store) => {
  return { camp:store.camp };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCamp(id) {
      dispatch(getRequsetCamp(id));
    },
    reset(){
      dispatch(resetCamp())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAppComponent);
