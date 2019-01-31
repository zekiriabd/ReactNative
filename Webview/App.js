import React from 'react';
import {View,StyleSheet,WebView} from 'react-native';
import { Constants } from 'expo';


export default class App extends React.Component {
  render() {
    return (

      /* 
       <View style={styles.container}>
       <WebView
        source={{uri: "https://www.facebook.com/softwe3/"}}
        style={{ flex: 1 }}
        /> 
        </View>

        <View style={styles.container}>
        <WebView
        source={require('./html/zekiri.html')}
        style={{ flex: 1 }}
        />
        </View>
        */
        
        <View style={styles.container}>

        <WebView
        originWhitelist={['*']}
        source={{ html: '<html><body><p>111111111111111111111111111111.</p></body></html>' }}
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







