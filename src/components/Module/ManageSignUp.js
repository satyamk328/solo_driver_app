import React, { Component } from 'react'
import { View, Text, StyleSheet,Button } from 'react-native'

export default class ManageSignUp extends Component {

  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }

  async onLogin() {
    this.props.navigation.navigate('Login');
  }

  async onSignUp() {
    this.props.navigation.navigate('SignUp');
  }
  
  render() {
    return (
      <View style={styles.base}>
        <Text>{'This is the ManageSignUp in side'}</Text>
        <Button
          title='Login'
          onPress={this.onLogin}/>
          <Button
          title='SignUp'
          onPress={this.onSignUp}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})