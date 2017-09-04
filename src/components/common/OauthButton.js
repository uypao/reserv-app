import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Linking } from 'react-native';
import { Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  loginUserOauth,
  loginUserSuccess
} from '../../actions';

class OauthButton extends Component {
  constructor(){
    super();
  }

  render(){
    let { provider } = this.props;
    let { iconStyle,
      facebookButtonStyle,
      googleButtonStyle } = style;

    switch (provider) {
      case 'facebook':
        return (
          <Button full rounded primary
            iconRight
            style={facebookButtonStyle}
            onPress={() => this.props.loginUserOauth(provider)}>
            <Icon name='facebook'
              style={iconStyle}/>
            <Text>Login with facebook</Text>
          </Button>
        )
        break;
      case 'google':
        return (
          <Button full rounded primary
            iconRight
            style={googleButtonStyle}
            onPress={() => this.props.loginUserOauth(provider)}>
            <Icon name='google'
              style={iconStyle}
              />
            <Text>Login with google</Text>
          </Button>
        )
        break
      default:
        return null;
    }
  }
}

const style = {
  iconStyle: {
    fontSize: 20,
    marginRight: 15,
    color: 'white',
  },
  facebookButtonStyle: {
    marginTop: 15,
    backgroundColor: "#3b5998"
  },
  googleButtonStyle: {
    marginTop: 15,
    backgroundColor: "#dd4b39"
  }
}

export default connect(null, {
  loginUserOauth, loginUserSuccess
})(OauthButton);
