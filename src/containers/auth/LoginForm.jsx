import React from 'react';
import { Form, Button, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import TextInput from '../forms/TextInput';
import { login, socialLogin } from './authActions'
import SocialLogin from './SocialLogin'

const actions = {
  login,
  socialLogin
}

const LoginForm = ({ login, handleSubmit, error, socialLogin }) => {
  return (
    <Form onSubmit={handleSubmit(login)}>
      <Field
        name="email"
        component={TextInput}
        type="text"
        placeholder="Email Address"
        label="Email"
      />
      <Field
        name="password"
        component={TextInput}
        type="password"
        placeholder="password"
        label="Password"
      />
      {error && <Alert color="danger">{error}</Alert>}
      <Button className="btn btn-block">Enter</Button>
      <p className="my-4 text-center">or login with</p>
      <SocialLogin socialLogin={socialLogin} />
      <p className="my-4 text-center">Need to register? <Link to='#!'>Check Your Zip Code</Link></p>
    </Form>
  );
};

export default connect(null, actions)(reduxForm({ form: 'loginForm' })(LoginForm));