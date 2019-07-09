import React,{ Component } from "react";
import { Button,View,Image,TextInput,TouchableOpacity} from "react-native";
import { Text,Switch} from "native-base";

import StyleSheet from '../Css/AuthMainPage_css';


class AuthPass extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = { 
    title: 'Identifier-vous',
    headerStyle: StyleSheet.header,
    headerTitleStyle: StyleSheet.headerTitel
  };
    render(){
      const { navigate } = this.props.navigation;
      return(        
      <View style={StyleSheet.container}>
      
        <Image source={require('../assets/User.png')} style={StyleSheet.userimgcss} />
        <Text>06 09 69 00 05</Text>
        <Text>Saisissez votre mot de passe</Text>
        <TextInput placeholder='Mot de passe'/>
        
        <Button title="S'identifier" onPress={() =>  navigate('AuthPass')}/>

        <TouchableOpacity onPress={() =>  navigate('authInitialize')} >
          <Text>Mot de passe oublié? </Text>
          <Image source={require('../assets/Next.png')} style={StyleSheet.nextimgcss} />
        </TouchableOpacity>
        
      </View>
    )}
}


export default AuthPass;