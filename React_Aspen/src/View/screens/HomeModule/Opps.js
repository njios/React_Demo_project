import React from 'react';
import {FlatList, View, Image, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import myStyle from '../../Style/viewStyle';
import myColor from '../../Style/color';
import { Actions } from 'react-native-router-flux';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
export default class Opps extends React.Component {


    constructor() {
        super();
        this.state = {
            height: Dimensions.get('window').height
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        Actions.pop();
    }

    render() {




        return (
            <View style={{ flex: 1 }}>

                <Image source={require('../../Assets.xcassets/background.imageset/gradient1.png')} style={myStyle.backgroundImage} />

                <View style={{ flex: 0.3, flexDirection: 'row', marginTop: 50 }}>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', zIndex: 2, alignItems: 'center', width: '20%' }} >
                        <Image source={require('../../Assets.xcassets/hamburger.imageset/group5.png')} style={{ width: null, height: null, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, resizeMode: 'center' }} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', width: '100%', position: 'absolute', zIndex: 1, left: 0, right: 0, fontSize: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', textAlign: 'center', fontFamily: 'Montserrat-SemiBold' }}>
                        Dashboard
             </Text>
                    <View style={{ flex: 3 }}></View>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', zIndex: 2, alignItems: 'center', width: '20%' }} >
                        <Image source={require('../../Assets.xcassets/homeWhite/homeWhite.png')} style={{ width: null, height: null, position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, resizeMode: 'center' }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 5 }}>
                    <View style={{ flex: 1.2 }}>
                        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                            <AnimatedCircularProgress
                                style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, transform: [{ rotate: '270deg' }] }}
                                size={this.state.height / 9}
                                width={5}
                                fill={50}
                                tintColor="white"
                                onAnimationComplete={() => console.log('onAnimationComplete')}
                                backgroundColor="#3d5875" />
                            <Text style={[myStyle.tetxStyle, myStyle.size35]}>
                                {'19'}
                            </Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'column' }}>

                            <Text style={[myStyle.tetxStyle, myStyle.size16]}>
                                {'RESERVED OUT OF MAXIMUM 24'}
                            </Text>

                            <Text style={[myStyle.tetxStyle, myStyle.size13]} >
                                {'Total Available : 45'}
                            </Text>
                        </View>

                    </View>
                    <View style={{ flex: 3.8, backgroundColor: myColor.themeBG }}>
                        <View style={[myStyle.borderShadow, { backgroundColor: 'white', flex: 0.4, flexDirection: 'row' }]}>
                          <View style={{ flex: 0.2 }}></View>
                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center',marginBottom:'0.2%', borderBottomWidth: 1, borderBottomColor: '#328fce' }}>
                                <Text style={[myStyle.defaultText,{color:'#328fce'}]}>
                                    OPPORTUNITIES
                                 </Text>
                            </TouchableOpacity>
                            <View style={{ flex: 0.2 }}></View>
                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center',marginBottom:'0.2%', borderBottomWidth: 1,borderBottomColor: '#333333' }}>
                                <Text style={[myStyle.defaultText,,{color:'#333333'}]}>
                                    MY WORK QUEUE
                                 </Text>
                            </TouchableOpacity>
                            <View style={{ flex: 0.2 }}></View>
                        </View>
                        <View style={{ flex: 4,flexDirection:'row'}}>
                        <FlatList style={{width:'80%',alignSelf:'center'}}
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => 
        <View style={{backgroundColor:'white',height:this.state.height/6}}>
<Text>
    item.key
</Text>
            </View>
        }
        />
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}