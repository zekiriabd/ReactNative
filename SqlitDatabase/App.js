import React from 'react';
import {FlatList,Image, Text,TextInput,Button, StyleSheet, View } from 'react-native';
import { SQLite } from 'expo';


export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = { 
      Id:null,
      FirstName:"",
      LastName:"",  
      Users:[],
    };  

    console.log("----------- 1- Create/Open DataBase---------------");
    const db = SQLite.openDatabase('MyDb.db');

    console.log("----------- 2- Create/Open Table User---------------");
    db.transaction(      
      tx => {
              tx.executeSql("create table if not exists User (Id INTEGER PRIMARY KEY AUTOINCREMENT,FirstName text,LastName text);");
              tx.executeSql('select * from User', [] , (_, { rows }) => {
                this.setState({Users: rows._array});
                console.log(JSON.stringify(this.state.Users));
                });
            }
    );
  }

  btnSearchClick= ()=>{
    console.log("----------- 1- Open DataBase---------------");
    const db = SQLite.openDatabase('MyDb.db');
    
    console.log("----------- 5- Select by Id ---------------");
    db.transaction( 
      tx => { 
            tx.executeSql('select * from User where id='+ this.state.Id , [] , (_, { rows }) => { this.setState({Users: rows._array}); });
            } 
      );
  }


  btnDeleteClick= ()=>{
    console.log("----------- 1- Open DataBase---------------");
    const db = SQLite.openDatabase('MyDb.db');
    
    console.log("----------- 5- Delete by Id ---------------");
    db.transaction(      
      tx => {
            tx.executeSql('Delete from User where id='+ this.state.Id , [] , (_, { rows }) => {});
            tx.executeSql('select * from User', [] , (_, { rows }) => { this.setState({Users: rows._array}); });
            }
      );
  }


  btnAddClick = ()=>{
    console.log("----------- 4- Open DataBase---------------");
    const db = SQLite.openDatabase('MyDb.db');
    
    console.log("----------- 5- Inser New User and Select All ---------------");
    db.transaction(      
      tx => {
           // console.log("4- Insert row in User");
            const value = "'" + this.state.FirstName + "','"+ this.state.LastName  + "'" ;
            tx.executeSql("insert into User (FirstName,LastName) values ("+ value +")");

            //console.log("5- select User");
            tx.executeSql('select * from User', [] , (_, { rows }) => {
              this.setState({Users: rows._array});
              });

            }
      );
  }




  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}  value={this.state.Id ? String(this.state.Id) : null}   onChangeText={id =>         this.setState({ Id : id })} />
        <TextInput style={styles.input}  value={this.state.FirstName}                           onChangeText={firstName =>  this.setState({ FirstName : firstName })} />
        <TextInput style={styles.input}  value={this.state.LastName}                            onChangeText={lastName =>   this.setState({ LastName : lastName })} />
        
        <Button title='Add' onPress={this.btnAddClick}></Button>
        <Button title='Search' onPress={this.btnSearchClick}></Button>
        <Button title='Delete' onPress={this.btnDeleteClick}></Button>

         <FlatList style={styles.listv}
              data={this.state.Users} 
              renderItem={ ({ item }) => 
              <View key={item.Id} style={styles.row}>
                 <Image source={require('./assets/image.png')} />
                 <Text>{item.Id} </Text>
                 <Text>{item.FirstName} </Text>
                 <Text>{item.LastName}  </Text>
              </View>
            }
            keyExtractor={ item => item.Id}
        ></FlatList>

      </View>
      )
  }  
}


const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    flex: 1,   
    alignItems: 'center',
    justifyContent: 'center',
  },

  listv:{
    width:'100%',
  },

  row:{
    flexDirection: 'row',
    alignItems:'center' ,
    borderColor: 'gray',
    borderTopWidth: 1,
  },

  input:{
    padding: 5,
    height: 40,
    width:200,
    borderColor: 'gray',
    borderWidth: 1,
  },

  text:{
    padding: 5,
    height: 40,
    width:200,
    borderColor: '#333',
    borderWidth: 1,
    backgroundColor:'#666',
    color:'#fff'
  }
});