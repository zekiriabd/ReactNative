
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
  
      item:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor:'#FFE3FA',
        borderRadius: 10,
        padding:10,      
        margin: 10,
      },
  
        imgcircel: {
          width: 100, 
          height: 100, 
          borderRadius: 50,
        },     
        header:{
          backgroundColor:'#EF6FB9',
        },
        headerTitel:{
          color:'white',
          fontSize:18,
          fontWeight: 'bold',
          margin: 10
        },
        menuIcon : {
          alignContent:'flex-start',
          color:'white'
        } 
    });