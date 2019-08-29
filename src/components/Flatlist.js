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
    ActivityIndicator,
    Picker
} from 'react-native';
import EditTodo from './EditTodo';
import DeleteTodo from './DeleteTodo';
const { width, height } = Dimensions.get('window')

export default class Flatlist extends Component {
    constructor(props){
        super(props);
        this.handler=this.handler.bind(this)
        this.state = {
            modalVisible: false,
            id: '',
            todo: '',
            category: '',
            action: ''
        } 
    }
    handler(){
        this.setState({action:''})
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    _onRefresh(){
        // this.props.todos.onFetchTodos();
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
            <View style={{width,alignItems:'center'}}>
                <View style={{backgroundColor: color,marginTop:20,width:width*0.9,borderRadius:5,flexDirection:'row',alignItems:'center',elevation:3,padding:10}}>
                    <View style={{flex:1,alignItems:'center'}}>
                        <CheckBox style={{backgroundColor:'#fff'}} value={item.finish}/>
                    </View>
                    <View style={{flex:6,paddingLeft:20}}>
                        <Text style={{color:'#fff',fontSize:17}}>{item.todo}</Text>
                        <Text style={{color:'#fff'}}>Category : {item.category}</Text>
                    </View>
                    <View style={{flex:2}}>
                        <Picker
                            selectedValue={this.state.action}
                            style={{height: 50, width: '100%'}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({action: itemValue, id: item.id, todo: item.todo, category: item.category})
                        }>
                            <Picker.Item label="Action ?" value="" />
                                <Picker.Item label="Edit" value="Edit"/>
                            <Picker.Item label="Delete" value="Delete" />
                        </Picker>
                    </View>
                </View>
            </View>
        )
    }
    componentDidMount(){
        this.props.todos.onFetchTodos();  
    }
    render(){
        const { todos, loading } = this.props.todos
        const { sorted } = this.props
        const { action } = this.state
        return(
            <View style={{flex:1,alignItems:'center'}}>
            {
                loading ? 
                <ActivityIndicator style={{alignSelf:'center',top:height*0.4,}} size="large"/> : 
                (
                <View>
                    <FlatList
                        data={sorted.length>0 ? sorted:todos}
                        keyExtractor = { (item, index) => index.toString() }
                        renderItem={this._renderItem}
                        refreshing={loading==undefined?false:loading}
                        onRefresh={this._onRefresh}
                        onEndReachedThreshold={0.1}
                    />
                    {
                        action == "Edit" ? <EditTodo data={this.state} action={this.handler}/> : null
                    }
                    {
                        action == "Delete" ? <DeleteTodo data={this.state} todos={this.props.todos.todos} func={this.props.todos} action={this.handler}/> : null
                    }
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