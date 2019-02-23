import React,{ Component } from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import { Header, Left, Icon } from "native-base";
import { Constants} from 'expo';

class SettingsScreen extends Component{
  
  static navigationOptions = {
    drawerIcon : ({tintColor}) => (
      <Image  source={require('../assets/Baby.png')} style={{ height:25 , width:25 }}  />
    )
  }
   render(){
       return(
         <View style={styles.container}>
            <Header>
             <Left  style={{flex:1}}> 
               <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()} style={{alignContent:'flex-start'}}/>
             </Left>
           </Header>
           <View style={{flex:1,alignContent:'center',justifyContent:'center'}}>
                  <Text>this Page2 Home</Text>
           </View>
         </View>
       )
   } 
}

export default SettingsScreen;
const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      backgroundColor: 'green',
      paddingTop: Constants.statusBarHeight,
    },
  
  });