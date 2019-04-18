import {
    createSwitchNavigator,
} from 'react-navigation';


import SplashScreen from '../screens/SplashScreen';
import MainScreen from '../screens/MainScreen';


const Loader = createSwitchNavigator(
    {
        SplashScreen:SplashScreen,
        MainScreen: MainScreen
    },
    {
        initialRouteName: 'SplashScreen',
    }
);

export default Loader;
