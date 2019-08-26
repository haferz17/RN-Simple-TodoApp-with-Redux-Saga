import React, { Component } from 'react';
import {  
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                    <Image source={require('../assets/menu.png')} style={{width:30,height:30}}/>
                </TouchableOpacity>
                <Text style={{color:'#fff',fontSize:25}}>To Do App</Text>
                <TouchableOpacity>
                    <Image source={require('../assets/settings-48.png')} style={{width:30,height:30}}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 70,
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#1de9b6',
        elevation:5
    }
})