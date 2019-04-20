import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar, Image} from 'react-native';


export default class SceneSix extends Component {


    componentWillMount() {
    this.image = (
    <Image source={require('../../animation/scene6.gif')} style={{width: '100%', height: '100%'}}
    onLoad={() => this.setState({loading: true})}
    />);
    this.text = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.6, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center'}}>
          Peace and order maintained throughout the island allowed the port town to flourish with trade. Humabon carried on as a successor to his Bantug’s duties. 

Due to Sugbo's location in the archipelago that would be called the Philippines close to the neighboring lands of Malacca and Borneo, traders from across Asia would barter their wares in the area. 

Corn and agricultural products from the locals would be exchanged with silk and porcelain from the Chinese, sugar and precious stones from Indian and Burmese people, perfume and glass from the Japanese. Thus, the old Sugbo in the Visayas thrived on a self-sufficient economy.
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