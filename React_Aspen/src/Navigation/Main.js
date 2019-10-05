import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import login from '../View/screens/LoginModule/Login'
import OTP from '../View/screens/LoginModule/OTP'
import Privacy from '../View/screens/LoginModule/Privacy'
import Home from '../View/screens/HomeModule/Home'
import Opps from '../View/screens/HomeModule/Opps'
const MainNav = () => (

    <Router>
        {/* <Stack key="root" hideNavBar='true'>
     
            <Scene key="Opps" component={Opps} title="Opps" hideNavBar='true' />
            <Scene key="Home" component={Home} title="Home" hideNavBar='false' />
       </Stack> */}
        <Stack key="main">

            <Scene key="login" component={login} title="Login" hideNavBar='false' />
            <Scene key="Privacy" component={Privacy} title="Privacy" hideNavBar='false' />
            <Scene key="Otp" component={OTP} title="OTP" hideNavBar='false' />

            
        </Stack>
    </Router>
);

export default class App extends React.Component {
    render() {

        return (


            <MainNav />


        );
    }
}