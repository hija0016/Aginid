import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {

    image: require('./Animation/test3.jpg'),
  },
  {

    image: require('./Animation/test3.jpg'),
  },
  {

    image: require('./Animation/test3.jpg'),
  },

];
export default class App extends Component {
  render() {
    return (

        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
                  <Image style={{ height: 350, flex: 1 }} source={item.image} />
            }
          />
        </View>
    );
  }
}