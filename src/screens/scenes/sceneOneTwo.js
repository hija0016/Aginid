import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar,Easing, Image, Animated} from 'react-native';


export default class SceneOneTwo extends Component {
    constructor() {
        super();
        this.RotateValueHolder = new Animated.Value(0);
      }
    
      componentDidMount() {
        this.StartImageRotateFunction();
      }
    
    componentWillMount() {
        const RotateData = this.RotateValueHolder.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          });
    this.image = (
    <Animated.Image resizeMode='cover' source={require('../../animation/scene1+2.gif')} style={{ width: '100%',height: '100%', transform: [{ rotate: RotateData }],}}
    onLoad={() => this.setState({loading: true})}
    />);
    }
    StartImageRotateFunction() {
        this.RotateValueHolder.setValue(0);
    
        Animated.timing(this.RotateValueHolder, {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
        }).start();
      }
    state: {
          loading: 'false'
    }
    render() {
      
        return (
         
                <View style={style.Container}>
                    {this.image}
                </View>
         
        );
    }
}

const style = {
    Container:{
        backgroundColor: 'black'
    }
}