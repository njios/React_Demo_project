import React from 'react';
import { FlatList, View, Image, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
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
                                size={this.state.height / 8}
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
                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: '0.2%', borderBottomWidth: 1, borderBottomColor: '#328fce' }}>
                                <Text style={[myStyle.defaultText, { color: '#328fce' }]}>
                                    OPPORTUNITIES
                                 </Text>
                            </TouchableOpacity>
                            <View style={{ flex: 0.2 }}></View>
                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: '0.2%', borderBottomWidth: 1, borderBottomColor: '#333333' }}>
                                <Text style={[myStyle.defaultText, , { color: '#333333' }]}>
                                    MY WORK QUEUE
                                 </Text>
                            </TouchableOpacity>
                            <View style={{ flex: 0.2 }}></View>
                        </View>
                        <View style={{ flex: 4, flexDirection: 'row' }}>
                            <ScrollView>
                                <FlatList style={{ width: '85%', alignSelf: 'center' }}
                                    data={[
                                        {
                                            age: '45',
                                            sex: 'M',
                                            address: 'Dallas, TA',
                                            type: 'CMR',
                                            language: 'Engligh',
                                            desease: 'Desease 1,Desease 2, Desease 3',
                                            amount: '40'
                                        },
                                        {
                                            age: '70',
                                            sex: 'F',
                                            address: 'Dallas, NJ',
                                            type: 'TMR',
                                            language: 'Spanish',
                                            desease: 'Desease 1,Desease 2, Desease 3,Desease 1,Desease 2, Desease 3,Desease 1,Desease 2, Desease 3',
                                            amount: '40'
                                        },{
                                            age: '45',
                                            sex: 'M',
                                            address: 'Dallas, TA',
                                            type: 'CMR',
                                            language: 'Engligh',
                                            desease: 'Desease 1,Desease 2, Desease 3',
                                            amount: '40'
                                        },
                                        {
                                            age: '70',
                                            sex: 'F',
                                            address: 'Dallas, NJ',
                                            type: 'TMR',
                                            language: 'Spanish',
                                            desease: 'Desease 1,Desease 2, Desease 3,Desease 1,Desease 2, Desease 3,Desease 1,Desease 2, Desease 3',
                                            amount: '40'
                                        },{
                                            age: '45',
                                            sex: 'M',
                                            address: 'Dallas, TA',
                                            type: 'CMR',
                                            language: 'Engligh',
                                            desease: 'Desease 1,Desease 2, Desease 3',
                                            amount: '40'
                                        },
                                        {
                                            age: '70',
                                            sex: 'F',
                                            address: 'Dallas, NJ',
                                            type: 'TMR',
                                            language: 'Spanish',
                                            desease: 'Desease 1,Desease 2, Desease 3,Desease 1,Desease 2, Desease 3,Desease 1,Desease 2, Desease 3',
                                            amount: '40'
                                        },{
                                            age: '45',
                                            sex: 'M',
                                            address: 'Dallas, TA',
                                            type: 'CMR',
                                            language: 'Engligh',
                                            desease: 'Desease 1,Desease 2, Desease 3',
                                            amount: '40'
                                        },
                                        {
                                            age: '70',
                                            sex: 'F',
                                            address: 'Dallas, NJ',
                                            type: 'TMR',
                                            language: 'Spanish',
                                            desease: 'Desease 1,Desease 2, Desease 3,Desease 1,Desease 2, Desease 3,Desease 1,Desease 2, Desease 3',
                                            amount: '40'
                                        },{
                                            age: '45',
                                            sex: 'M',
                                            address: 'Dallas, TA',
                                            type: 'CMR',
                                            language: 'Engligh',
                                            desease: 'Desease 1,Desease 2, Desease 3',
                                            amount: '40'
                                        },
                                        {
                                            age: '70',
                                            sex: 'F',
                                            address: 'Dallas, NJ',
                                            type: 'TMR',
                                            language: 'Spanish',
                                            desease: 'Desease 1,Desease 2, Desease 3,Desease 1,Desease 2, Desease 3,Desease 1,Desease 2, Desease 3',
                                            amount: '40'
                                        }

                                    ]}
                                    renderItem={({ item }) =>
                                        <View style={{ flexDirection: 'column' }}>
                                            <View style={{ height: 15 }}>

                                            </View>
                                            <View style={{ flexDirection: 'column', borderRadius: 6.7, overflow: 'hidden' }}>
                                                <View style={{ backgroundColor: 'white', height: 15 }}>

                                                </View>
                                                <View style={{ backgroundColor: 'white', width: '100%', flexDirection: 'row' }}>
                                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                                            <AnimatedCircularProgress
                                                                style={{ marginTop: '1%', transform: [{ rotate: '270deg' }] }}
                                                                size={this.state.height / 14}
                                                                width={5}
                                                                fill={73}
                                                                tintColor="#26a548"
                                                                onAnimationComplete={() => console.log('onAnimationComplete')}
                                                                backgroundColor="grey" />
                                                        </View>
                                                        <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
                                                            <View style={{ aspectRatio: 1 / 1, height: this.state.height / 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#26a548', opacity: 0.5, borderRadius: (this.state.height / 20) / 2 }}>

                                                            </View>
                                                            <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
                                                                <Text style={[myStyle.tetxStyle, myStyle.size14, { color: 'grey', marginTop: 1 }]}>
                                                                    {'73%'}
                                                                </Text>
                                                                <Text style={[myStyle.tetxStyle, myStyle.size8, { color: 'grey', marginTop: 1 }]}>
                                                                    {'match'}
                                                                </Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={{ flex: 2, flexDirection: 'column' }}>
                                                        <Text style={[myStyle.tetxStyle, myStyle.size14, { color: 'black',textAlign:'left',fontFamily: 'Montserrat-Bold'}]}>
                                                           {item.age + ', ' + item.sex}
                                                        </Text>
                                                        <Text style={[myStyle.tetxStyle, myStyle.size14, { color: 'grey',textAlign:'left',fontFamily: 'Montserrat-Bold' }]}>
                                                            {item.address}
                                                        </Text>
                                                        <Text style={[myStyle.tetxStyle, myStyle.size14, { color: 'black',textAlign:'left',fontFamily: 'Montserrat-Bold'}]}>
                                                            {item.type}
                                                        </Text>
                                                        <Text style={[myStyle.tetxStyle, myStyle.size14, { color: 'grey',textAlign:'left' }]}>
                                                        {item.desease}
                                                        </Text>
                                                        <Text style={[myStyle.tetxStyle, myStyle.size14, { color: 'grey',textAlign:'left' }]}>
                                                        {item.language}
                                                        </Text>
                                                    </View>
                                                    <View style={{ flex: 1, flexDirection: 'column',justifyContent:'center',paddingRight:10 }}>
                                                    <Text style={[myStyle.tetxStyle, myStyle.size16, { color: '#328fcd',fontFamily: 'Montserrat-Bold'}]}>
                                                           {'$'+item.amount}
                                                        </Text>
                                                        <TouchableOpacity style={{backgroundColor:myColor.themeColor,height:30,justifyContent:'center',borderRadius:15,marginTop:10}}>
                                                            <Text style={[myStyle.tetxStyle]}>
                                                               Reserve 
                                                            </Text>
                                                        </TouchableOpacity>
                                                    </View>

                                                </View>
                                                <View style={{ backgroundColor: 'white', height: 15 }}>

                                                </View>
                                            </View>
                                        </View>
                                    }
                                />
                            </ScrollView>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}