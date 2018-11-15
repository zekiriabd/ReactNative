import React, { Component } from 'react';

import {View,Button, Animated,Easing } from 'react-native';

import StyleSheet from './MyCssDir/MyCssFile';

export default class App extends Component {
  constructor () {
    super();

    this.rotateAnimated = new Animated.Value(0); 
    this.scaleAnimated = new Animated.Value(0);   
    this.TranslateYAnimation = new Animated.Value(0);
    
    this.TranslateXAnimation = new Animated.ValueXY({ x: 300, y: 20 });

    this.opacityAnimated = new Animated.Value(0);

  }

  btnAnimatedClicked = async () => { 
    //this.opacityAnimated.setValue(0);      
    Animated.timing( this.rotateAnimated,  {toValue: 1, duration: 2000, useNativeDriver: true }).start();
    Animated.timing( this.scaleAnimated,   {toValue: 1, duration: 1000 }).start();
    Animated.timing( this.TranslateYAnimation,    {toValue: 1,duration: 1000 }).start();
    //Animated.timing( this.TranslateYAnimation,   {toValue: 1,duration: 1000, easing: Easing.bounce}).start();
    //Animated.timing( this.TranslateYAnimation,   {toValue: 1,duration: 1000, easing:  Easing.back(2)}).start();
    //Animated.timing( this.TranslateYAnimation,   {toValue: 1,duration: 1000,easing: Easing.elastic(3)}).start();
    Animated.spring( this.TranslateXAnimation,   {toValue: {x: 300, y: 10}}).start();
    
    Animated.timing( this.opacityAnimated, {toValue: 1, duration: 5000 }).start();

  }

  render () {

    const marginLeft  = this.TranslateYAnimation.interpolate(
      { inputRange: [0, 1], outputRange: [0, 150] });    

    const _rotate = this.rotateAnimated.interpolate({inputRange: [0, 1], outputRange: ['0deg', '360deg']});

    return (
      <View style={StyleSheet.container}>
        <Button style={StyleSheet.button} title='Animated' onPress={this.btnAnimatedClicked} />

        <Animated.View style={[StyleSheet.rotateRectangle, {transform: [{rotate: _rotate}] } ]}/>
        <Animated.View style={[StyleSheet.scaleRectangle, {transform: [{scale: this.scaleAnimated}] } ]}/>
        <Animated.View style={[StyleSheet.TranslateYRectangle, {marginLeft} ]} />          
        <Animated.View style={[StyleSheet.TranslateXRectangle, this.TranslateXAnimation.getLayout()]}/>       
        
        <Animated.View style={[StyleSheet.opacityRectangle, {opacity: this.opacityAnimated}]} />

      </View>
    );
  }
}
