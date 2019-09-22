import React, {Component} from "react";
import {WebView} from "react-native-webview";



class Browser extends Component {
    render() {
        return (
                    <WebView
                        source={{uri: "https://www.google.com"}}  
                    />
        );
    }
}



export default Browser;