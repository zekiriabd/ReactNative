import React from 'react';

import {ImageBackground,StyleSheet,Image,Text,SafeAreaView,ScrollView} from 'react-native';
import {createDrawerNavigator,DrawerItems} from 'react-navigation';
import { Constants} from 'expo';

import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen';



export default class App extends React.Component {
  render() {
    return (
            <AppDrawerNavigator/>
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex:1 }}>

    <ImageBackground source={require('./assets/background.jpg')} 
                     style={{ height: 150,justifyContent:'flex-end', paddingLeft:10,paddingBottom:10 }}>
        <Image  source={require('./assets/zekiri.jpg')} style={{ height:60 , width:60 , borderRadius:30,
          }}  />

        <Text style={{ color:'white', fontSize:14 }}>zekiri abdelali</Text>
    </ImageBackground>
      <ScrollView>
        <DrawerItems {...props}/>
      </ScrollView>
  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator(
  {
    "Mes Bébe" : SettingsScreen,
    "Home" : HomeScreen,
  },
  {
    contentComponent : CustomDrawerComponent,
    contentOptions : { 
      activeTintColor : 'orange'

    }
  }
)


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center',
    paddingTop: Constants.statusBarHeight,
  },

});
