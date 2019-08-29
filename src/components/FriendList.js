import React, { Component } from 'react';
import {  
    View,
    Text,
    FlatList,
    Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window')

export default class FriendList extends Component {
    _renderItem = ({item}) => {
        console.log(this.props.friends.friends.length," ",item.id)
        return (
            <View style={{width,alignItems:'center'}}>
                <View style={{backgroundColor: '#fff',marginTop:20,marginBottom:item.id==this.props.friends.friends.length?50:0,width:width*0.9,borderRadius:5,alignItems:'center',elevation:3,padding:10}}>
                    <Text style={{color:'#1de9b6',fontSize:17}}>Name: {item.name}</Text>
                    <Text style={{color:'#1de9b6',fontSize:17}}>Telp: {item.phone}</Text>
                </View>
            </View>
        )
    }
    render() {
        console.log(this.props);
        const { friends } = this.props.friends
        console.log(friends);
        return (
            <View>
                <FlatList
                    data={friends}
                    keyExtractor = { (item, index) => index.toString() }
                    renderItem={this._renderItem}
                    // refreshing={loading==undefined?false:loading}
                    // onRefresh={this._onRefresh}
                    // onEndReachedThreshold={0.1}
                />
            </View>
        )
    }
}