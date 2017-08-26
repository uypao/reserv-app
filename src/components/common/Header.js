import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Subtitle } from 'native-base';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { back,
  toggleDrawer,
  goToLogin } from '../../actions';

class HeaderComponent extends Component {
  constructor(){
    super();
  }

  isParentRoute(routeName){
    let parentRoute = ['Dashboard', 'Account'];
    return (parentRoute.indexOf(routeName) > -1)
  }

  componentWillMount(){
    let { title, back, toggleDrawer, navigation } = this.props
    let routeName = navigation.routes[navigation.index].routeName;
    this.title = title;
    this.welcomeRoute = routeName === 'Welcome';
    this.name = (this.welcomeRoute || this.isParentRoute(routeName)) ? 'ios-menu' : 'ios-arrow-round-back';
    this.cb = (this.welcomeRoute || this.isParentRoute(routeName)) ? toggleDrawer : back;
  }

  renderLogin(){

    return(
      <Button
        transparent
        onPress={this.props.goToLogin} >
        <Text>Log in</Text>
      </Button>
    )
  }

  render(){
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={this.cb} >
             {(!this.welcomeRoute) && <Icon name={this.name} />}
          </Button>
        </Left>
        <Body>
          <Title>{this.title}</Title>
        </Body>
          <Right>
            {(this.welcomeRoute) && this.renderLogin()}
          </Right>
      </Header>
    );
  }


  };

const mapStateToProps = state => ({ navigation: state.stack });
export default connect(mapStateToProps, { back,
  toggleDrawer,
  goToLogin })(HeaderComponent);
