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
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.6, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center'}}>
          The battle at Mactan had begun. Unable to heed the warnings from the Spanish, Magellan charged forward, too confident to prove he could subdue the natives despite the orders from his expedition. The lopsided clash was a loss for the Spanish with the defeat of Magellan. 
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