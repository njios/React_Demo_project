
import React, { Fragment } from 'react';
import { Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import myStyle from '../../Style/viewStyle';
import MyColor from '../../Style/color';
export default class Login extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    Actions.push("Otp");
  }
  render() {
    return (
      <View style={myStyle.contentView}>
        <Image source={require('../../Assets.xcassets/background.imageset/gradient1.png')} style={myStyle.backgroundImage} />
        <View style={myStyle.Form}>
          <View style={myStyle.logoImage}>
            <View style={{ flex: 2 }}></View>
            <Image source={require('../../Assets.xcassets/logo.imageset/logo.png')} style={{ resizeMode: 'contain', bottom: 0 }} />
          </View>
          <View style={{ flex: 1.5, width: '75%' }}>
            <View style={myStyle.controlContainerView}>

              <View style={myStyle.opacityView}></View>
              <View style={myStyle.logincontrolContainer}>
                <TextInput style={myStyle.loginTextControl} placeholderTextColor="white" placeholder='Username' />
                <Image source={require('../../Assets.xcassets/Login/user.imageset/user.png')} style={{ right: 30, left: 5 }} />
              </View>

            </View>
            <View style={myStyle.controlContainerView}>

              <View style={myStyle.opacityView}></View>
              <View style={myStyle.logincontrolContainer}>
                <TextInput style={myStyle.loginTextControl} placeholder='Password' placeholderTextColor="white" secureTextEntry='true' />
                <Image source={require('../../Assets.xcassets/Login/lock.imageset/lock.png')} style={{ right: 30, left: 5 }} />
              </View>
            </View>
            <View style={myStyle.loginButtonView}>
              <TouchableOpacity onPress={this.handleClick} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, alignItems: 'center', justifyContent: 'center' }} >
                <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Montserrat-SemiBold' }}>
                  LOGIN
             </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 0.7, justifyContent: 'center' }}>

            <TouchableOpacity>
              <Text style={{ fontSize: 14, color: 'white', fontFamily: 'Montserrat-Regular' }}>
                Forgot your password?
               </Text>
            </TouchableOpacity>

          </View>
          <View style={{ flex: 0.8, flexDirection: 'column',width:'75%' }}>
            <Text style={{ fontSize: 14, color: 'white', fontFamily: 'Montserrat-Regular',width:'100%',textAlign: 'center',flex:0.3 }}>
              Not Registered Yet?
                </Text>
            <View style={myStyle.signupButtonView}>
              <TouchableOpacity onPress={this.handleClick} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, alignItems: 'center', justifyContent: 'center' }} >
                <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Montserrat-SemiBold' }}>
                  SIGN UP
             </Text>
              </TouchableOpacity>
            </View>

          </View>
          <View style={{ flex: 2,alignItems:'center' }}>
           <TouchableOpacity onPress={this.handleClick} style={{flex:0.4,justifyContent:'center'   }} >
                <Text style={{ color: MyColor.themeColor, fontSize: 14, fontFamily: 'Montserrat-Regular' }}>
                  Privacy Policy
             </Text>
             </TouchableOpacity>
           <View style={{flex:0.2,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
           <Text style={{ color: 'white', fontSize: 14, fontFamily: 'Montserrat-Regular',margin:'2%' }}>
                    APP VERSION 1.0.06(TEST)
            </Text>
           <Text style={{ color: 'white', fontSize: 14, fontFamily: 'Montserrat-Regular' }}>
             Copyright © 2019 Aspen RxHealth
             </Text>
           </View>
           
          </View>
        </View>
      </View>
    );
  }
}