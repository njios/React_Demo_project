
import React, { Fragment } from 'react';
import { Text, TouchableOpacity, View, Image, TextInput, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import myStyle from '../../Style/viewStyle';
import MyColor from '../../Style/color';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const LocalStyle = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: MyColor.themeColor,
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderColor: MyColor.themeColor,

  },

  underlineStyleHighLighted: {
    borderColor: 'white',
  },
});
export default class OTP extends React.Component {


  constructor() {
    super();
this.confirmClicked = this.confirmClicked.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    Actions.pop()
  }
  confirmClicked(){
    Actions.reset('main')
  }
  state = {
    code: ""
  }
  render() {
    return (
    
      <View style={myStyle.contentView}>
         
        <Image source={require('../../Assets.xcassets/background.imageset/gradient1.png')} style={myStyle.backgroundImage} />
       
        <View style={myStyle.Form}>
          <View style={myStyle.logoImage}>
            <View style={{ flex: 2.7 }}></View>
            <Image source={require('../../Assets.xcassets/logo.imageset/logo.png')} style={{ resizeMode: 'contain', bottom: 0 }} />
          </View>
          <View style={{ flex: 4.0, width: '75%', flexDirection: 'column' }}>
            <Text style={{ flex: 0.4 ,  paddingTop:'10%', textAlign: "center", color: 'white', fontSize: 14, fontFamily: 'Montserrat-Medium'  }}>
            {'Enter the one time verification code sent to your phone'.toUpperCase()}
            </Text>
          
            <View style={{ flex: 0.5 }}>
              <OTPInputView
                style={{ width: '100%' }}
                pinCount={6}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                onCodeChanged={code => { this.setState({ code }) }}
                autoFocusOnLoad
                codeInputFieldStyle={LocalStyle.underlineStyleBase}
                codeInputHighlightStyle={LocalStyle.underlineStyleHighLighted}
                onCodeFilled={(code => {
                  console.log(`Code is ${code}, you are good to go!`)
                })}
              />
            </View>
           
            <View style={{ flex: 1,justifyContent:'center' }}>
              <TouchableOpacity onPress={this.confirmClicked} style={{ flex: 0.35, alignItems: 'center', backgroundColor: MyColor.themeColor, justifyContent: 'center', borderRadius: 19 }} >
                <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Montserrat-SemiBold' }}>
                  CONFIRM
             </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, paddingTop:20 }}>
            <TouchableOpacity onPress={this.handleClick} style={{ flex: 0.35, alignItems: 'center'}} >
                <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Montserrat-SemiBold' }}>
                  {'Re-send Code'.toUpperCase()} 
             </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 30, }}>
            <Text style={{ color: 'white', fontSize: 14, fontFamily: 'Montserrat-Regular', }}>
              Copyright © 2019 Aspen RxHealth
             </Text>
          </View>
        </View>
      
      </View>
   
    );
  }
}

