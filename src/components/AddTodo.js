import React, { Component } from 'react';
import {
    Modal, 
    Text, 
    TouchableOpacity, 
    View, 
    Alert,
    Dimensions,
    StyleSheet,
    TextInput
} from 'react-native';
const { width, height } = Dimensions.get('window')

export default class AddTodo extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
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
                    <Text style={{fontSize:20}}>Add To Do </Text>
                    <TextInput underlineColorAndroid='#4CAF50' style={{width:'80%'}} placeholder='Your To Do' onChangeText={(text) => this.setState({categoryName: text})}/>
                    <TextInput underlineColorAndroid='#4CAF50' style={{marginBottom:20,width:'80%'}} placeholder='Category' onChangeText={(text) => this.setState({categoryIcon: text})}/>
                    <TouchableOpacity style={{position:'absolute',right:'33%',bottom:'10%'}}>
                      <Text >Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{position:'absolute',right:'10%',bottom:'10%'}} onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                      <Text>Cancel</Text>
                    </TouchableOpacity>
                </View>     
            </View>
        </Modal>

        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={{fontSize:30}}>+</Text>
        </TouchableOpacity>
      </View>
    );
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