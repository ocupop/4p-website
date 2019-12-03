import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { combineValidators, isRequired } from 'revalidate'
import TextInput from '../forms/TextInput';
import SelectInput from '../forms/SelectInput';
import { socialLogin, registerUser } from './authActions'
import SocialLogin from './SocialLogin'

import { locationOptions } from '../data/selects';

// const mapState = (state) => ({
//   activeRegion: false
// })

const actions = {
  registerUser,
  socialLogin
}

const validate = combineValidators({
  displayName: isRequired('displayName'),
  email: isRequired('email'),
  password: isRequired('password')
})

class RegisterForm extends Component {
  state = {
    regionCheck: false
  };
  render() {
    const { registerUser, handleSubmit, error, invalid, submitting, hasLocationValue } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(registerUser)}>
          {!hasLocationValue && (
            <div>
              <h1>Get good food,<br />become a member!</h1>
              <p>4p makes it easy to keep fresh food on your table, with weekly deliveries straight from local family farms. Enter your address below to see if we deliver to your area.</p>
              <Field
                name="zipcode"
                component={SelectInput}
                options={locationOptions}
                type="text"
                placeholder="Enter Zipcode"
                isSearchable
              />
            </div>
          )}
          {hasLocationValue && (
            <div>
              <h1>Great news!</h1>
              <h3 className="mb-4">4P already delivers in your area ({hasLocationValue.value})</h3>
              <p>Even better news: you can sign up right now for a membership that is free and totally flexible. Just enter the information below to get started.</p>

              <Field
                name="displayName"
                type="text"
                component={TextInput}
                placeholder="Known As"
              />
              <Field
                name="email"
                type="text"
                component={TextInput}
                placeholder="Email"
              />
              <Field
                name="password"
                type="password"
                component={TextInput}
                placeholder="Password"
              />
              <Field
                name="confirm_password"
                component={TextInput}
                type="password"
                placeholder="confirm password"
              />
              {error && <Alert color="danger">{error}</Alert>}
              <Button className="btn btn-block" disabled={invalid || submitting}>Register</Button>
              <p className="my-2">or signup with</p>
              <SocialLogin socialLogin={socialLogin} />

            </div>
          )}
          <p className="my-2">Already a Member? <Link to='#!'>Sign in here</Link> | <Link to='#!'>Try Another Zip Code</Link></p>

        </form>
      </div>
    )
  };
}

RegisterForm = reduxForm({ form: 'registerForm', enableReinitialize: true, validate })(RegisterForm)

const selector = formValueSelector('registerForm')
RegisterForm = connect(
  state => {
    const hasLocationValue = selector(state, 'zipcode')
    return {
      hasLocationValue
    }
  }
)(RegisterForm)


export default connect(null, actions)(RegisterForm);
// export default connect(null, actions)(reduxForm({ form: 'registerForm' })(RegisterForm));