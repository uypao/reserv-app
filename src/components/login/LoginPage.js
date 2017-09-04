import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container,
  Text,
  Content,
  Form,
  Button,
  Item,
  Input,
  Spinner } from 'native-base';
import Header from '../common/Header';
import { loginUser,
  userUpdateProp,
  authInit } from '../../actions';

class LoginPage extends Component {
  constructor(){
    super()
    this.onPressLogin = this.onPressLogin.bind(this);
  }

  componentWillMount(){
    this.props.authInit();
  }

  onPressLogin() {
    let { email, password } = this.props.user;
    this.props.loginUser({email, password});
  }

  renderButton(){
    let { isLoading } = this.props;
    return (
      <Button
        block
        disabled={isLoading}
        onPress={this.onPressLogin}
        style={{ marginTop: 30 }} >
        {isLoading == true ?
          <Spinner color='white' /> :
          <Text>Login</Text>}
      </Button>
    )
  }

  render() {
    let { user, error } = this.props
    return (
      <Container>
        <Header
          title={'Please Login'} />

        <Content padder>
          <Form>
            <Item>
              <Input
                autoCorrect={false}
                placeholder="Email"
                onChangeText={value => this.props.userUpdateProp({ prop: 'email', value})} />
            </Item>
            <Item last>
               <Input
                 autoCorrect={false}
                 secureTextEntry
                 onChangeText={value => this.props.userUpdateProp({ prop: 'password', value})}
                 placeholder="Password" />
            </Item>
            <Text style={style.errorStyle}>
              {error}
            </Text>
            {this.renderButton()}
          </Form>
        </Content>
      </Container>
    );
  }
}

const style = {
  errorStyle: {
    color: 'red',
    alignSelf: 'center',
    marginTop: 15
  }
}

const mapStateToProps = (state) => {
  console.log(state.auth, 'auth');
  let { user, error, isLoading } = state.auth;
  return { user, error, isLoading }
}

export default connect(mapStateToProps, {
  loginUser, userUpdateProp, authInit
 })(LoginPage);
