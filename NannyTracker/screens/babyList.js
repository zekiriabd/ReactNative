import React,{ Component } from "react";
import { View,Image,FlatList } from "react-native";
import { Button,Header, Left, Icon, Label } from "native-base";
import StyleSheet from '../css/babyList_css';


class BabyList extends Component{
  
  static navigationOptions = {
    drawerIcon : ({tintColor}) => (
      <Image  source={require('../assets/Babies.png')} style={{ height:25 , width:25 }}  />
    )
  }
   render(){
       return(
         <View style={StyleSheet.page}>
            <Header style={StyleSheet.header}>
             <Left  style={{flex:1}}> 
               <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()} style={StyleSheet.menuIcon}/>
             </Left>
             <Label style={StyleSheet.headerTitel}>Nanny Tracker</Label>
           </Header>

           <View style={StyleSheet.container}>
           <FlatList
          
          data={[
            {key: '1', FirstName:'Zekiri', LastName:'Abdelali', Age:2,   Image:require('../assets/baby1.jpg') },
            {key: '2', FirstName:'Rahich', LastName:'Rouf',     Age:1,  Image:require('../assets/baby2.jpg') },
            {key: '3', FirstName:'Aloui',  LastName:'Ali',      Age:3,  Image:require('../assets/baby3.jpg') },
            {key: '4', FirstName:'mehdi',  LastName:'Walid',    Age:1,  Image:require('../assets/baby4.jpg') }
            
          ]}

          renderItem={({item}) => 
          <View style={StyleSheet.item}>
              <Image source={item.Image}  style={StyleSheet.imgcircel}/>
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