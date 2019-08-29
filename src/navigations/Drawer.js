import React, { Component } from 'react';
import {  
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import  {
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation';
import Home from '../components/Home';
import TodoContainer from '../containers/TodoContainer';
import DrawerNav from '../components/DrawerNav';

const DrawerNavigator = createDrawerNavigator(
    {
        MyTodo: TodoContainer,
    },
    {
        initialRouteName:'MyTodo',
        drawerWidth: 250,
        drawerPosition:'left',
        contentComponent: DrawerNav
    }
);

export default createAppContainer(DrawerNavigator);