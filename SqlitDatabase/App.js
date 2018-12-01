import React from 'react';
import {List,FlatList,ListItem, Text,TextInput,Button, StyleSheet, View } from 'react-native';
import { SQLite } from 'expo';


export default class App extends React.Component {
  
  constructor(props){
    super(props);

    this.state = { 
      Id:0,
      FirstName:"",
      LastName:"",  
      Users:[],
    };  

    console.log("----------- 1- Create/Open DataBase---------------");
    const db = SQLite.openDatabase('MyDatabase.db');

    console.log("----------- 2- Create/Open Table User---------------");
    db.transaction(      
      tx => {
              tx.executeSql("create table if not exists User (id integer primary key not null,FirstName text,LastName text);");
              tx.executeSql('select * from User', [] , (_, { rows }) => {
                this.setState({Users: rows._array});
                console.log(JSON.stringify(this.state.Users));
                });
            }
    );
  }

  btnAddClick = ()=>{
    console.log("----------- 4- Open DataBase---------------");
    const db = SQLite.openDatabase('MyDatabase.db');
    
    console.log("----------- 5- Inser New User and Select All ---------------");
    db.transaction(      
      tx => {
            //console.log("FirstName : ", this.state.FirstName);
            //console.log("LastName  : ", this.state.LastName);

           // console.log("4- Insert row in User");
            tx.executeSql("insert into User (Id,FirstName,LastName) values (1,'zekiri','abdelali')");

            //console.log("5- select User");
            tx.executeSql('select * from User', [] , (_, { rows }) => {
              this.setState({courses: rows._array});
             //console.log(JSON.stringify(rows));
                }
             );
            }
      );
  }

  render() {
    return (
      <View style={styles.container}>
      
        <Text value={this.state.Id} />
        <TextInput style={styles.input}  value={this.state.FirstName}   onChangeText={firstName =>  this.setState({ FirstName : firstName })} />
        <TextInput style={styles.input}  value={this.state.LastName}    onChangeText={lastName =>   this.setState({ LastName : lastName })} />
        <Button title='Add' onPress={this.btnAddClick}></Button>
        <List>
        <FlatList 
              data={this.state.Users} 
              renderItem={ ({item}) => (
                 <ListItem roundAvatar 
                    title={item.FirstName} 
                    subtitle = {item.FlatList}
                    avatar={require('./assets/image.png')}
                  />
                )} 
                keyExtractor={() => item.Id}
        />

      </List>
      </View>
      )
  }  
}
  
const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    padding: 5,
    height: 40,
    width:200,
    borderColor: 'gray',
    borderWidth: 1,
  }
});
