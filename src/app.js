import React, { Component } from 'react';
import { View, Linking } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import AppReducer from './reducers'
import DrawerNavigation from './router/drawer/DrawerNavigation';
import { loginUserSuccess } from './actions';

class App extends Component {
  store = createStore(AppReducer, {}, applyMiddleware(ReduxThunk));
  render(){
    return (
      <Provider store={this.store}>
        <DrawerNavigation />
      </Provider>
    );
  }

  componentDidMount() {
    Linking.addEventListener('url', this.loginCallback)
  }

  componentWillUnmount(){
    Linking.removeEventListener('url', this.loginCallback)
  }

  loginCallback = ({ url }) => {
    const callbackUrl = decodeURI(url.match(/user=([^#]+)/)[1])
    const user = JSON.parse(callbackUrl)[0];
    this.store.dispatch(loginUserSuccess(user))
  }
};

export default App;
