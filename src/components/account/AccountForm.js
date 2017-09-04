import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text,
  Form,
  Item,
  Input
} from 'native-base';
import { accountUpdateProp } from '../../actions';

class AccountForm extends Component {

  render(){
    return(
      <Form>
        <Item>
          <Input
            autoCorrect={false}
            placeholder='Display name'
            onChangeText={value => this.props.accountUpdateProp({ prop: 'display_name', value })}/>
        </Item>
        <Item>
          <Input
            autoCorrect={false}
            placeholder='Email'
            onChangeText={value => this.props.accountUpdateProp({ prop: 'email', value })} />
        </Item>
        <Item last>
          <Input
            autoCorrect={false}
            secureTextEntry
            onChangeText={value => this.props.accountUpdateProp({ prop: 'password', value })}
            placeholder='Password'/>
        </Item>
      </Form>
    )
  }
}

export default connect(null, { accountUpdateProp })(AccountForm)
