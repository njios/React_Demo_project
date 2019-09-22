import React from 'react';
import { View, Image,TouchableOpacity, Text} from 'react-native';
import myStyle from '../../Style/viewStyle';
import Browser from '../common/WebView';
import { Actions } from 'react-native-router-flux';
export default class Privacy extends React.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    Actions.pop();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>

        <Image source={require('../../Assets.xcassets/background.imageset/gradient1.png')} style={myStyle.backgroundImage} />

        <View style={{ flex: 0.3, flexDirection: 'row',marginTop:50  }}>
          <TouchableOpacity onPress={this.handleClick} style={{ justifyContent:'center', zIndex:2, alignItems:'center', width:'20%' }} >
            <Text style={{ color: 'white', fontSize: 16,justifyContent:'center', fontFamily: 'Montserrat-SemiBold' }}>
              back
             </Text>
          </TouchableOpacity>
          <Text style={{ color: 'white', width:'100%',position:'absolute',zIndex:1, left:0,right:0, fontSize: 16, alignItems:'center',justifyContent:'center',alignSelf:'center', textAlign:'center', fontFamily: 'Montserrat-SemiBold' }}>
              Privacy Policy
             </Text>
        </View>
        <View style={{ flex: 5 }}>
          <Browser />
        </View>

      </View>
    );
  }
}