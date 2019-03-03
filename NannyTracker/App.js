
import React from 'react';
import {ImageBackground,StyleSheet,Image,Text,SafeAreaView,ScrollView} from 'react-native';
import {createDrawerNavigator,DrawerItems} from 'react-navigation';

/* import screens ============================*/
import HomeScreen from './screens/HomeScreen'
import BabyList from './screens/babyList';
/*============================================*/


/* FlyoutHeader =============================*/
const FlyoutHeader = (props) => (
  <SafeAreaView style={{ flex:1 }}>
      <ImageBackground source={require('./assets/background.jpg')}  style={styles.bgimgcss}>
      <Image  source={require('./assets/zekiri.jpg')} style={styles.userimgcss}  />
      <Text style={styles.lbusercss}>zekiri abdelali</Text>
    </ImageBackground>
      <ScrollView style={styles.container}>
        <DrawerItems {...props}/>
      </ScrollView>
  </SafeAreaView>
)



/*============================================*/
const ShellMainPage = createDrawerNavigator(
  {
    "Mes Bébé" : BabyList,
    "Nouvau Bébé" : HomeScreen,
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
 


/* Css styles =============================*/
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#FFE3FA',
  },

  bgimgcss: {
    height: 150,
    justifyContent:'flex-end', 
    paddingLeft:10,
    paddingBottom:10
  },
    
  userimgcss : { 
    height:60 , 
    width:60 , 
    borderRadius:30,
  },
  
  lbusercss: { 
    color:'white', 
    fontSize:14 
  }

});
/*========================================*/
