import React, { Component } from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import data from './CategoryData';

class DrawerNav extends Component {
    static navigationOptions = {
        header:null
    }
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1,width:'100%',justifyContent:'space-around',alignItems:'center',backgroundColor:'#1de9b6',paddingVertical:10,elevation:7}}>
                    <View style={{width:'100%',height:'80%',justifyContent:'center',alignItems:'center'}}>
                        <Image style={{width:'45%',height:'55%'}} source={require('../assets/clipboard-8-64.png')}/>
                    </View>
                    <View style={{width:'100%',height:'30%',alignItems:'center'}}>
                        <Text style={{color:'#fff',fontSize:28,fontWeight:'bold'}}>MyTodoList</Text>
                    </View>
                </View>
                <View style={{flex:2,width:'100%',height:'100%',paddingVertical:10}}>
                    <View style={{width:'100%',height:'10%',justifyContent:'center'}}>
                        <Text style={{color:'#1de9b6',fontSize:23,fontWeight:'bold',marginLeft:10}}>Category</Text>
                    </View>
                    <View style={{width:'100%',height:'90%'}}>
                    {
                        data.map((item, index)=>{
                            return (
                                <TouchableOpacity key={index} style={{width:'100%',height:'15%',marginTop:5,flexDirection:'row',alignItems:'center',borderTopWidth:1,borderBottomWidth:1,borderColor:'#1de9b6'}}>
                                    <Image style={{height:30,width:30,marginLeft:10}} source={{uri:item.icon}}/>
                                    <Text style={{color:'#1de9b6',fontSize:17,fontWeight:'bold',marginLeft:20}}>{item.name}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                    </View>
                </View>
            </View>          
        )
    }     
}
const styles = StyleSheet.create({
    img: {
        top: '30%',
        width: 110,
        height: 110,
        borderRadius: 75
    },
    ctgy: {
        flexDirection: 'row',
        flex: 1,
        padding: 10
    }
})
export default DrawerNav;