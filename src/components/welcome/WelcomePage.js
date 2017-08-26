import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container,
  Content,
  Card,
  Text,
  CardItem,
  Button } from 'native-base';
import OauthButton from '../common/OauthButton';
import Header from '../common/Header';
import { goToLogin } from '../../actions';

class WelcomePage extends Component {

  onPressCreateAccount(){
    this.props.navigation.navigate('Account');
  }

  render(){
    let { contentStyle } = style;
    return(
      <Container>
          <Header
            title={'Welcome!'} />

            <Content padder style={contentStyle}>
              <OauthButton
                provider={'facebook'}
                />
              <OauthButton
                provider={'google'}
                />


              <Button full rounded primary
                style={{ marginTop: 10 }}
                onPress={this.onPressCreateAccount.bind(this)}
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

export default connect(null, { goToLogin })(WelcomePage);
