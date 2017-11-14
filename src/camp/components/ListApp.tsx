import * as React from 'react';
import { Component, Props } from 'react';
import { Field, reduxForm } from 'redux-form';
import CampForm from '../containers/CampForm';
import { putRequsetCamp } from '../modules/camp';
import i18n from '../utilities/i18n';
import { connect } from 'react-redux';

interface ILoginProps extends Props<LoginContainer>{
  login: ()=>void;
} 

class LoginContainer extends Component<ILoginProps> {
  constructor(public props: ILoginProps) {
    super(props);
  }
  render() {
    return <button onClick={this.props.login}>Login Here!</button>
  }
}

interface ILogoutProps extends Props<LogoutContainer> {
  logout: ()=>void;
  location?: {
    pathname: string;
  }
} 

class LogoutContainer extends Component<ILogoutProps> {
  constructor(public props: ILogoutProps) {
    super(props);
  }
  componentWillMount() {
    // alert('Private home is at: ' + this.props.location.pathname)
  }

  render() {
    return <button onClick={this.props.logout}>Logout Here!</button>
  }
}

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
        </div>
    );
  }
}

const mapStateToProps = (store) => {
  return { auth: store.auth };
};

export default connect(mapStateToProps, null)(ListAppComponent);