import * as React from 'react'
import {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import CampForm from '../containers/CampForm';


class App extends Component {
    render() {
      return (
        <CampForm />
      )
    }
  }
  
export default App