import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar, Image, TouchableWithoutFeedback} from 'react-native';


export default class SceneSeven extends Component {
    constructor () {
        super()
        this.state = {
          loading: 'false',
          noOfTap: 0
         };
      }

    componentWillMount() {
    this.image = (
    <Image source={require('../../animation/scene7.gif')} style={{width: '100%', height: '100%'}}
    onLoad={() => this.setState({loading: true})}
    />);
    this.text = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.6, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center'}}>
          In March of 1521 a group of Spanish explorers arrived with 3 galleon ships. Led by the Portuguese Ferdinand Magellan, the crew went ashore with the slave interpreter Enrique of Malacca whom the local people addressed him as Makiyong.
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