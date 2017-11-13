import * as React from 'react';
import { Component, Props } from 'react';
import { connect } from 'react-redux';
import i18n from '../utilities/i18n';
import Facilities from './Facilities';
import RenderField from './RenderField';

interface IProp extends Props<CampListComponent>{

}
class CampListComponent extends Component<IProp, {}> {
  constructor(public props: IProp) {
    super(props);
  }
  public render() {
    return (
      <div></div>
    );
  }
}

// You have to connect() to any reducers that you wish to connect to yourself
const CampList = connect(
  store =>  ({ camps: store.camps }),
  null,
)(CampListComponent);

export default CampList;
