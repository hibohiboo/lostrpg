import * as React from 'react';
import { Component, Props } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRequsetCamp } from '../modules/camps';
import i18n from '../utilities/i18n';
import Facilities from './Facilities';
import RenderField from './RenderField';

interface IProp extends Props<CampListComponent> {
  camps: any;
  fetch: () => void;
  auth: any;
}
class CampListComponent extends Component<IProp, {}> {
  constructor(public props: IProp) {
    super(props);
    this.props.fetch();
  }
  public render() {
    const { camps, auth } = this.props;
    if (camps === null) { return <div>no camps</div>; }

    return (
      <ul>
        {
          camps.map((camp) => {
            return (
              <li key={camp.campId}>
                <Link to={`/view/${camp.campId}`}>{camp.campName}</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                { auth.uid === camp.uid ? <Link to={`/edit/${camp.campId}`}>{i18n.t('Edit')}</Link> : ''}
              </li>
            );
          })}
      </ul>
    );
  }
}

export default connect(
  store =>  ({ camps: store.camps, auth: store.auth }),
  dispatch => ({ fetch() {
    dispatch(fetchRequsetCamp());
  }}),
)(CampListComponent);

