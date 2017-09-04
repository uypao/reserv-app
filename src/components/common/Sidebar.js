import React from "react";
import { connect } from 'react-redux';
import { Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Body,
  Left
} from "native-base";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { toggleDrawer,
  goToDashboard,
  goToAccount,
  goToVendorList,
  logoutUser } from '../../actions';

const routes = ["Dashboard", "Account"];

class SideBar extends React.Component {
  constructor(){
    super()
    this.onListPress = this.onListPress.bind(this);
  }

  onListPress(route){
    this.props.toggleDrawer();
    switch (route) {
      case 'Dashboard':
        return this.props.goToDashboard();
      case 'Account':
        return this.props.goToAccount();
      case 'VendorList':
        return this.props.goToVendorList();
      case 'Logout':
        return this.props.logoutUser();
      default:
        break;
    }
  }

  renderName(name){
    let { displayNameStyle } = style
    return(
      <Text style={displayNameStyle}>{name}</Text>
    )
  }

  renderPhoneOrEmail(phone, email){
    let { displayPhoneStyle } = style
    return(
      <Text style={displayPhoneStyle}>{phone || email}</Text>
    )
  }

  render() {
    let user = this.props.user || {}
    let { iconStyle,
      imageCoverStyle,
      avatarStyle
       } = style;
    return (
      <Container>
        <Content>
          <Image
            resizeMode = 'cover'
            style={imageCoverStyle}
            source={{
              uri: "https://facebook.github.io/react/img/logo_og.png"
            }} >
            <Image
              resizeMode="stretch"
              style={avatarStyle}
              source={{
                uri: user.picture_url
              }}
            />
          {this.renderName(user.display_name)}
          {this.renderPhoneOrEmail(user.phone, user.email)}
          </Image>
          <List>
            {/* DASHBOARD */}
            <ListItem icon
              onPress={() => this.onListPress('Dashboard')} >
              <Left>
                <FontAwesomeIcon
                  name='dashboard'
                  style={iconStyle}/>
              </Left>
              <Body>
                <Text>Dashboard</Text>
              </Body>
            </ListItem>
            {/* ACCOUNT */}
            <ListItem icon
              onPress={() => this.onListPress('Account')} >
              <Left>
                <MaterialIcon
                  name='account-settings'
                  style={iconStyle}/>
              </Left>
              <Body>
                <Text>Account</Text>
              </Body>
            </ListItem>
            {/* VENDOR LIST */}
            <ListItem icon
              onPress={() => this.onListPress('VendorList')} >
              <Left>
                <Ionicons
                  name='ios-search-outline'
                  style={iconStyle}/>
              </Left>
              <Body>
                <Text>Find Business</Text>
              </Body>
            </ListItem>
            {/* LOGOUT */}
            <ListItem icon
              onPress={() => this.onListPress('Logout')} >
              <Left>
                <MaterialIcon
                  name='logout'
                  style={iconStyle}/>
              </Left>
              <Body>
                <Text>Logout</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const style = {
  imageCoverStyle: {
    height: 160,
    alignSelf: "stretch",
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  avatarStyle: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 22,
    marginLeft: 10,

  },
  displayNameStyle: {
    fontSize: 11,
    color: '#FFF',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5
  },
  displayPhoneStyle: {
    fontSize: 10,
    color: '#b3b3b3',
    marginLeft: 10,
    marginBottom: 10
  },
  iconStyle: {
    fontSize: 20,
    marginRight: 20
  }
}

const mapStateToProps = (state) => {
  let { auth } = state
  return { user: auth.user }
}

export default connect(mapStateToProps, { goToDashboard,
  toggleDrawer,
  goToAccount,
  goToVendorList,
  logoutUser })(SideBar)
