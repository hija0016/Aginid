import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar, Image} from 'react-native';


export default class SceneFifteen extends Component {


    componentWillMount() {
    this.image = (
    <Image source={require('../../animation/scene15.gif')} style={{width: '100%', height: '100%'}}
    onLoad={() => this.setState({loading: true})}
    />);

    this.text = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.6, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center'}}>
          In order to appease the locals who had been disturbed by the visiting expedition, Sri Humabon organized a feast to defeat the treacherous Spanish consumed by greed.
The surviving Spanish who avoided the banquet left the island and resumed their journey. Humabon's strength acknowledged, Lapu-Lapu makes peace with the datu whom he once quarrelled with, impressed by his cunning stealth involved with the visitors from across the sea.
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