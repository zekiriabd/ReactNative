
import React from 'react';
import {Image, Button,View } from 'react-native';
import { ImagePicker, Permissions } from 'expo';

import StyleSheet from './AppThemes/css/styles.js';


export default class App extends React.Component {
  state = { image: null};

  render() {
    let { image } = this.state;
    return (
      <View style={StyleSheet.container}>
      <Image source={{ uri: image }} style={StyleSheet.imgcircel}  />      
      <Button title="Take a picture" onPress={this.btnCameraClicked} />
      <Button title="Gallery" onPress={this.btnGalleryClicked}/>
    </View>
    );
  }
  
  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  };

  btnGalleryClicked = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  btnCameraClicked = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync(
      {
        allowsEditing: true,
        aspect: [4, 3],}
      );
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

}


