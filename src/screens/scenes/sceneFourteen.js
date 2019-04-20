import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar, Image, TouchableWithoutFeedback} from 'react-native';


export default class SceneFourteen extends Component {
    constructor () {
        super()
        this.state = {
          loading: 'false',
          noOfTap: 0
         };
      }

    componentWillMount() {
    this.image = (
    <Image source={require('../../animation/scene14.gif')} style={{width: '100%', height: '100%'}}
    onLoad={() => this.setState({loading: true})}
    />);

    this.text1 = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontSize: 15}}>
          The battle at Mactan had begun. Unable to heed the warnings from the Spanish, 
          </Text>
        </View>
      </View>
    );
    this.text2 = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontSize: 15}}>
          Magellan charged forward, too confident to prove he could subdue the natives despite the orders from his expedition. The lopsided clash was a loss for the Spanish with the defeat of Magellan. 
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
                            <View></View> 
                        
                        }
                   </TouchableWithoutFeedback>
                </View>
         
        );
    }
}

const style = {
    Container:{
        backgroundColor: 'black',
        alignItems: 'center',
    }
}