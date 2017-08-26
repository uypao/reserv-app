import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container,
  Text,
  Content,
  Form,
  Button,
  Item,
  Input } from 'native-base';
import Header from '../common/Header';
import { loginUser } from '../../actions';

class LoginPage extends Component {
  constructor(){
    super()
    this.onPressLogin = this.onPressLogin.bind(this);
  }

  onPressLogin(){
    this.props.loginUser();
  }

  render() {
    return (
      <Container>
        <Header
          title={'Please Login'} />

        <Content padder>
          <Form>
            <Item>
              <Input placeholder="Email" />
            </Item>
            <Item last>
               <Input placeholder="Password" />
            </Item>
            <Button block
              onPress={this.props.onPressLogin}
              style={{ marginTop: 50 }} >
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default connect(null, { loginUser })(LoginPage);
