import React from 'react';
import { Text,Button,StyleSheet, NetInfo, View ,Animated } from 'react-native';

export default class App extends React.Component {

  state ={
    opLabel : new Animated.Value(1)
  }

  componentDidMount(){
    NetInfo.addEventListener('connectionChange',this.OnConectivityChange);
  }

  componentWillUnmount(){
    NetInfo.removeEventListener('connectionChange',this.OnConectivityChange);
  }

  OnConectivityChange = (conIfo) =>{
    if(conIfo.type === 'none'){
          Animated.timing(  this.state.opLabel, {toValue: 1, duration: 2000,}).start();
    }
    else{
          Animated.timing(  this.state.opLabel, {toValue: 0, duration: 2000, }).start();   
    }
  }



  btnChekConnection = () => {
    NetInfo.isConnected.fetch().then(isConnected => {
         alert(isConnected ? 'Is connected' : 'Is not connected');
    });

  }

  btnNwetinfoClicked = () => {
    NetInfo.getConnectionInfo().then(con => {
         alert(
           'Network connetion type : ' + con.type + ' ) '+
           'EffectiveType :' + con.effectiveType + ' ) '         
         );
    });

  }



  render() {
    
    return (
      <View style={styles.container}>
      <View style={styles.container}>
          <Button title="Chek Connection" onPress={this.btnChekConnection}/>
          <Button title="Get Network info" onPress={this.btnNwetinfoClicked}/>
      </View>
      <Animated.View style={[styles.opacityLabel,{opacity: this.state.opLabel}]}>
         <Text>Is not connected</Text>
      </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  opacityLabel: {
    padding:15,
    justifyContent: 'flex-end',
  },
  
 
});
