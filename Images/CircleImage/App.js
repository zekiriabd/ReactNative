import React from 'react';
import { Image,View } from 'react-native';
import StyleSheet from './AppThemes/css/styles.js';


export default class App extends React.Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        
        <Image source={require('./AppThemes/img/zekiri.png')} style={StyleSheet.imgcircel}/>
        
        <Image source={
             {
                 uri: 'http://static8.viadeo-static.com/lKfOvNQXhIE0Y_oq6vlpeV5gb3I=/300x300/member/002ha5whz87mhmx%3Fts%3D1357726222000'
             }
          }        
          style={StyleSheet.imgcircel}
        />      

      </View>

    );
  }
}
