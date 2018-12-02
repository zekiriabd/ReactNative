import React from 'react';
import {Button, StyleSheet, Text, View } from 'react-native';

import {Permissions, Notifications} from 'expo';

export default class App extends React.Component {


askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.USER_FACING_NOTIFICATIONS);
};

btnSendNotClicked = async () => {
    await this.askPermissionsAsync();
    Notifications.presentLocalNotificationAsync({
      title: "عنوان الرسالة",
      body: "****** موضوع الرسالة *******",
   });
};
  

render() {
  return (
      <View style={styles.container}>
        <Button title="Send Notification" onPress={this.btnSendNotClicked} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
