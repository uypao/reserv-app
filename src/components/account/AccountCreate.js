import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container,
  Content,
  Text,
  Button,
  Spinner
} from 'native-base';
import Header from '../common/Header';
import AccountForm from './AccountForm';
import { accountFormInit, accountCreate } from '../../actions';

class AccountCreate extends Component {
  constructor(){
    super();
    this.onCreateAccountPress = this.onCreateAccountPress.bind(this);
  }

  componentWillMount(){
    this.props.accountFormInit();
  }

  onCreateAccountPress(){
    let {display_name, email, password} = this.props;
    this.props.accountCreate({display_name, email, password});
  }

  renderButton(){
    let { isLoading } = this.props;
    return (
      <Button
        block
        disabled={isLoading}
        onPress={this.onCreateAccountPress}
        style={style.buttonStyle}>
        {isLoading == true ?
          <Spinner color='white' /> :
          <Text>Create Account</Text>}
      </Button>
    )
  }

  render(){
    let { error } = this.props;
    return(
      <Container>
        <Header
          title='New Account'
        />
        <Content padder>
          <AccountForm />
          <Text style={style.errorStyle}>
            {error}
          </Text>
          {this.renderButton()}
        </Content>
      </Container>
    )
  }
}

const style = {
  buttonStyle: {
    marginTop: 40
  },
  errorStyle: {
    color: 'red',
    alignSelf: 'center',
    marginTop: 15
  }
}

const mapStateToProps = ({ accountForm }) => {
  let { display_name, email, password, isLoading, error } = accountForm;
  return { display_name, email, password, isLoading, error }
}

export default connect(mapStateToProps, { accountFormInit, accountCreate })(AccountCreate)
