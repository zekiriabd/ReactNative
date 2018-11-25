import React from 'react';
import { StyleSheet,Button, Text, View } from 'react-native';

export default class App extends React.Component {
  
  state = { value : 0 }
 
  GetDataFromWebApi = async () =>{
    await fetch("https://free.currencyconverterapi.com/api/v6/convert?q=USD_EUR&compact=y")
    .then ( (response) => response.json())
    .then ( (JsonResult) => {
      this.setState({value : JsonResult.USD_EUR.val});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='USD TO EUR' onPress={this.GetDataFromWebApi}></Button>
        <Text style={styles.valueStyle}>{this.state.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueStyle:{
    fontSize:30,
    margin:30,
  }
});
