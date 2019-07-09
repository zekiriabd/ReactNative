

import {StyleSheet} from 'react-native';



export default StyleSheet.create({
  
    page: {
      flex: 1,
      paddingTop: 25,
    },

    container: {
      flex:1,
      alignContent:'center',
      justifyContent:'center'
    },
    babyimgcss : { 
      height:100 , 
      width:100 , 
      borderRadius:50,
      marginTop:10,
    },
    btncamcss: { 
      height:30 , 
      width:30 , 
      marginLeft:70,
      marginTop:-20,
      
    },    
    header:{
        backgroundColor:'#EF6FB9',
    },

    headerTitel:{
        color:'white',
        fontSize:18,
        fontWeight: 'bold',
        margin: 10,
    },
    menuIcon : {
        alignContent:'flex-start',
        color:'white'
    },
    input:{
      padding: 5,
      borderColor: 'white',
      borderWidth: 1,
      borderRadius:5,
      backgroundColor:'white',
      marginTop:20
    },
    formcss:{
      flex:1,
      backgroundColor:'#FFE3FA',
      margin:15, 
      borderRadius: 10,
      padding:20
    },    
    btnSavecss:{
      backgroundColor:'#EF6FB9',
      borderRadius: 10,
      height:35,
      color:'white',
      fontWeight:'bold',
      textAlign: 'center',
      textAlignVertical: 'center',
    }
  });