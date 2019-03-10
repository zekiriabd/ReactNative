
import React from 'react';
import {ImageBackground,Image,Text,SafeAreaView,ScrollView} from 'react-native';
import {createDrawerNavigator,DrawerItems} from 'react-navigation';
import StyleSheet from './css/App_css';

/* import Views ============================*/
import BabyEdit from './Views/babyEdit'
import BabyList from './Views/babyList';

/*============================================*/


/* FlyoutHeader =============================*/
const FlyoutHeader = (props) => (
  <SafeAreaView style={{ flex:1 }}>
      <ImageBackground source={require('./assets/background.jpg')}  style={StyleSheet.bgimgcss}>
      <Image  source={require('./assets/zekiri.jpg')} style={StyleSheet.userimgcss}  />
      <Text style={StyleSheet.lbusercss}>zekiri abdelali</Text>
    </ImageBackground>
      <ScrollView style={StyleSheet.container}>
        <DrawerItems {...props}/>
      </ScrollView>
  </SafeAreaView>
)



/*============================================*/
const ShellMainPage = createDrawerNavigator(
  {
    "Mes Bébé" : BabyList,
    "Nouvau Bébé" : BabyEdit,
  },
  {
    contentComponent : FlyoutHeader,
    contentOptions : { 
      activeTintColor : 'white',
    }
  }
)

/*============================================*/
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.User = JSON.parse('{"UserId":1,"ProfileImage":"abdelali.jpg","FirstName":"zekiri","LastName":"abdelali","EmailAddress":"zekiriabd@gmail.com" }');
  }

  render() { 
    return (
        <ShellMainPage/>
    );
  }
}