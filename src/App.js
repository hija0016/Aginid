import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

export default class App extends Component {
  render() {
    return (

        <View style={styles.container}>
            <Image
            style={{width: '100%', height: '100%'}}
            source={require('./Animation/scene3.gif')}
            />
       </View>
    );
  }
}
const styles = {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
  };