import * as React from 'react'
import {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import CampForm from '../containers/CampForm';


class App extends Component {
    submit = (values) => {
        // print the form values to the console
        console.log(values)
      }
    render() {
      return (
        <CampForm onSubmit={this.submit} />
      )
    }
  }
  
export default App