import React from 'react';
import {Modal,TextInput,Text, Alert,  View , Button} from 'react-native';
import StyleSheet from './MyCssDir/MyCssFile';
import { gray } from 'ansi-colors';


export default class App extends React.Component {
 
  state = { modalVisible: false };

  btnjsAlertClicked = async () => {
     alert('السلام عليكم و رحمة الله وبركاته'); 
  }


  btnAlertClicked = async () => { 
      Alert.alert(
        'My Alert',
        'My Confirm Msg',
        [{text: 'OK', onPress: () => console.log('OK Pressed')},]
    );
  }


  btnConfirmClicked = async () => { 
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        {text: 'Other', onPress: () => console.log('Other Pressed')},
      ],
      { cancelable: false }
    );

  }

  setModalVisible(visible) { 
    this.setState({modalVisible: visible}); 
   }
 
  render() {

    return (
      <View style={StyleSheet.container}>

         <Button style={StyleSheet.button} title='js alert' onPress={this.btnjsAlertClicked} />
         <Button style={StyleSheet.button} title='alert' onPress={this.btnAlertClicked} />
         <Button style={StyleSheet.button} title='Confirm' onPress={this.btnConfirmClicked} />
         <Button style={StyleSheet.button} title='Show Modal' onPress={() => {
            this.setModalVisible(true);
          }}/>

        <Modal  style={{opacity:0.5,backgroundColor:'gray'}}        
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={()=>{}}>
          <View style={{marginTop: 100,marginBottom: 30,backgroundColor:'#384D75',height:200,borderRadius:15,marginLeft:10,marginRight:10}}>
            <View style={{flex:1,justifyContent:"center",marginLeft:10,marginRight:10}}>
              <Text style={{color:'#FFFFFF'}}>Email : </Text>
              <TextInput style={{height: 40, backgroundColor: '#FFFFFF', borderWidth: 1}}/>
              <Button title='close Modal'  onPress={() => {
                      this.setModalVisible(false);}
                      }/>
            </View>
          </View>
        </Modal>



      </View>
    );
  }
}

