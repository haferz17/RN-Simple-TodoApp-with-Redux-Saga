import React, { Component } from 'react';
import {  

} from 'react-native';
import {
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';

import Home from '../screens/Home';
import Drawer from '../navigations/Drawer';

const AppStack = createStackNavigator({
    Home: {
        screen: Drawer,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    }
})

export default createAppContainer(createSwitchNavigator(
    {
        App: AppStack,
    },{
        initialRouteName: 'App'
    }
))