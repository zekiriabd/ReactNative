import React,{ Component } from "react";
import { Button,View,TextInput} from "react-native";
import { Text,Switch} from "native-base";

import StyleSheet from '../Css/AuthMainPage_css';


class AuthEmail extends Component {
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
          <Text>Indiquez votre compte</Text>
          <TextInput placeholder='Adresse mail ou n° de mobile'/>
          <Text>Rester identifié</Text>
          <Switch value={false} />
          <Button title="Continue" onPress={() =>  navigate('authPass')}/>
          <Button title="Vous vous connectez pour la première fois ?" onPress={() =>  navigate('authsignup')}/>
      </View>
  )}
}


export default AuthEmail;