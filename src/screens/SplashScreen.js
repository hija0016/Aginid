import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar, Image} from 'react-native';
var Sound = require('react-native-sound');

export default class SplashScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
          loading: 'false',
      };
    }

    // async componentWillMount() {
    // this.image = (
    
    // />);
    // }

    async componentDidMount() {
        StatusBar.setHidden(true); 
        var whoosh = new Sound('splash.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) {
            console.log('failed to load the sound', error);
            return;
          }
          // loaded successfully
          console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
        
          // Play the sound with an onEnd callback
          whoosh.play();

        });
        const data = await this.performTimeConsumingTask();  
        if (this.state.loading == true) {       
            this.props.navigation.navigate('MainScreen');
            whoosh.stop();
        }
            
  
      }

      performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
          setTimeout(
            () => { resolve('result') },
            3000
          )
        );
      }

    render() {
        return (
         
                <View style={style.Container}>
                   <Image source={require('../animation/splash.gif')} style={{width: '100%', height: '100%'}}
                     onLoad={() => this.setState({loading: true})} /> 
                </View>
         
        );
    }
}

const style = {
    Container:{
        backgroundColor: 'black'
    }
}