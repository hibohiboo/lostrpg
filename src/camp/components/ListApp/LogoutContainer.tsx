import * as React from 'react';
import { Component, Props } from 'react';
import { connect } from 'react-redux';
import User from '../../models/User';
import i18n from '../../utilities/i18n';

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
    if(user === null){
      return (<div>{i18n.t('now loading...')}</div>);
    }
    const name = user.twitterName;
    return <div>
              <button onClick={this.props.logout}>{i18n.t('Logout Here!')}</button>
              : {name}
           </div>;
  }
}

const logoutContainer = connect(store => ({ user: store.user }), null)(LogoutComponent);

export default logoutContainer;
