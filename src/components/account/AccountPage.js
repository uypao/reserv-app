import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Button,
  Text
} from "native-base";
import Header from '../common/Header';
import { goToAccountDetail } from '../../actions';

class AccountPage extends Component {
  render(){
    return(
      <Container>
        <Header
          title={'Account'} />
          <Button
            onPress={this.props.goToAccountDetail}
            >
            <Text>CLICK</Text>
          </Button>
      </Container>
    )
  }
}

export default connect(null, { goToAccountDetail })(AccountPage);
