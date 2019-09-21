
import React, { Fragment } from 'react';
import { Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import myStyle from '../../Style/viewStyle';
import MyColor from '../../Style/color';
//import OTPInputView from '@twotalltotems/react-native-otp-input'
export default class OTP extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    Actions.pop
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
          <View style={{ flex: 4,width:'75%',flexDirection:'column'}}>
            <Text style={{flex:1,textAlign:'center',color:'white',fontSize: 14, fontFamily: 'Montserrat-Medium'}}>
            Enter the one time verification code sent to your phone
            </Text>
            <View style={{ flex: 1}}>
            
            </View>
            <View style={{ flex: 1}}>
            <TouchableOpacity onPress={this.handleClick} style={{flex:0.4,alignItems: 'center',backgroundColor:MyColor.themeColor, justifyContent: 'center', borderRadius: 19 }} >
                <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Montserrat-SemiBold' }}>
                  CONFIRM
             </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1}}>

            </View>
          </View>
          <View style={{ flex: 1,justifyContent:'flex-end',marginBottom: 30,  }}>
           <Text style={{ color: 'white', fontSize: 14, fontFamily: 'Montserrat-Regular',}}>
             Copyright © 2019 Aspen RxHealth
             </Text>
           </View>
        </View>
      </View>
    );
  }
}