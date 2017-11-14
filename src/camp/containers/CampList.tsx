import * as React from 'react';
import { Component, Props } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import i18n from '../utilities/i18n';
import Facilities from './Facilities';
import RenderField from './RenderField';
import { fetchRequsetCamp } from '../modules/camps'

interface IProp extends Props<CampListComponent>{
  camps:any;
  fetch: ()=>void;
}
class CampListComponent extends Component<IProp, {}> {
  constructor(public props: IProp) {
    super(props);
    this.props.fetch();
  }
  public render() {
    const {camps} = this.props;
    if(camps === null) return <div>no camps</div>;
    console.log(camps)
    return (
      <ul>
        {
          camps.map((camp)=>{
            return (
              <li key={camp.campId}>
                <Link to={`/view/${camp.campId}`}>{camp.campName}</Link>
                
              </li>
            )
        })}
      </ul>
    );
  }
}

export default connect(
  store =>  ({ camps: store.camps }),
  dispatch=>({ fetch(){
    dispatch(fetchRequsetCamp())
  }}),
)(CampListComponent);

