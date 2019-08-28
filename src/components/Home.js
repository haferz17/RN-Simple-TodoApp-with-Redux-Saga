import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
} from 'react-native';
import Header from './Header';
import Flatlist from './Flatlist';
import AddTodo from './AddTodo';
const { width, height } = Dimensions.get('window')

export default class Home extends Component {
    constructor(props){
        super(props);
        console.log(this.props)
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#fff',width,height}}>
                <Header navigation={this.props.navigation}/>
                <Flatlist todos={this.props}/>
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