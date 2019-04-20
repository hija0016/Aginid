import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar, Image, TouchableWithoutFeedback} from 'react-native';


export default class SceneFifteen extends Component {
    constructor () {
        super()
        this.state = {
          loading: 'false',
          noOfTap: 0
         };
      }

    componentWillMount() {
    this.image = (
    <Image source={require('../../animation/scene15.gif')} style={{width: '100%', height: '100%'}}
    onLoad={() => this.setState({loading: true})}
    />);

    this.text1 = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontSize: 15}}>
          In order to appease the locals who had been disturbed by the visiting expedition, Sri Humabon organized a feast to defeat the treacherous Spanish consumed by greed.
          </Text>
        </View>
      </View>
    );
    this.text2 = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center',fontSize: 15}}>
          The surviving Spanish who avoided the banquet left the island and resumed their journey. Humabon's strength acknowledged,
          </Text>
        </View>
      </View>
    );
    this.text3 = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center',fontSize: 15}}>
          Lapu-Lapu makes peace with the datu whom he once quarrelled with, impressed by his cunning stealth involved with the visitors from across the sea.
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
                    this.state.noOfTap == 2 ? this.text3 : 
                    <View></View> 
                  
                  }
                   </TouchableWithoutFeedback>
                </View>
         
        );
    }
}

const style = {
    Container:{
        backgroundColor: 'black',
        alignItems: 'center',
    }
}