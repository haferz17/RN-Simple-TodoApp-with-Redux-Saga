import React, { Component } from 'react';
import {
    Modal, 
    Text, 
    TouchableOpacity, 
    View, 
    Alert,
    Dimensions,
    StyleSheet,
    TextInput,
    Picker
} from 'react-native';
const { width, height } = Dimensions.get('window')

export default class EditTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
        modalVisible: true,
    } 
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    const { id } = this.props.data
    console.log(this.props.todos);
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
        }}>
          <View style={{flex:1, alignItems: 'center',justifyContent: 'center'}}>
            <View style={styles.modal}>
              <View style={{backgroundColor:'#fff',elevation:5,borderRadius:10,height:'90%',width:'90%'}}>
                <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontSize:20,marginBottom:10}}>Are you sure to</Text>
                  <Text style={{fontSize:20}}>delete this Todo ?</Text>
                  <View style={{flexDirection:'row',justifyContent:'space-around',width:'100%',marginTop:20}}>
                    <TouchableOpacity 
                        onPress={() => {             
                            this.props.func.onDeleteItemAction({id,data:this.props.todos})
                            this.props.action()
                        }}
                    >
                      <Text style={{paddingVertical:10,paddingHorizontal:20,backgroundColor:'#1de9b6',color:'#fff',borderRadius:5,fontWeight:'bold'}}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.props.action()}}>
                      <Text style={{paddingVertical:10,paddingHorizontal:20,backgroundColor:'#F48FB1',color:'#fff',borderRadius:5,fontWeight:'bold'}}>No</Text>
                    </TouchableOpacity>
                  </View>     
                </View>     
              </View>     
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    modal: {
      backgroundColor:'#F48FB1', 
      borderTopLeftRadius: 70,
      borderBottomRightRadius: 70,
      elevation: 10, 
      height: height*0.3, 
      width: width*0.8,
      alignItems: 'center',
      justifyContent: 'center'
    }
})