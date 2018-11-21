import React from 'react';
import {TouchableOpacity,Image,StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
 
 

  
  floatBtnClicked = async () => { 
    alert('11111111');    
   }
 
 
  render() {

    const shadowStyle={
      shadowOffset: { width: 1, height: 1 },
      shadowColor: "#000000",
      shadowOpacity: 0.5,
      shadowRadius: 1,
    }


    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        
      
        <TouchableOpacity onPress={this.floatBtnClicked} style={[styles.floatView,shadowStyle]}>
            <Image source={require('./assets/FloatingAction.png')} style={styles.floatimg} />
        </TouchableOpacity>

      </View>
    );
  }
}

/*<TouchableOpacity style={[styles.floatBtn,shadowStyle]} onPress={this.floatBtnClicked}>
<Text style={styles.textfloatBtn}>+</Text>        
</TouchableOpacity>
*/
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  floatView:{
    position:'absolute',
    width:70,
    height:70,
    bottom:35,
    right:10,
  },
  floatimg:{
    width:70,
    height:70,
  },


  floatBtn:{
    position:'absolute',
    backgroundColor:'red',
    borderRadius:35,
    width:70,
    height:70,
    bottom:35,
    right:10,
    alignItems:'center',
    justifyContent:'center',
  },

  textfloatBtn:{
    color:'#FFFFFF',
    fontSize:40,
    fontWeight:'bold',
  }



});





