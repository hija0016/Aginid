import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export class Screen1 extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Image
            style={{width: '100%', height: '100%'}}
            source={require('./Animation/scene3.gif')}
            />

            </View>
        )
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