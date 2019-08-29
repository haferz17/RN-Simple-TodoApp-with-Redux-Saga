import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar
} from 'react-native';
import Header from './Header';
import Flatlist from './Flatlist';
import AddTodo from './AddTodo';
import FriendList from './FriendList';
const { width, height } = Dimensions.get('window')

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            friend: false
        }
    }
    sort(item){
        const { todos } = this.props
        let sortData = []
        for(let a=0;a<todos.length;a++){
            if(item==todos[a].finish){
                sortData.push(todos[a])
                this.setState({
                    data: sortData,
                    friend: false
                })
            }
            else if(item==undefined){
                this.setState({
                    data: todos,
                    friend: false
                })
            }
        }
    }
    friends(){
        this.setState({friend: true})
    }
    render(){
        console.log(this.props);
        console.log(this.state.data)
        return(
            <View style={{flex:1,backgroundColor:'#fff',width,height}}>
                <StatusBar backgroundColor='#1de9b6'/>
                <Header navigation={this.props.navigation}/>
                <View style={styles.sort}>
                    <TouchableOpacity onPress={()=>this.sort()}>
                        <Text style={styles.text}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.sort(true)}>
                        <Text style={styles.text}>Finished</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.sort(false)}>
                        <Text style={styles.text}>Unfinished</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.friends()}>
                        <Text style={styles.text}>Friends</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.friend ? <FriendList friends={this.props}/> : 
                    <Flatlist todos={this.props} sorted={this.state.data}/>
                }
                <View style={styles.add}>
                    <TouchableOpacity>
                        <AddTodo todos={this.props}/>
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
    },
    sort: {
        height:50,
        backgroundColor:'#1de9b6',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        elevation:4,
        borderTopWidth: 1,
        borderTopColor: '#fff'
    },
    text: {
        color:'#1de9b6',
        paddingHorizontal:15,
        paddingVertical:5,
        backgroundColor:'#fff',
        borderRadius:15,
        fontWeight:'bold',
    },
})