import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import { StatusBar } from 'react-native';


export default class App extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  componentWillMount() {
    setTimeout(() => {
       this.props.navigation.navigate('Screen1')
    }, 3000);
}

  render() {
    return (

        <View style={styles.container}>
            <Image
            style={{width: '100%', height: '100%'}}
            source={require('./Animation/splash.gif')}
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