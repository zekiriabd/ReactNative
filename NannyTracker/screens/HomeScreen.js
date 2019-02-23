import React,{ Component } from "react";
import { View,Text,StyleSheet } from "react-native";
import { Header, Left, Icon } from "native-base";
import { Constants} from 'expo';

class HomeScreen extends Component{
  static navigationOptions = {
    drawerTcon : ({tintColor}) => (
      <Icon name="home" style={{ fontSize:24, color:tintColor}} />
    )
  }
   render(){
       return(
         <View style={styles.container}>
            <Header>
             <Left>
               <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}/>
             </Left>
           </Header>
           <View style={{flex:1,alignContent:'center',justifyContent:'center'}}>
                  <Text>this Page2 Home</Text>
           </View>
         </View>
       )
   } 
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
    },
});