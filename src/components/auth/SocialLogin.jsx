import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const SocialLogin = ({ socialLogin }) => {
  return (
    <div className="d-flex justify-content-between">
      <Button
        onClick={() => socialLogin('facebook')}
        type="button"
        fluid
        color="facebook"
      >
        <Icon name="facebook" /> Login with Facebook
      </Button>

      <Button
        onClick={() => socialLogin('google')}
        type="button"
        fluid
        color="google plus"
      >
        <Icon name="google plus" /> Login with Google
      </Button>
    </div>
  );
};

export default SocialLogin;
