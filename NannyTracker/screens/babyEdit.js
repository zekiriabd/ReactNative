import React,{ Component } from "react";
import { TouchableOpacity,View,Image } from "react-native";
import { Header, Left, Icon, Label } from "native-base";
import { ImagePicker, Permissions } from 'expo';


import StyleSheet from '../css/babyEdit_css';

class BabyEdit extends Component{

  state = { image: null }

  static navigationOptions = {
    drawerIcon : ({tintColor}) => (
      <Image  source={require('../assets/Baby.png')} style={{ height:25 , width:25 }}  />
    )
  }

  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  };

  btnGalleryClicked = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  btnCameraClicked = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchCameraAsync(
      {
        allowsEditing: true,
        aspect: [4, 3],}
      );
    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };



   render(){
       let { image } = this.state;
       return(
         <View style={StyleSheet.page}>
            <Header style={StyleSheet.header}>
             <Left  style={{flex:1}}> 
               <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()} style={StyleSheet.menuIcon}/>
             </Left>
             <Label style={StyleSheet.headerTitel}>Nanny Tracker</Label>
           </Header>

           <View style={StyleSheet.container}>
                  <View style={{flex:1}}> 
                  
                  <TouchableOpacity onPress={this.btnGalleryClicked}>
                  
                    <Image  source={{ uri : image }} style={StyleSheet.babyimgcss}  />
                    <Image  source={require('../assets/Photo.png')} style={StyleSheet.btncamcss}  />
                  </TouchableOpacity>
                  </View>
                  <View style={{flex:4,backgroundColor:'#FFE3FA',margin:15, borderRadius: 10,}}> 
                      
                  </View>
           
           </View>
         </View>
       )
   } 
}

//</View><TouchableOpacity onPress={this.btnCameraClicked}>

export default BabyEdit;

