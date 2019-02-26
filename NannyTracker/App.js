
import React from 'react';
import {ImageBackground,StyleSheet,Image,Text,SafeAreaView,ScrollView} from 'react-native';
import {createDrawerNavigator,DrawerItems} from 'react-navigation';
import { Constants} from 'expo';

/* import screens ============================*/
import HomeScreen from './screens/HomeScreen'
import BabyList from './screens/babyList';
/*============================================*/


/* FlyoutHeader =============================*/
const FlyoutHeader = (props) => (
  <SafeAreaView style={{ flex:1 }}>
      
      <ImageBackground source={require('./assets/background.jpg')}  style={styles.bgimgcss}>
      <Image  source={this.state.ProfileImagePath} style={styles.userimgcss}  />
      <Text style={styles.lbusercss}>{this.state.User.FirstName + ' ' + this.User.LastName}</Text>

    </ImageBackground>
      <ScrollView>
        <DrawerItems {...props}/>
      </ScrollView>
  </SafeAreaView>
)
/*<ImageBackground source={require('./assets/background.jpg')}  style={styles.bgimgcss}>
<Image  source={require('./assets/zekiri.jpg')} style={styles.userimgcss}  />
<Text style={styles.lbusercss}>Zekiri Abdelali</Text>*/


/*============================================*/
const ShellMainPage = createDrawerNavigator(
  {
    "Mes Bébe" : BabyList,
    "Home" : HomeScreen,
  },
  {
    contentComponent : FlyoutHeader,
    contentOptions : { 
      activeTintColor : 'orange',
    }
  }
)

/*============================================*/
export default class App extends React.Component {
  state = { 
    User : 
      {
        UserId:1,
        ProfileImage:'abdelali.jpg',
        FirstName:'zekiri',
        LastName:'abdelali',
        EmailAddress:'zekiriabd@gmail.com'
      },
      ProfileImagePath:require('./assets/zekiri.jpg')
    }
  render() { 
    //let strJson = "{'UserId':1,'ProfileImage':'abdelali.jpg','FirstName':'zekiri','LastName':'abdelali','EmailAddress':'zekiriabd@gmail.com'}";
    //this.setState({User:JSON.parse(strJson)})
    
    return (
      <ShellMainPage/>
    );
  }
}



/* Css styles =============================*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
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
