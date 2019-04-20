import React, { Component } from 'react';
import { TouchableWithoutFeedback ,View, Image, Text, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
let width = screenWidth/3;
export default class SceneFive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: 'false',
            count: []
        };
      }

    async componentWillMount() {
     this.image =  (
 
         <Image source={require('../../animation/Scene5/bg.jpg')} style={{width: '100%', height: '100%', position: 'relative'}}
    onLoad={() => this.setState({loading: true})}
    />
   );

   this.pop1 =  (
            <Image source={require('../../animation/Scene5/1st.png')} style={{width: '100%', height: '100%', position: 'absolute', left: 35}}
    onLoad={() => this.setState({loading: true})}
    />
    );

    this.pop2 =  (
        <Image source={require('../../animation/Scene5/2nd.gif')} style={{width: '100%', height: '100%', position: 'absolute'}}
    onLoad={() => this.setState({loading: true})}
    />
    
    );
    
    this.pop3 =  (
        <Image source={require('../../animation/Scene5/3rd.png')} style={{width: '100%', height: '100%', position: 'absolute'}}
    onLoad={() => this.setState({loading: true})}
    />
    );
    }
     
    render() {

        let data = [];
        data.push(this.state.count)
        return (
    
                <View style={style.Container}>
                    {this.image}
                    <TouchableWithoutFeedback onPress={()=> this.setState({count: this.state.count + 1})}> 
                        <View  style={{height:'100%', width: '100%', position: 'absolute'}}>
                                {this.state.count.length > 0 ? 
                                    this.pop1
                                :<View></View>}

                                {this.state.count.length > 1 ? 
                                    this.pop2
                                :<View></View>}

                                {this.state.count.length > 2 ? 
                                    this.pop3
                                :<View></View>}
                        </View>
                       
                    </TouchableWithoutFeedback>
                    {/* {this.image}
                    {this.pop2}
                    {this.pop1}
                    {this.pop3} */}
                </View>
    
                    
             
          
         
        );
    }
}

const style = {
    Container:{
        backgroundColor: 'black'
    }
}