
import React from 'react';
import {Image, Button,View } from 'react-native';
import StyleSheet from './AppThemes/css/styles.js';
import { Audio } from 'expo';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.playbackObject = new Audio.Sound();
}

  
  btnStopPlayeClicked = async () => {
    await this.playbackObject.stopAsync();
  }


  btnPlayeClicked = async () => {

    //await Audio.Sound.createAsync(require('./assets/zekiri.mp3'), { shouldPlay: true } );
    //await Audio.Sound.createAsync({uri:'http://praytimes.org/audio/adhan/Sunni/Abdul-Hakam.mp3'}, { shouldPlay: true } );
    //const audioFile = require('./assets/zekiri.mp3');
    //const statusPalay = { shouldPlay: false };
    //playbackObject = await Audio.Sound.createAsync(audioFile, statusPalay ); 

    
    await this.playbackObject.loadAsync(require('./assets/zekiri.mp3'));
    //await this.playbackObject.loadAsync({uri:'http://praytimes.org/audio/adhan/Sunni/Abdul-Hakam.mp3'});
    await this.playbackObject.playAsync();


  };



  render() {
    return (
      <View style={StyleSheet.container}>
        <Button title="Playe" onPress={this.btnPlayeClicked}/>
        <Image source={require('./AppThemes/img/Mp3.png')} style={StyleSheet.imgcircel}/>
        <Button title="Stop" onPress={this.btnStopPlayeClicked}/>
     </View>
    );
  }
  
  
}


