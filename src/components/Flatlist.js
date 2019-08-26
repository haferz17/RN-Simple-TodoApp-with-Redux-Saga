import React, { Component } from 'react';
import {  
    View,
    Text,
    FlatList,
    Dimensions,
    CheckBox,
    Modal,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';
import EditTodo from '../screens/AddTodo';
const { width, height } = Dimensions.get('window')

export default class Flatlist extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    todo: 'Go To Beach',
                    ctg: 'Holiday'
                },
                {
                    todo: 'Go To Beach',
                    ctg: 'Work'
                },
                {
                    todo: 'Go To Beach',
                    ctg: 'Wishlist'
                },
                {
                    todo: 'Go To Beach',
                    ctg: 'Personal'
                },
                {
                    todo: 'Go To Beach',
                    ctg: 'Holiday'
                },
                {
                    todo: 'Go To Beach',
                    ctg: 'Work'
                },
                {
                    todo: 'Go To Beach',
                    ctg: 'Wishlist'
                },
                {
                    todo: 'Go To Beach',
                    ctg: 'Personal'
                }
            ],
            modalVisible: false,
        } 
    }
    
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    _renderItem = ({item}) => {
        let color
        switch(item.ctg){
            case 'Holiday':
                color='#29B6F6'
                break;
            case 'Work':
                color='#D4E157'
                break; 
            case 'Wishlist':
                color='#FFE082'
                break;   
            case 'Personal':
                color='#F48FB1'
                break;       
            default:
                color='#29B6F6'
        }
        return (
            <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}>

            <View style={{width,alignItems:'center'}}>
                <View style={{backgroundColor: color,marginTop:20,width:width*0.9,borderRadius:5,flexDirection:'row',alignItems:'center',elevation:3,padding:10}}>
                    <View style={{flex:1,alignItems:'center'}}>
                        <CheckBox/>
                    </View>
                    <View style={{flex:4}}>
                        <Text style={{color:'#fff',fontSize:17}}>{item.todo}</Text>
                        <Text style={{color:'#fff'}}>Category : {item.ctg}</Text>
                    </View>
                </View>
            </View>
        
          </TouchableOpacity>
        )
    }
    render(){
        return(
            <View style={{flex:1,alignItems:'center'}}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                }}>
                    <View style={{flex:1, alignItems: 'center',justifyContent: 'center'}}>
                        <View style={styles.modal}>
                            <Text style={{fontSize:20}}>Edit To Do </Text>
                            <TextInput underlineColorAndroid='#4CAF50' style={{width:'80%'}} placeholder='Your To Do' onChangeText={(text) => this.setState({categoryName: text})}/>
                            <TextInput underlineColorAndroid='#4CAF50' style={{marginBottom:20,width:'80%'}} placeholder='Category' onChangeText={(text) => this.setState({categoryIcon: text})}/>
                            <TouchableOpacity style={{position:'absolute',right:'33%',bottom:'10%'}}>
                                <Text >Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{position:'absolute',right:'10%',bottom:'10%'}} onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                                <Text>Cancel</Text>
                            </TouchableOpacity>
                        </View>     
                    </View>
                </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    modal: {
        backgroundColor:'#fff', 
        borderRadius: 10,
        elevation: 10, 
        height: 170, 
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})