import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground
} from 'react-native';
  
  import Swiper from 'react-native-swiper';
  import { StatusBar } from 'react-native';
  import SceneOneTwo from './scenes/sceneOneTwo';
  import SceneThree from './scenes/sceneThree';
  import SceneFour from './scenes/sceneFour';
  import SceneFive from './scenes/sceneFive';
  import SceneSix from './scenes/sceneSix';
  import SceneSeven from './scenes/sceneSeven';
  import SceneEight from './scenes/sceneEight';
  import SceneNine from './scenes/sceneNine';
  import SceneNineA from './scenes/sceneNineA';
  import SceneTen from './scenes/sceneTen';
  import SceneEleven from './scenes/sceneEleven';
  import SceneTwelve from './scenes/sceneTwelve';
  import SceneFourteen from './scenes/sceneFourteen';
  import SceneFifteen from './scenes/sceneFifteen';
  import SceneSixteen from './scenes/sceneSixteen';
  var Sound = require('react-native-sound');

  export default class MainScreen extends Component {

    constructor(props) {
      super(props);
      this.state = {
          loading: 'false',
          index: 0
      };
    
    }


    componentDidMount() {
      StatusBar.setHidden(true);
      Sound.setCategory('Ambient');

      // Load the sound file 'whoosh.mp3' from the app bundle
      // See notes below about preloading sounds within initialization code below.
      var whoosh = new Sound('bg.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

        // Play the sound with an onEnd callback
        whoosh.play((success) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      });
      whoosh.setNumberOfLoops(100);
    }

    render(){

      return (
        <Swiper style={styles.wrapper} paginationStyle={{position:'absolute', bottom: -50}} showsButtons={false}
        loadMinimal={true} loadMinimalSize={0} loop={false} onIndexChanged={(value)=> this.setState({index: value})}>
            <SceneOneTwo/>
            <SceneThree/>
            <SceneFour/>
            <SceneFive/>
            <SceneSix/>
            <SceneSeven/>
            <SceneEight/>
            <SceneNine/>
            <SceneNineA/>
            <SceneTen/>
            <SceneEleven/>
            <SceneTwelve/>
            <SceneFourteen/>
            <SceneFifteen/>
            <SceneSixteen/>
        </Swiper>
      );
    }
  }
  
  const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BB',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',

    },
  })

  