import React,{ Component } from "react";
import { TouchableOpacity,View,Image,TextInput,Text } from "react-native";
import { DatePicker,Header, Left, Icon, Label} from "native-base";
import { ImagePicker, Permissions } from 'expo';


import StyleSheet from '../css/babyEdit_css';

class BabyEdit extends Component{
  constructor(props) {
    super(props);
    this.state = { 
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
    }
  }

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

  setDate(newDate) {

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
                  <View style={{height:110,alignItems:'center',justifyContent:'center'}}> 
                  <TouchableOpacity onPress={this.btnCameraClicked}>
                    <Image  source={{ uri : this.state.image }} style={StyleSheet.babyimgcss}  />
                    <Image  source={require('../assets/Photo.png')} style={StyleSheet.btncamcss}  />
                  </TouchableOpacity>
                  </View>
                  <View style={StyleSheet.formcss}> 
                  <TextInput style={StyleSheet.input} placeholder='Nom'/>
                  <TextInput style={StyleSheet.input} placeholder='Prénom'/>
                  <TextInput style={StyleSheet.input} placeholder='Date de naissance'/>
                  <TextInput style={StyleSheet.input} placeholder='XXXXXXXXXX'/>
                  <TextInput style={StyleSheet.input} placeholder='YYYYYYYYYYYYYYY'/>
                  <DatePicker 
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Select date"
                        textStyle={{ color: "#0000FF" }}
                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                        onDateChange={this.setDate}
                      />
                  </View>
           
           </View> 
         </View>
       )
   } 
}

//</View><TouchableOpacity onPress={this.btnCameraClicked}>

export default BabyEdit;

