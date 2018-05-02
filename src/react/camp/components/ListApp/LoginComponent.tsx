import * as React from 'react';
import { Component, Props } from 'react';
import i18n from '../../utilities/i18n';

interface ILoginProps extends Props<LoginComponent> {
  login: () => void;
}

export default class LoginComponent extends Component<ILoginProps> {
  constructor(public props: ILoginProps) {
    super(props);
  }
  public render() {
    return (<p>
              <button onClick={this.props.login}>{i18n.t('Login Here!')}</button>
              : {i18n.t('Login user can create camp')}
            </p>);
  }
}
