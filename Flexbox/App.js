import React from 'react';
import { View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems:"center",justifyContent:"center"}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

