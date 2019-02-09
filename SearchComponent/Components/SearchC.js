import React from 'react';
import { Button, View,TextInput } from 'react-native';

class SearchC extends React.Component {
  render() {
    return (
      <View style={{marginTop:30}}>
          <TextInput style={{height:50, paddingLeft:5,borderWidth:1}} placeholder="Search"></TextInput>
          <Button style={{height:50, marginLeft:5}} title="Search" onPress={()=> {}}></Button>
      </View>
    );
  }
}


  
export default SearchC