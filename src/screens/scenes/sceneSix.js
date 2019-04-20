import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar, Image, TouchableWithoutFeedback} from 'react-native';


export default class SceneSix extends Component {
    constructor () {
        super()
        this.state = {
          loading: 'false',
          noOfTap: 0
         };
      }

    componentWillMount() {
    this.image = (
    <Image source={require('../../animation/scene6.gif')} style={{width: '100%', height: '100%'}}
    onLoad={() => this.setState({loading: true})}
    />);
    this.text1 = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontSize: 15}}>
          Peace and order maintained throughout the island allowed the port town to flourish with trade. Humabon carried on as a successor to his Bantug’s duties.
          </Text>
        </View>
      </View>
    );
    
    this.text2 = (
      <View style={{ position: 'absolute', padding: 50, top: 250}}>
      <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
        <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontSize: 15}}>
        Due to Sugbo's location in the archipelago that would be called the Philippines close to the neighboring lands of Malacca and Borneo, traders from across Asia would barter their wares in the area. 
        </Text>
      </View>
    </View>
  );

  this.text3 = (
    <View style={{ position: 'absolute', padding: 50, top: 250}}>
    <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
      <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontSize: 15}}>
      Corn and agricultural products from the locals would be exchanged with silk and porcelain from the Chinese, sugar and precious stones from Indian and Burmese people, perfume and glass from the Japanese. Thus, the old Sugbo in the Visayas thrived on a self-sufficient economy.
      </Text>
    </View>
  </View>
);
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