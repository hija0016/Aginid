import Loader from './Loader';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator(
    {
        Loader: {
            screen: Loader,
        }
        ,//place any modal screens here.. make sure to add suffix Modal

    },
    {
        initialRoute: 'Loader',
        mode: 'modal',
        headerMode: 'none',
    }
);

export default createAppContainer(RootStack);
