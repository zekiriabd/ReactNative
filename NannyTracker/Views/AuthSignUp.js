import React,{ Component } from "react";
import { Button,View,TextInput} from "react-native";
import { Text,Switch} from "native-base";

import StyleSheet from '../Css/AuthMainPage_css';


class AuthSignUp extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = { 
    title: 'Nouveau compt',
    headerStyle: StyleSheet.header,
    headerTitleStyle: StyleSheet.headerTitel
  };
  render(){
      const { navigate } = this.props.navigation;
      return(
        
      <View style={StyleSheet.container}>
          <Text>Nouveau compt</Text>          
      </View>
  )}
}


export default AuthSignUp;