
import React from 'react';
import {Button,View } from 'react-native';
import StyleSheet from './AppThemes/css/styles.js';

import {Linking, SMS, Permissions } from 'expo';

export default class App extends React.Component {

  render() {
    return (
      <View style={StyleSheet.container}>
     
           <Button title="phone" onPress={this.btnPhoneClicked} />

           <Button title="SMS" onPress={this.btnSMSClicked}/>

      </View>
    );
  }


  askLKermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.Linking);
  };

  askSMSPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.SMS);
  };
  
  btnPhoneClicked = async () => {
    this.askLKermissionsAsync();
    let result = await Linking.openURL('tel:0609690005');
  };


  btnSMSClicked = async () => {
    //await this.askLKermissionsAsync();
    //let result = await Linking.openURL('sms:0609690005');
    await this.askSMSPermissionsAsync();
    let result = await SMS.sendSMSAsync(['0609690005'], 'السلام عليكم اخوي');
  };
  
 

}


