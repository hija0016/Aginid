import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
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
            <View style={styles.container}>
            <Image
            style={{width: '100%', height: '100%'}}
            source={require('./Animation/scene1+2.gif')}
            />

            </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
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

  
