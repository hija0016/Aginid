import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar, Image} from 'react-native';


export default class SceneTwelve extends Component {


    componentWillMount() {
    this.image = (
    <Image source={require('../../animation/scene12.gif')} style={{width: '100%', height: '100%'}}
    onLoad={() => this.setState({loading: true})}
    />);

    this.text = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center'}}>
          The dawn of the battle. Humabon knew that the Spanish crew had no chances at victory against their foes. He motioned to his warriors to stay back from the conflict. 
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