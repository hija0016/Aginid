import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground
} from 'react-native';
  
  import { StatusBar } from 'react-native';

  export default class Screen3 extends Component {
    render(){
        return (
                   <ImageBackground source={require('../Animation/scenetest.webp')} style={{width: '100%', height: '100%'}}>
                        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                        </View>
                   </ImageBackground>
        )
    }

}