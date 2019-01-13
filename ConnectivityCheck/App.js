import React, { Component } from 'react';
import {Text, Button,Label, View, StyleSheet, Alert } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class App extends Component {
  state = {
    hasCameraPermission: null,
    showBarCodeScanner: false,
    codeData:null,
  };

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    this.setState({
      codeData:data,
      showBarCodeScanner:false,
    });
  };

btnCameraClicked = data  => {
    this._requestCameraPermission();

    this.setState({
      codeData:null,
      showBarCodeScanner:true,
    });
  };


  render() {
    return (
      <View style={styles.container}>
      
        
        <View>
        {
          this.state.showBarCodeScanner === true ?
            <BarCodeScanner onBarCodeRead={this._handleBarCodeRead} style={{ height: 200, width: 200 }} /> :
            <Button title="Take a picture" onPress={this.btnCameraClicked} />
        }
        <Text>{JSON.stringify(this.state.codeData)}</Text>
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});
