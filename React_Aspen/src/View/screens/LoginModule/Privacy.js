import React, {Fragment} from 'react';
import {Text,TouchableOpacity,View} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Privacy extends React.Component{
    constructor(){
        super();
    
        this.handleClick = this.handleClick.bind(this);
      }
       handleClick() {
        Actions.pop()
      }
      render(){
        return(
        <View style={{alignItems:'center'}}>
        <Text style={{marginTop:200}}>Privacy page</Text>
        <TouchableOpacity  onPress={this.handleClick} >
        <Text style={{fontSize:20}}>
            Click
            </Text>
        </TouchableOpacity>
          </View>
          );
    }
}