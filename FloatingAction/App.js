import React from 'react';
import {Animated,TouchableOpacity,Image,StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
 
 
  constructor(){
    super();
    
    this.TranslateYAnimation = new Animated.Value(50);
    this.opacityAnimated = new Animated.Value(0);
  }

  floatBtnClicked = async () => {
    this.TranslateYAnimation.setValue(50);  
    this.opacityAnimated.setValue(0); 

    Animated.timing( this.TranslateYAnimation, {toValue: 0,duration: 500 }).start();
    Animated.timing(this.opacityAnimated, {toValue: 1, duration: 1000 }).start();
  }


  Item1Clicked = () => {alert('111111');}
  Item2Clicked = () => {alert('222222');}
  Item3Clicked = () => {alert('333333');} 



  
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
       
        <Animated.View style={
          [
            { transform:[{ translateY: this.TranslateYAnimation}]},
            {opacity: this.opacityAnimated},
            styles.iTemView
          ]
          }>  
            <TouchableOpacity onPress={this.Item1Clicked} style={[styles.floatItemView]}>
              <Text style={styles.ItemText}>Item 1</Text>
              <Image source={require('./assets/image2.png')} style={styles.floatItemimg} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.Item2Clicked} style={[styles.floatItemView]}>
            <Text style={styles.ItemText}>Item 2</Text>
              <Image source={require('./assets/image3.png')} style={styles.floatItemimg} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.Item3Clicked} style={[styles.floatItemView]}>
            <Text style={styles.ItemText}>Item 3</Text>
              <Image source={require('./assets/image4.png')} style={styles.floatItemimg} />
            </TouchableOpacity>
        </Animated.View>

        <TouchableOpacity onPress={this.floatBtnClicked} style={[styles.floatView]}>
            <Image source={require('./assets/image1.png')} style={styles.floatimg} />
        </TouchableOpacity>

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
  
  iTemView:{
    position:'absolute',
    bottom:100,
    right:10,
    width:'50%',
  },

  floatItemView:{
    marginRight:13,
    flexDirection: 'row',
    alignItems:'center' ,
    alignSelf: 'flex-end',
    height:60,
  },

 floatItemimg:{
    width:50,
    height:50,
  },

  ItemText:{
    color:'#000000',
    borderStyle: 'solid',
    borderColor:'#666666',
    borderRadius: 5,
    borderWidth: 0.5,
    padding:5,
    marginRight:10,
  },
  



});





