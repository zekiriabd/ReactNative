import React from 'react';
import {View,StyleSheet,WebView} from 'react-native';
import { Constants } from 'expo';


export default class App extends React.Component {
  render() {
    return (

        <View style={styles.container}>
        <WebView
        source={require('./html/index.html')}
        injectedJavaScript="Drawchart();"
        style={{ flex: 1 }}
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  }
});







