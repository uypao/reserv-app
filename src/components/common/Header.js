import React, { Component } from 'react';
import { Container,
  Button,
  Icon,
  Header,
  Left,
  Right,
  Body,
  Title,
  Text } from 'native-base';
import { View, StatusBar } from 'react-native';
import { create } from 'react-native-platform-stylesheet';
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
        hidden
        transparent
        style={{borderRadius: 20}}
        onPress={this.props.goToLogin} >
        <Text>Log in</Text>
      </Button>
    )
  }

  renderLeftButton(){
    return(
      <Button
        transparent
        onPress={this.cb} >
         {(!this.welcomeRoute) && <Icon name={this.name} />}
      </Button>
    )
  }

  render(){
    let { textStyle,
      leftHeaderStyle,
      rightHeaderStyle} = styles;
    return (
      <Header
        style={{backgroundColor: 'white'}} >
        <StatusBar
          animated
          barStyle='dark-content'
          backgroundColor='#f7f7f7'/>
        <Left>
          <Button
            transparent
            onPress={this.cb} >
             {(!this.welcomeRoute) && <Icon name={this.name} />}
          </Button>
        </Left>
        <Body>
          <Title>
            <Text>
              {this.title}
            </Text>
          </Title>
        </Body>
          <Right>
            {(this.welcomeRoute) && this.renderLogin()}
          </Right>
      </Header>
      );
    }
};

const styles = create({
  textStyle: {
    fontSize: 18,
    android: {
      color: '#000',
      fontWeight: 'normal'
    }
  },
  leftHeaderStyle: {
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  rightHeaderStyle: {
    alignItems: 'flex-end',
    flexDirection: 'row'
  }
})


const mapStateToProps = state => ({ navigation: state.stack });
export default connect(mapStateToProps, { back,
  toggleDrawer,
  goToLogin })(HeaderComponent);
