import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar, Image, TouchableWithoutFeedback} from 'react-native';


export default class SceneFour extends Component {
    constructor () {
        super()
        this.state = {
          loading: 'false',
          noOfTap: 0
         };
      }

    componentWillMount() {
    this.image = (
    <Image source={require('../../animation/scene4.gif')} style={{width: '100%', height: '100%'}}
    onLoad={() => this.setState({loading: true})}
    />);
    this.text1 = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontSize: 15}}>
          The burning village does not strike fear into the datu and his people. Sri Lumay, who came from Borneo, stands strong amidst the destruction. 
          </Text>
        </View>
      </View>
    );
    this.text2 = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontSize: 15}}>
          As he had rebelled against the land from which he came, the wise ruler was determined to defend the island where he now lived in. 
          </Text>
        </View>
      </View>
    );
    this.text3 = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontSize: 15}}>
          It is said that this was how Sugbo got its name, Kang Sri Lumay'ng Sugbo, Sri Lumay's scorched town.
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
                    <TouchableWithoutFeedback onPress={()=>this.setState({noOfTap: this.state.noOfTap + 1})}>
                  {
                    this.state.noOfTap == 0 ? this.text1 :
                    this.state.noOfTap == 1 ? this.text2 : 
                    this.state.noOfTap == 2 ? this.text3 :
                    <View></View> 
                  
                  }
                   </TouchableWithoutFeedback>
                </View>
         
        );
    }
}

const style = {
    Container:{
        backgroundColor: 'black'
    }
}