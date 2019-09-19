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
       
        alignSelf:'center',
        bottom:30
    },
    opacityView: {
        backgroundColor: 'white',
        opacity: 0.15,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        
    },
    loginTextControl:{
        fontFamily: "Montserrat-Medium",
        color:'white',
        fontSize: 14,
        width:'88%'   
    }, 
    logincontrolContainer:{
        
        position:'absolute',
        bottom:5,
        top:5,
        left:30,
        right:5,
        flexDirection:'row',
        alignItems:'center',

    }, 
    controlContainerView: {
        flex:1,
        borderRadius: 19,
        margin: '1%',
        overflow: 'hidden',  
          
    },loginButtonView: {
        flex:1,
        borderRadius: 19,
        margin: '1%',
        marginTop:'5%',
        overflow: 'hidden',  
        backgroundColor:MyColor.themeColor,
        color:'white',
    },signupButtonView: {
        flex:0.6,
        borderRadius: 19,
        marginTop:'5%',
        overflow: 'hidden',  
        borderColor:'white',
        borderWidth:2,
        color:'white',
        

    }




});

export default styles;