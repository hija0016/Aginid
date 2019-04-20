import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar, Image, TouchableWithoutFeedback} from 'react-native';


export default class SceneSixteen extends Component {
    constructor () {
        super()
        this.state = {
          loading: 'false',
          noOfTap: 0
         };
      }


    componentWillMount() {
    this.image = (
    <Image source={require('../../animation/scene16.gif')} style={{width: '100%', height: '100%'}}
    onLoad={() => this.setState({loading: true})}
    />);
    this.text1 = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontSize: 15}}>
          Lapu-Lapu, having seen enough conflict in his lifetime, leaves with his family for Borneo.
          </Text>
        </View>
      </View>
    );
    this.text2 = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.8, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center', fontSize: 15}}>
          Nobody knows what became of them after they disappeared from the records. They sailed off into the horizon and have not been heard from, ready for a change of place in their lives.
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
        backgroundColor: 'black'
    }
}