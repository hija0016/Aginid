import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar,Easing, Image, Animated} from 'react-native';;
var Sound = require('react-native-sound');

export default class SceneOneTwo extends Component {
    constructor () {
      super()
      this.animatedValue = new Animated.Value(0)
    }
      
    componentDidMount() {
        this.animate()
        
  
    }
    
    componentWillMount() {
    this.image = (
    <Image resizeMode='cover' source={require('../../animation/scene1+2.gif')} style={{width:'100%', height: '100%'}}
    onLoad={() => this.setState({loading: true})}
    />);
    
    this.text = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.9, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center'}}>
          In the era before the Spanish the island of Sugbo bustled with activity. The sound of gongs reverberated across the town. Trade between the islanders and the merchants continues to flourish as the people who live there pass their tales through song and dance. 
          </Text>
        </View>
      </View>
    );

    }



    
// Creates the player

    animate () {
      this.animatedValue.setValue(0)
      Animated.timing(
        this.animatedValue,
        {
          toValue: 4,
          duration: 10000,
          easing: Easing.linear
        }
      ).start()
    }
    state: {
          loading: 'false'
    }
    render() {
        const marginLeft = this.animatedValue.interpolate({
          inputRange: [0,1,2,3,4],
          outputRange: [0,0,0,0,-800]
        })
        return (
              <View style={style.Container}>
                  <Animated.View style={{marginLeft}}>
                    {this.image}
                   </Animated.View>
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