
import React, { Fragment } from 'react';
import { Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
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
        <View style={myStyle.logoImage}>
          <View style={{flex:2}}></View>
        <Image source={require('../../Assets.xcassets/logo.imageset/logo.png')}  style={{resizeMode:'contain',bottom:0}}/>
        </View>
          
          <View style={myStyle.controlContainerView}>

           <View style={myStyle.opacityView}></View>
           <View style={myStyle.logincontrolContainer}>
            <TextInput style={myStyle.loginTextControl} placeholderTextColor="white" placeholder='Username' />
            <Image source={require('../../Assets.xcassets/Login/user.imageset/user.png')} style={{right:30,left:5}}/>
            </View>
            
          </View>
          <View style={myStyle.controlContainerView}>

           <View style={myStyle.opacityView}></View>
           <View style={myStyle.logincontrolContainer}>
            <TextInput style={myStyle.loginTextControl} placeholder='Password' placeholderTextColor="white" secureTextEntry='true' />
            <Image source={require('../../Assets.xcassets/Login/lock.imageset/lock.png')} style={{right:30,left:5}}/>
            </View>
          </View>
          <View style={{ flex: 3 }}>
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