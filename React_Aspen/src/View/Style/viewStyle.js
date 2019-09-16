import { StyleSheet } from 'react-native';
import MyColor from './color';
const styles = StyleSheet.create({
    contentView: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null

    },
    Form: {
        flex: 1,
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },

    // Login screen 
    logoImage: {
        flex: 2,
        resizeMode: 'contain',
        alignContent: 'center'
    },
    opacityView: {
        backgroundColor: 'white',
        opacity: 0.15,
        borderRadius: 19,
        flex: 0.35,
        margin: '2%',
        width: '75%',
        overflow: 'hidden',
        flexDirection: 'row'
    },
    loginTextControl:{
        fontSize:20,
        color:'red'
    }


});

export default styles;