import React, { Component } from 'react';
import { TouchableOpacity ,View, Image, Text} from 'react-native';


export default class SceneFive extends Component {


    componentWillMount() {
    this.image = (
        <TouchableOpacity onPress={()=> this.setState({press: true})}>
         <Image source={require('../../animation/Scene5/bg.jpg')} style={{width: '100%', height: '100%'}}
    onLoad={() => this.setState({loading: true})}
    />
    </TouchableOpacity>);
    }

    state: {
          loading: 'false',
          press: 'false'
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
        backgroundColor: 'black'
    }
}