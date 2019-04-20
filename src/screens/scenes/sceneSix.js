import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar, Image, TouchableWithoutFeedback} from 'react-native';


export default class SceneSix extends Component {
    constructor () {
        super()
        this.state = {
          loading: 'false',
          noOfTap: 0
         };
      }

    componentWillMount() {
    this.image = (
    <Image source={require('../../animation/scene6.gif')} style={{width: '100%', height: '100%'}}
    onLoad={() => this.setState({loading: true})}
    />);
    this.text1 = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontSize: 15}}>
          Sri Alho who went down south towards Carcar until Santander in what was called Sialo, and his youngest son, Sri Bantug who had no sons took over Singhapala, spanning San Nicolas up to Mabolo upon Sri Lumay's passing.
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