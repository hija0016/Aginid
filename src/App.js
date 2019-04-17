import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground
} from 'react-native';
  
  import Swiper from 'react-native-swiper';
  import { StatusBar } from 'react-native';

  export default class App extends Component {
    componentDidMount() {
      StatusBar.setHidden(true);
    }
    render(){
      return (
        <Swiper style={styles.wrapper} paginationStyle={{position:'absolute', bottom: -50}} showsButtons={false}>

            {/**scene1+2*/}
            <ImageBackground source={require('./Animation/scene1+2.gif')} style={{width: '100%', height: '100%'}}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Reginald Bartiana presents </Text>
            </View>
            </ImageBackground>
                      
            {/**scene3*/}
            <ImageBackground source={require('./Animation/scene3.gif')} style={{width: '100%', height: '100%'}}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Reginald Bartiana presents </Text>
            </View>
            </ImageBackground>

            {/**scene4*/}
            <ImageBackground source={require('./Animation/scene4.gif')} style={{width: '100%', height: '100%'}}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Reginald Bartiana presents </Text>
            </View>
            </ImageBackground>

            {/**scene5*/}
            

            {/**scene6*/}
            <ImageBackground source={require('./Animation/scene6.gif')} style={{width: '100%', height: '100%'}}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Reginald Bartiana presents </Text>
            </View>
            </ImageBackground>

            {/**scene7*/}
            <ImageBackground source={require('./Animation/scene7.gif')} style={{width: '100%', height: '100%'}}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Reginald Bartiana presents </Text>
            </View>
            </ImageBackground>

            {/**scene8*/}
            <ImageBackground source={require('./Animation/scene8.gif')} style={{width: '100%', height: '100%'}}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Reginald Bartiana presents </Text>
            </View>
            </ImageBackground>

            {/**scene9*/}
            <ImageBackground source={require('./Animation/scene9.gif')} style={{width: '100%', height: '100%'}}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Reginald Bartiana presents </Text>
            </View>
            </ImageBackground>

            {/**scene10*/}
            

            {/**scene11*/}
            <ImageBackground source={require('./Animation/scene11.gif')} style={{width: '100%', height: '100%'}}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Reginald Bartiana presents </Text>
            </View>
            </ImageBackground>

            {/**scene12*/}
            <ImageBackground source={require('./Animation/scene12.gif')} style={{width: '100%', height: '100%'}}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Reginald Bartiana presents </Text>
            </View>
            </ImageBackground>

            {/**scene13*/}
            <ImageBackground source={require('./Animation/scene13.gif')} style={{width: '100%', height: '100%'}}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Reginald Bartiana presents </Text>
            </View>
            </ImageBackground>

            {/**scene14*/}
            <ImageBackground source={require('./Animation/scene14.gif')} style={{width: '100%', height: '100%'}}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Reginald Bartiana presents </Text>
            </View>
            </ImageBackground>

            {/**scene15*/}
            <ImageBackground source={require('./Animation/scene15.gif')} style={{width: '100%', height: '100%'}}>
            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Reginald Bartiana presents </Text>
            </View>
            </ImageBackground>
  
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

  
