import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar, Image} from 'react-native';


export default class SplashScreen extends Component {


    componentWillMount() {
    this.image = (
    <Image source={require('../animation/splash.gif')} style={{width: '100%', height: '100%'}}
    onLoad={() => this.setState({loading: true})}
    />);
    }
    async componentDidMount() {
        StatusBar.setHidden(true);
        const data = await this.performTimeConsumingTask();
      
        if (this.state.loading == true) {
            if(data !== null){
                this.props.navigation.navigate('MainScreen');
            }
        }
      }

      performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
          setTimeout(
            () => { resolve('result') },
            7000
          )
        );
      }

      state: {
          loading: 'false'
      }
    render() {
        return (
         
                <View style={style.Container}>
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