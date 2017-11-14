import * as React from 'react';
import { Component, Props } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import CampForm from '../containers/CampForm';
import { putRequsetCamp } from '../modules/camp';
import i18n from '../utilities/i18n';
import { connect } from 'react-redux';
import User from '../models/User'
interface ILoginProps extends Props<LoginContainer>{
  login: ()=>void;
} 

class LoginContainer extends Component<ILoginProps> {
  constructor(public props: ILoginProps) {
    super(props);
  }
  render() {
    return <button onClick={this.props.login}>{i18n.t('Login Here!')}</button>
  }
}

interface ILogoutProps extends Props<LogoutComponent> {
  logout: ()=>void;
  location?: {
    pathname: string;
  }
  user: User;
} 

class LogoutComponent extends Component<ILogoutProps> {
  constructor(public props: ILogoutProps) {
    super(props);
  }
  componentWillMount() {
    // alert('Private home is at: ' + this.props.location.pathname)
  }

  render() {
    const {user} = this.props;
    const name = user && user.twitterName || '';
    return <div>
              <button onClick={this.props.logout}>{i18n.t('Logout Here!')}</button>
              : {name}
           </div>
  }
}
const LogoutContainer = connect(store=>({user: store.user}), null)(LogoutComponent);

interface IListAppProps extends Props<ListAppComponent>{
  auth: {
    isAuthenticated:boolean;
  }
}

class ListAppComponent extends Component<IListAppProps> {
  constructor(public props: IListAppProps) {
    super(props);
  }
  public render() {
    return (
        <div>
          <h1>{i18n.t('Camps')}</h1>
          { this.props.auth.isAuthenticated ? 
            <LogoutContainer logout={()=>console.log('logout')} />
            : <LoginContainer login={()=>console.log('login')} />
          }
          <p>
            <Link to="/create">{i18n.t('Create new Camp')}</Link>
          </p>
        </div>
    );
  }
}

const mapStateToProps = (store) => {
  return { auth: store.auth };
};

export default connect(mapStateToProps, null)(ListAppComponent);