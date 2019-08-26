import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
} from 'react-native';
import Header from '../components/Header';
import Flatlist from '../components/Flatlist';
import AddTodo from '../screens/AddTodo';
const { width, height } = Dimensions.get('window')

export default class Home extends Component {
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#fff',width,height}}>
                <Header navigation={this.props.navigation}/>
                <Flatlist/>
                <View style={styles.add}>
                    <TouchableOpacity>
                        <AddTodo/>
                    </TouchableOpacity>
                </View> 
            </View>
        )
    }
}
const styles = StyleSheet.create({
    add: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '6%',
        right: '6%',
        backgroundColor: '#fff',
        width: 65,
        height: 65,
        borderRadius: 50,
        elevation: 10,
        zIndex: 2
    }
})