import React,{ Component } from "react";
import { Button,View,Image,TextInput,TouchableOpacity} from "react-native";
import { Text,Switch} from "native-base";

import StyleSheet from '../Css/AuthMainPage_css';


class AuthInitialize extends Component {
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
        <Text>Mot de passe</Text>
        <Text>Indiquez votre compte</Text>
        <Text>Cliquez sur les photos dans l'ordre indiqué:</Text>
        <Button title="Continue" onPress={() =>  navigate('authPass')}/>
      </View>
    )}
}


export default AuthInitialize;