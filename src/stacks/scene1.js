import {
    createStackNavigator,
} from 'react-navigation';

import Screen1 from '../screens/screen1';



const Scene1 = createStackNavigator({
    Screen1: Screen1
    // ProductScreen: ProductScreen,
},
{
    initialRouteName: 'Screen1',
    cardStyle: {
        opacity: 1,
    },

}
);

export default Scene1;