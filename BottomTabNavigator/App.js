import React from 'react';
import { Image,View,Text } from 'react-native';
import StyleSheet from './AppThemes/css/styles.js';


import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

class HomePage extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: () => (<Image source={require('./AppThemes/img/Home.png')} style={{width:'100%',height:'100%'}}/>),
  };
  render() {
    
    return (
      <View style={StyleSheet.container}>
            <Text>Home Page</Text>
      </View>
    );

    }
}

class NewPAge extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'New',
    tabBarIcon: () => (<Image source={require('./AppThemes/img/Add.png')} style={{width:'100%',height:'100%'}}/>),
    barStyle: { backgroundColor: '#FA58D0' },
  };
  render() {
    return (
      <View style={StyleSheet.container}>
            <Text>New Page</Text>
      </View>
    );
  }
}

class ReportPage extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Photo',
    tabBarIcon: () => (<Image source={require('./AppThemes/img/Report.png')} style={{width:'100%',height:'100%'}}/>),
    barStyle: { backgroundColor: '#5858FA' },
  };
  render() {
    return (
      <View style={StyleSheet.container}>
            <Text>Report Page</Text>
      </View>
    );
  }
}

class SearchPage extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Search',
    tabBarIcon: () => (<Image source={require('./AppThemes/img/Search.png')} style={{width:'100%',height:'100%'}}/>),
    barStyle: { backgroundColor: '#04B404' },
    
  };
  render() {
    return (
      <View style={StyleSheet.container}>
            <Text>Search Page</Text>
      </View>
    );
  }
}

const MaterialBottomTabNavigator = createMaterialBottomTabNavigator(
  {
    HomePage: { screen: HomePage },
    NewPAge: { screen: NewPAge },
    ReportPage: { screen: ReportPage },
    SearchPage: { screen: SearchPage },    
  },
  {
  initialRouteName: 'HomePage',
  activeColor: '#FFFFFF',  
  barStyle: { backgroundColor: '#0489B1' },
  }
);


export default class App extends React.Component {
  render() { return <MaterialBottomTabNavigator />; }
}