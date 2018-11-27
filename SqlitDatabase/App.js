import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { SQLite } from 'expo';


export default class App extends React.Component {
  
  btnCreatDBClick = ()=>{

    const db = SQLite.openDatabase('Baby.db');
    console.log('1- Create Database');

    db.transaction(
      tx => {
            console.log("2- Create Table User");
            tx.executeSql("create table if not exists User (Id integer primary key not null, Name text);");

            console.log("3- Insert row in User");
            tx.executeSql("insert into User (Id , Name) values (3,'Raouf');");

            console.log("4- select User");
            tx.executeSql('select * from User', [] , (_, { rows }) => {
             console.log(JSON.stringify(rows));
            }
        );
    });

  }

  render() {
    return (
      <View style={styles.container}>
      <Button title='SQLITE' onPress={this.btnCreatDBClick}></Button>
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
