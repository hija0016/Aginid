import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar,Easing, Image, Animated, TouchableWithoutFeedback} from 'react-native';;
var Sound = require('react-native-sound');

export default class SceneOneTwo extends Component {
    constructor () {
      super()
      this.animatedValue = new Animated.Value(0)
      this.state = {
        loading: 'false',
        noOfTap: 0
       };
    }
      
    componentDidMount() {
        this.animate()
        
  
    }
    
    componentWillMount() {
    this.image = (
    <Image resizeMode='cover' source={require('../../animation/scene1and2.gif')} style={{width:'100%', height: '100%'}}
    onLoad={() => this.setState({loading: true})}
    />);
    
    this.text1 = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontSize: 15}}>
          In the era before the Spanish the island of Sugbo bustled with activity. The sound of gongs reverberated across the town. 
          </Text>
        </View>
      </View>
    );
    this.text2 = (
      <View style={{ position: 'absolute', padding: 50, top: 250}}>
      <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
        <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontSize: 15}}>
        Trade between the islanders and the merchants continues to flourish as the people who live there pass their tales through song and dance. 
        </Text>
      </View>
    </View>
  );
    this.text3 = (
      <View style={{ position: 'absolute', padding: 50, top: 250}}>
      <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
        <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontSize: 15}}>
        Words upon their lips the performers narrate an origin story of the Visayan rulers and its rulers. Through oral tradition using their songs and dances histories and beliefs of the local population were passed down from one generation to the next.
        </Text>
      </View>
    </View>
  );

    this.text4 = (
      <View style={{ position: 'absolute', padding: 50, top: 250}}>
      <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
        <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center'}}>
        The names of past gods and goddesses and the beat of their gongs welcome this ode to their history that glides on like the waves upon the sea.
        </Text>
      </View>
    </View>
  );

  this.arrow = (
    <Image resizeMode='cover' source={require('../../animation/arrow3.png')} style={{width: 70, height: 70, position: 'absolute',left: 550,top: 350}}
    />);
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
                   <TouchableWithoutFeedback onPress={()=>this.setState({noOfTap: this.state.noOfTap + 1})}>
                  {
                    this.state.noOfTap == 0 ? this.text1 :
                    this.state.noOfTap == 1 ? this.text2 : 
                    this.state.noOfTap == 2 ? this.text3 : 
                    this.state.noOfTap == 3 ? this.text4 :
                    <View></View> 
                  
                  }
                   </TouchableWithoutFeedback>
              </View>
              
         
        );
    }
}

const style = {
    Container:{
        // backgroundColor: 'black'
    }
}