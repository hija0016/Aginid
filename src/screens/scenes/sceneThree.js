import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar, Image, TouchableWithoutFeedback} from 'react-native';
var Sound = require('react-native-sound');

export default class SceneThree extends Component {

    constructor () {
        super()
        this.state = {
          loading: 'false',
          noOfTap: 0
         };
    }
    
    componentWillMount() {
    this.image = (
    <Image source={require('../../animation/scene3.gif')} style={{width: '100%', height: '100%'}}
    onLoad={() => this.setState({loading: true})}
    />);
    this.text1 = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontSize: 15}}>
          A town by the sea is scorched red with fire. The magalos raiders, destroyers of peace, unable to make off with goods or people they could claim as spoils of the conflict retreat empty handed from the raging inferno.
          </Text>
        </View>
      </View>
    );

    this.text2 = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontSize: 15}}>
          To the untrained eye this was merely a move by the enemy pirates to confuse and scatter the island dwellers. This was, however, a plan from the defending rulers all along.
          </Text>
        </View>
      </View>
    );
    }

    render() {
        return (
         
                <View style={style.Container}>
                    {this.image}
                    <TouchableWithoutFeedback onPress={()=>this.setState({noOfTap: this.state.noOfTap + 1})}>
                  {
                    this.state.noOfTap == 0 ? this.text1 :
                    this.state.noOfTap == 1 ? this.text2 :
                    <View></View> 
                  
                  }
                   </TouchableWithoutFeedback>
                </View>
         
        );
    }
}

const style = {
    Container:{
        backgroundColor: 'black'
    }
}