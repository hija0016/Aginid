import RootStack from './stacks/RootStack';
import React, { Component } from 'react';
import NavigationService from './lib/NavigationService';


export default class App extends Component {

    componentDidCatch(error, info) {
        //TODO, send logs to server for error reporting
        //alert('error')
    }

    render() {
        return (
        
        <RootStack ref={navigatorRef => { NavigationService.setTopLevelNavigator(navigatorRef); }} />
        );
    }

}
