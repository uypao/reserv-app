import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text,
  Container,
  Content,
  Card,
  Button,
  CardItem } from 'native-base';
import OauthButton from '../common/OauthButton';
import Header from '../common/Header';
import { View } from 'react-native'
import { goToAccountCreate } from '../../actions';

class WelcomePage extends Component {

  render(){
    let { contentStyle } = style;
    return(
      <Container>
        <Header
          title='Welcome'
          />
        <Content padder>
          <OauthButton
            provider={'facebook'}
            />
          <OauthButton
            provider={'google'}
            />
          <Button full rounded
            style={{ marginTop: 10 }}
            onPress={this.props.goToAccountCreate}
            >
            <Text>Create account</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const style = {
  contentStyle: {
    paddingLeft: 30,
    paddingRight: 30
  }
}

export default connect(null, { goToAccountCreate })(WelcomePage);
