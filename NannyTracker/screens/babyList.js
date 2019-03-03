import React,{ Component } from "react";
import { View,StyleSheet,Image,FlatList } from "react-native";
import { Button,Header, Left, Icon, Label } from "native-base";
import { Constants} from 'expo';


class BabyList extends Component{
  
  static navigationOptions = {
    drawerIcon : ({tintColor}) => (
      <Image  source={require('../assets/Babies.png')} style={{ height:25 , width:25 }}  />
    )
  }
   render(){
       return(
         <View style={styles.page}>
            <Header style={styles.header}>
             <Left  style={{flex:1}}> 
               <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()} style={styles.menuIcon}/>
             </Left>
             <Label style={styles.headerTitel}>Nanny Tracker</Label>
           </Header>
           <View style={styles.container}>
       
       
           <FlatList
          data={[
            {key: '1', FirstName:'Zekiri', LastName:'Abdelali', Age:2,   Image:require('../assets/baby1.jpg') },
            {key: '2', FirstName:'Rahich', LastName:'Rouf',     Age:1,  Image:require('../assets/baby2.jpg') },
            {key: '3', FirstName:'Aloui',  LastName:'Ali',      Age:3,  Image:require('../assets/baby3.jpg') },
            {key: '4', FirstName:'mehdi',  LastName:'Walid',    Age:1,  Image:require('../assets/baby4.jpg') }
            
          ]}

          renderItem={({item}) => 
          <View style={styles.item}>
              <Image source={item.Image}  style={styles.imgcircel}/>
              <View style={{flex:1,flexDirection: 'column'}}>
              <Label>{item.FirstName} {item.LastName}</Label>
              <Label>{item.Age}</Label>
              <View style={{flex:1,flexDirection:'row',margin:10}}>
                <Button style={{backgroundColor:'red',width:25,height:25,margin:10 }}></Button>
                <Button style={{backgroundColor:'#43F916',width:25,height:25,margin:10 }}></Button>
                <Button style={{backgroundColor:'red',width:25,height:25,margin:10 }}></Button>
              </View>
              </View>
              
          </View>
        }
        />


           </View>
         </View>
       )
   } 
}

export default BabyList;


const styles = StyleSheet.create({
  
  page: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
    },

    container: {
      flex:1,
      alignContent:'center',
      justifyContent:'center'
    },

    item:{
      flex: 1,
      flexDirection: 'row',
      backgroundColor:'#FFE3FA',
      borderRadius: 10,
      padding:10,      
      margin: 10,
    },

      imgcircel: {
        width: 100, 
        height: 100, 
        borderRadius: 50,
      },     

      /* === header ==== */
      header:{
        backgroundColor:'#EF6FB9',
      },
      headerTitel:{
        color:'white',
        fontSize:18,
        fontWeight: 'bold',
        margin: 10
      },
      menuIcon : {
        alignContent:'flex-start',
        color:'white'
      }

  
  });