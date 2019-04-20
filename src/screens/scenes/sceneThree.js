import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar, Image} from 'react-native';
var Sound = require('react-native-sound');

export default class SceneThree extends Component {


    
    componentWillMount() {
    this.image = (
    <Image source={require('../../animation/scene3.gif')} style={{width: '100%', height: '100%'}}
    onLoad={() => this.setState({loading: true})}
    />);
    this.text = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontSize:16}}>
          A town by the sea is scorched red with fire. The magalos raiders, destroyers of peace, unable to make off with goods or people they could claim as spoils of the conflict retreat empty handed from the raging inferno. To the untrained eye this was merely a move by the enemy pirates to confuse and scatter the island dwellers. This was, however, a plan from the defending rulers all along.
          </Text>
        </View>
      </View>
    );
    }

    state: {
          loading: 'false'
    }
    render() {
        return (
         
                <View style={style.Container}>
                    {this.image}
                    {this.text}
                </View>
         
        );
    }
}

const style = {
    Container:{
        backgroundColor: 'black'
    }
}