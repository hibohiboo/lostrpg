import * as React from 'react';
import { Component, Props } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { history } from '../store';
import { connect } from 'react-redux';
import CampForm from '../containers/CampForm';
import CampList from '../containers/CampList';
import { logout, redirectTwitter } from '../firebase/index';
import User from '../models/User';
import { putRequsetCamp } from '../modules/camp';
import i18n from '../utilities/i18n';

interface ILoginProps extends Props<LoginContainer> {
  login: () => void;
}

class LoginContainer extends Component<ILoginProps> {
  constructor(public props: ILoginProps) {
    super(props);
  }
  public render() {
    return <button onClick={this.props.login}>{i18n.t('Login Here!')}</button>;
  }
}

interface ILogoutProps extends Props<LogoutComponent> {
  logout: () => void;
  location?: {
    pathname: string;
  };
  user: User;
}

class LogoutComponent extends Component<ILogoutProps> {
  constructor(public props: ILogoutProps) {
    super(props);
  }
  public componentWillMount() {
    // alert('Private home is at: ' + this.props.location.pathname)
  }

  public render() {
    const { user } = this.props;
    const name = user && user.twitterName || '';
    return <div>
              <button onClick={this.props.logout}>{i18n.t('Logout Here!')}</button>
              : {name}
           </div>;
  }
}
const LogoutContainer = connect(store => ({ user: store.user }), null)(LogoutComponent);

interface IListAppProps extends Props<ListAppComponent> {
  auth: {
    isAuthenticated: boolean;
  };
}

/**
 * キャンプ一覧ページ
 */
class ListAppComponent extends Component<IListAppProps> {
  constructor(public props: IListAppProps) {
    super(props);
  }

  public login() {
    redirectTwitter();
  }
  public logout() {
    logout();
    history.push('/');
  }
  public render() {
    return (
        <div>
          <h1>{i18n.t('Camps')}</h1>
          { this.props.auth.isAuthenticated ?
            <LogoutContainer logout={this.logout} />
            : <LoginContainer login={this.login} />
          }
          { this.props.auth.isAuthenticated ?
          <p><Link to="/create">{i18n.t('Create new Camp')}</Link></p>
          : ''
          }
          <CampList />
        </div>
    );
  }
}

const mapStateToProps = (store) => {
  return { auth: store.auth };
};

export default connect(mapStateToProps, null)(ListAppComponent);
