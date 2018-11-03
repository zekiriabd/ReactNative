import React from 'react';
import { Image,View,Text } from 'react-native';
import StyleSheet from './AppThemes/css/styles.js';


import { createMaterialTopTabNavigator } from 'react-navigation';

class HomePage extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: () => (<Image source={require('./AppThemes/img/Home.png')} style={{width:'100%',height:'100%'}}/>),
    tabBarOptions:{
      indicatorStyle:{height:0},
      showIcon:true,
      style:{
        backgroundColor:'#0489B1' ,
        height:60,
      }
    },
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
    tabBarOptions:{
      indicatorStyle:{height:0},
      showIcon:true,
      style:{
        backgroundColor:'#FA58D0',
        height:60,
      }
    },
  
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
    tabBarLabel: 'Report',
    tabBarIcon: () => (<Image source={require('./AppThemes/img/Report.png')} style={{width:'100%',height:'100%'}}/>),
    tabBarOptions:{
      indicatorStyle:{height:0},
      showIcon:true,
      style:{
        backgroundColor:'#5858FA' ,
        height:60,
      }
    },
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
    tabBarOptions:{
      indicatorStyle:{height:0},
      showIcon:true,
      style:{
        backgroundColor:'#04B404',
        height:60,
      }
    },
    
  };
  render() {
    return (
      <View style={StyleSheet.container}>
            <Text>Search Page</Text>
      </View>
    );
  }
}

const MaterialTopTabNavigator = createMaterialTopTabNavigator(
  {
    HomePage: { screen: HomePage },
    NewPAge: { screen: NewPAge },
    ReportPage: { screen: ReportPage },
    SearchPage: { screen: SearchPage },    
  },
  {
  
  initialRouteName: 'HomePage',
  height:'30',
  tabBarPosition:'bottom',
  }
);


export default class App extends React.Component {
  render() { return <MaterialTopTabNavigator />; }
}