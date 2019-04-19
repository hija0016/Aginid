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


  export default class MainScreen extends Component {
    componentDidMount() {
      StatusBar.setHidden(true);
    }

    render(){

      return (
        <Swiper style={styles.wrapper} paginationStyle={{position:'absolute', bottom: -50}} showsButtons={false}
        loadMinimal={true} loadMinimalSize={0} loop={false}>
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

  