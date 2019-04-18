import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar, Image,} from 'react-native';


export default class SceneOneTwo extends Component {


    componentWillMount() {
    this.image = (
    <Image resizeMode='cover' source={require('../../animation/scene1+2.gif')} style={{ width: '100%',height: '100%'}}
    onLoad={() => this.setState({loading: true})}
    />);
    }

    state: {
          loading: 'false'
    }
    render() {
        return (
         
                <View>
                    {this.image}
                </View>
         
        );
    }
}

const style = {
    Container:{
        flex: 1, justifyContent: 'center', alignItems: 'center' 
    }
}