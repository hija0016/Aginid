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

    this.text = (
        <View style={{ position: 'absolute', padding: 50, top: 250}}>
        <View style={{ backgroundColor: 'white', padding: 10, opacity: 0.6, borderRadius: 10}}>
          <Text style={{fontFamily: 'JosefinSans-Regular', textAlign: 'center'}}>
          Sri Lumay had three sons who spread their influence across the island of Sugbo: Sri Ukob who went north from Consolacion to Bantayan in a region called Nahalin, Sri Alho who went down south towards Carcar until Santander in what was called Sialo, and his youngest son, Sri Bantug who had no sons took over Singhapala, spanning San Nicolas up to Mabolo upon Sri Lumay's passing. He did not have any sons so his nephew, Sri Humabon took over leadership upon his passing.
          </Text>
        </View>
      </View>
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
                    {this.text}
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