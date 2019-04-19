import React, { Component } from 'react';
import { AsyncStorage,View,Text,StatusBar, Image} from 'react-native';


export default class SplashScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
          loading: 'false',
      };
    }

    // async componentWillMount() {
    // this.image = (
    
    // />);
    // }

    async componentDidMount() {
        StatusBar.setHidden(true); 
        const data = await this.performTimeConsumingTask();  
        if (this.state.loading == true) {       
            this.props.navigation.navigate('MainScreen');
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

    render() {
        return (
         
                <View style={style.Container}>
                   <Image source={require('../animation/splash.gif')} style={{width: '100%', height: '100%'}}
                     onLoad={() => this.setState({loading: true})} /> 
                </View>
         
        );
    }
}

const style = {
    Container:{
        backgroundColor: 'black'
    }
}