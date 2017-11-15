import * as React from 'react';
import { Component, Props } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import CampForm from '../../containers/CampForm';
import CampList from '../../containers/CampList';
import { logout, redirectTwitter } from '../../firebase/index';

import { putRequsetCamp } from '../../modules/camp';
import { history } from '../../store';
import i18n from '../../utilities/i18n';
import LoginComponent from './LoginComponent';
import LogoutContainer from './LogoutContainer';

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
    location.href = '/campform/';
//    history.push('/');
  }
  public render() {
    return (
        <div>
          <h1>{i18n.t('Camps')}</h1>
          <p>
            デザインとか動作が甘いですが、とりあえず動作します。
            firebase、react勉強中。
          </p>
          <h2>TODO</h2>
          <ul>
            <li>キャラクターシートも作る</li>
            <li>削除</li>
            <li>デザイン（センス足りないです。デザインくださる方がいればツイッターで一声くださると幸い。お助け！）</li>
            <li>動作が遅延していることの修正</li>

          </ul>
          <h2>{i18n.t('Camps')}</h2>
          { this.props.auth.isAuthenticated ?
            <LogoutContainer logout={this.logout} />
            : <LoginComponent login={this.login} />
          }
          { this.props.auth.isAuthenticated ?
          <p><Link to="/campform/create">{i18n.t('Create new Camp')}</Link></p>
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
