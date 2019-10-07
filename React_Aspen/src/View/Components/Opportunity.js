import React from 'react';
import { FlatList, View, Image, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import myStyle from '../Style/viewStyle';
import myColor from '../Style/color';
import { Actions } from 'react-native-router-flux';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
export default class Opportunity extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            height: Dimensions.get('window').height
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        Actions.pop();
    }
    render(props){
        
        return(
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
                            <Text style={[myStyle.tetxStyle, myStyle.size14, { color: 'black', textAlign: 'left', fontFamily: 'Montserrat-Bold' }]}>
                                {this.props.value.age + ', ' + this.props.value.sex}
                            </Text>
                            <Text style={[myStyle.tetxStyle, myStyle.size14, { color: 'grey', textAlign: 'left', fontFamily: 'Montserrat-Bold' }]}>
                                {this.props.value.address}
                            </Text>
                            <Text style={[myStyle.tetxStyle, myStyle.size14, { color: 'black', textAlign: 'left', fontFamily: 'Montserrat-Bold' }]}>
                                {this.props.value.type}
                            </Text>
                            <Text style={[myStyle.tetxStyle, myStyle.size14, { color: 'grey', textAlign: 'left' }]}>
                                {this.props.value.desease}
                            </Text>
                            <Text style={[myStyle.tetxStyle, myStyle.size14, { color: 'grey', textAlign: 'left' }]}>
                                {this.props.value.language}
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', paddingRight: 10 }}>
                            <Text style={[myStyle.tetxStyle, myStyle.size16, { color: '#328fcd', fontFamily: 'Montserrat-Bold' }]}>
                                {'$' + this.props.value.amount}
                            </Text>
                            <TouchableOpacity style={{ backgroundColor: myColor.themeColor, height: 30, justifyContent: 'center', borderRadius: 15, marginTop: 10 }}>
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

        
        );
    }
}