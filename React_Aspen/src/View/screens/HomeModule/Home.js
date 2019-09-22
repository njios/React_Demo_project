import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import myStyle from '../../Style/viewStyle';
import Mycolor from '../../Style/color';
import { Actions } from 'react-native-router-flux';
export default class Home extends React.Component {


    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        Actions.pop();
    }
    render() {
        localStyle = StyleSheet.create({
            cardStyle: {
                flex: 0.33,
                flexDirection: 'column',
                backgroundColor: 'white',
                borderRadius: 6.7,
                width: '83%',
                alignSelf: 'center',
                shadowColor: 'grey',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
            },
            cardTextStyle: {
                
                color: 'black',
                fontSize: 14,
                justifyContent: 'center',
                alignSelf:'center',
                textAlignVertical: 'center',
                fontFamily: 'Montserrat-Medium',
                marginBottom: '2%',
               
            },
            cardImageStyle:{
                flex: 1, 
                height: null, 
                width: null, 
                resizeMode: 'contain',
                margin:'5%' 
            }
        });
        return (
            <View style={{ flex: 1 }}>

                <Image source={require('../../Assets.xcassets/background.imageset/gradient1.png')} style={myStyle.backgroundImage} />
                <View style={{ flex: 0.3, flexDirection: 'row', marginTop: 50 }}>
                    <TouchableOpacity onPress={this.handleClick} style={{ justifyContent: 'center', zIndex: 2, alignItems: 'center', width: '20%' }} >
                        <Image source={require('../../Assets.xcassets/hamburger.imageset/group5.png')} style={{ width: null, height: null, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, resizeMode: 'center' }} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', width: '100%', position: 'absolute', zIndex: 1, left: 0, right: 0, fontSize: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', textAlign: 'center', fontFamily: 'Montserrat-SemiBold' }}>
                        Home
             </Text>
                </View>




                <View style={{ flex: 5, backgroundColor: Mycolor.themeBG }}>
                    <View style={{ flex: 1.4 }}>
                        <Image source={require('../../Assets.xcassets/homeNewImg05.png')} style={{ width: null, height: null, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flex: 1 }}>
                            <Text style={{ color: 'black', fontSize: 16, justifyContent: 'center', fontFamily: 'Montserrat-Regular' }}>
                                Welcome,
                             </Text>
                            <Text style={{ color: 'black', fontSize: 24, justifyContent: 'center', fontFamily: 'Montserrat-Medium' }}>
                                Francis Ford
                             </Text>
                        </View>
                    </View>
                    <View style={{ flex: 3, flexDirection: 'column' }}>

                        <View style={{ flex: 0.13, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#dfe2e5', borderBottomWidth: 2, marginBottom: '5%' }}>
                            <Text style={{ color: 'black', fontSize: 14, fontFamily: 'Montserrat-Medium', width: '83%' }}>
                                Select Clinical Service opportunity
                        </Text>
                        </View>

                        <View style={localStyle.cardStyle}>
                            <Image source={require('../../Assets.xcassets/cmrIcon/cmrIcon.png')} style={localStyle.cardImageStyle} />
                            <Text style={localStyle.cardTextStyle}>
                                {"Comprehensive Medication Review"}
                            </Text>
                            <Text style={localStyle.cardTextStyle}>
                                {"(CMR)"}
                            </Text>
                            <TouchableOpacity style={{position:'absolute', top:0,bottom:0,right:0,left:0}}></TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.06 }}>

                        </View>
                        <View style={localStyle.cardStyle}>


                            <Image source={require('../../Assets.xcassets/tmrIcon/tmrIcon.png')} style={localStyle.cardImageStyle} />
                            <Text style={localStyle.cardTextStyle}>
                                {"Targeted Medication Review"}
                            </Text>
                            <Text style={localStyle.cardTextStyle}>
                                {"(TMR)"}
                            </Text>
                            <TouchableOpacity style={{position:'absolute', top:0,bottom:0,right:0,left:0}}></TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 0.3 }}>

                    </View>


                </View>

            </View>
        );
    }
}