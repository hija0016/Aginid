import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar, Image} from 'react-native';


export default class SceneFour extends Component {


    componentWillMount() {
    this.image = (
    <Image source={require('../../animation/scene4.gif')} style={{width: '100%', height: '100%'}}
    onLoad={() => this.setState({loading: true})}
    />);
    this.text = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontSize:16}}>
          The burning village does not strike fear into the datu and his people. Sri Lumay, who came from Borneo, stands strong amidst the destruction. As he had rebelled against the land from which he came, the wise ruler was determined to defend the island where he now lived in. It is said that this was how Sugbo got its name, Kang Sri Lumay'ng Sugbo, Sri Lumay's scorched town.
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