/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { Text, TouchableOpacity, View, Image,TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import myStyle from '../../Style/viewStyle';
export default class Login extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    Actions.push("Privacy");
  }
  render() {
    return (
      <View style={myStyle.contentView}>
        <Image source={require('../../Assets.xcassets/background.imageset/gradient1.png')} style={myStyle.backgroundImage} />
          <View style={myStyle.Form}>
          <Image source={require('../../Assets.xcassets/logo.imageset/logo.png')} style={myStyle.logoImage} />
          <View style={myStyle.opacityView}>
          <TextInput style={myStyle.loginTextControl} placeholder='Username' />
          </View>
          <View style={myStyle.opacityView}>
          <TextInput style={myStyle.loginTextControl} placeholder = 'Password' secureTextEntry='true'/>
          </View>
          <View style={{flex:3}}>
            <Text style={{ marginTop: 200 }}>Login</Text>
       
            <TouchableOpacity onPress={this.handleClick} >
              <Text style={{ fontSize: 20 }}>
                Click
             </Text>
            </TouchableOpacity>
            </View>
          </View>
      </View>
    );
  }
}