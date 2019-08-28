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
    TextInput,
    ActivityIndicator
} from 'react-native';
import EditTodo from './AddTodo';
const { width, height } = Dimensions.get('window')

export default class Flatlist extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
        } 
    }
    
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    _renderItem = ({item}) => {
        let color
        switch(item.category){
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
                        <CheckBox style={{backgroundColor:'#fff'}} value={item.completed}/>
                    </View>
                    <View style={{flex:4}}>
                        <Text style={{color:'#fff',fontSize:17}}>{item.todo}</Text>
                        <Text style={{color:'#fff'}}>Category : {item.category}</Text>
                    </View>
                </View>
            </View>
        
          </TouchableOpacity>
        )
    }
    componentDidMount(){
        this.props.todos.onFetchTodos();  
    }
    render(){
        const { todos, loading } = this.props.todos
        return(
            <View style={{flex:1,alignItems:'center'}}>
            {
                loading ? 
                <ActivityIndicator style={{alignSelf:'center',top:height*0.4,}} size="large"/> : 
                (
                <View>
                    <FlatList
                        data={todos}
                        keyExtractor = { (item, index) => index.toString() }
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