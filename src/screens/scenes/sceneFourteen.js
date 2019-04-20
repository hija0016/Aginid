import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar, Image} from 'react-native';


export default class SceneFourteen extends Component {


    componentWillMount() {
    this.image = (
    <Image source={require('../../animation/scene14.gif')} style={{width: '100%', height: '100%'}}
    onLoad={() => this.setState({loading: true})}
    />);
    this.text = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontSize:16}}>
          After their defeat at the hands of Lapu Lapu, Humabon prepared a feast. They invited what’s left of the Spanish explorers and started the feast. A few moments later, they mercilessly massacred them and left one to lure out the remaining Foreigners still aboard their ship. The survivor was left behind and the Sugbuanon went back to their old beliefs.
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