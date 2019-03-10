import React,{ Component } from "react";
import { Text,Button,TouchableOpacity,View,Image,TextInput } from "react-native";
import { Root,DatePicker,Header, Left, Icon, Label,ActionSheet} from "native-base";
import { ImagePicker, Permissions } from 'expo';


import StyleSheet from '../css/babyEdit_css';

class BabyEdit extends Component{
  constructor(props) {
    super(props);
    this.state = { 
    image: "",
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

  ActionSheetshow = async () => {
    ActionSheet.show({ 
      options: ["Take Photo", "Choose from Library", "Cancel"], cancelButtonIndex: 2, title: "Select Avatar"},
      buttonIndex => {
                switch (buttonIndex) {
                  case 0:  this.btnCameraClicked(); break;
                  case 1:  this.btnGalleryClicked(); break;
                }
      }
    )
  }

  setDate(newDate) {

  }



   render(){
       return(
        <Root>
         <View style={StyleSheet.page}>
            <Header style={StyleSheet.header}>
             <Left  style={{flex:1}}> 
               <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()} style={StyleSheet.menuIcon}/>
             </Left>
             <Left  style={{flex:2}}> 
                <Label style={StyleSheet.headerTitel}>Nanny Tracker</Label>
             </Left>
           </Header>

           <View style={StyleSheet.container}>
              <View style={{height:110,alignItems:'center',justifyContent:'center'}}> 

              <TouchableOpacity onPress={this.ActionSheetshow} >
                    <Image  source={(this.state.image==="") ?  require('../assets/EmptyPhoto.png'): {uri : this.state.image } } style={StyleSheet.babyimgcss}  />
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
                  
                  <TouchableOpacity onPress={()=> alert('Save')}><Text style = {StyleSheet.btnSavecss}>Save</Text></TouchableOpacity>

                  </View>           
           </View> 
         </View>
         </Root>
       )
   } 
}

export default BabyEdit;

