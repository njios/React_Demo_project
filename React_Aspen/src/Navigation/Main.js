import React from 'react';
import {Router,Stack,Scene} from 'react-native-router-flux';
import login from  '../View/screens/LoginModule/Login'
import OTP from  '../View/screens/LoginModule/OTP'
import Privacy from  '../View/screens/LoginModule/Privacy'
const MainNav = () => (
<Router>
<Stack key="root">
<Scene key="Otp" component={OTP} title="OTP" hideNavBar='false'/>
<Scene key="login" component={login} title="Login" hideNavBar='false'/>

<Scene key="Privacy" component={Privacy} title="Privacy" hideNavBar='false'/>
</Stack>
</Router>
);

export default class App extends React.Component{
render(){
    return(
<MainNav/>
    );
}
}