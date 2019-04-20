import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar, Image} from 'react-native';


export default class SceneEleven extends Component {


    componentWillMount() {
    this.image = (
    <Image source={require('../../animation/scene11.gif')} style={{width: '100%', height: '100%'}}
    onLoad={() => this.setState({loading: true})}
    />);

    this.text = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.6, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center'}}>
          Zula from Opon relayed the news. Lapu-Lapu was distrusted among Humabon's people as a mangatang, a pirate, who cleverly took advantage of his island's location to obtain the taxes for the ships bound for port in Humabon's sibo.
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