import React from 'react';
import { StyleSheet, Text, View, Button,Animated } from 'react-native';

export default class App extends React.Component {
 
  constructor(){
    super();
    
    this.TranslateYAnimation = new Animated.Value(300);
    this.opacityAnimated = new Animated.Value(0);
  }

  ShowSnackBarClicked = async () => {
    
   // this.TranslateYAnimation.setValue(300);  
    this.opacityAnimated.setValue(1); 

    Animated.timing(
        this.TranslateYAnimation, {toValue: 240,duration: 500 }
    ).start(
      
      ()=>{
      Animated.timing(
         this.opacityAnimated, {toValue: 0, duration: 2500 }
        ).start();
    }

    );
  }

  
  

  render() {
    return (
      
      <View style={styles.container}>
      
        <Button onPress={this.ShowSnackBarClicked} title=' Show SnakBar '></Button>
        
        <Animated.View style={
          [
            { transform:[{ translateY: this.TranslateYAnimation}]},
            {opacity: this.opacityAnimated},
            styles.SnackBarContaint 
          ]
          }>
            <Text style={{color:'#ffffff'}}>Welcome to React Native SnackBar ToastMessageBar</Text>
        </Animated.View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  SnackBarContaint:{
    padding:15,
    margin:15,
    justifyContent: 'flex-end',
    backgroundColor:'#000000',
    borderRadius:10,    
  }

});
