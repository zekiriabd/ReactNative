
import {StyleSheet} from 'react-native';
import { red } from 'ansi-colors';

export default StyleSheet.create({

    container: {
          flex: 1,
          backgroundColor:'#FFF',
          paddingTop:40,   
        },
       
        itemTitle:{
          fontSize:15,
          color:'#000',
          width:'100%',
          marginLeft:20,
        },

        itemText:{
          fontSize:12,
          color:'#666',
          width:'100%',
          marginLeft:20,
        },

        imgcircel: {
          width: 80, 
          height: 80, 
          borderRadius: 40,
      },

        rowFront: {
          backgroundColor: '#FFF',
          borderBottomColor: '#666',
          borderBottomWidth: 1,
          height: 100,
          flexDirection: 'row',
          alignItems:'center' ,
        },
        
        standaloneRowFront: {
          alignItems: 'center',
          backgroundColor: '#CCC',
          justifyContent: 'center',
          height: 50,
        },
        standaloneRowBack: {
          alignItems: 'center',
          backgroundColor: '#8BC645',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
        },
        backTextWhite: {
          color: '#FFF',
        },
       
        rowBack: {
          alignItems: 'center',
          backgroundColor: '#DDD',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 15,
        },
        backRightBtn: {
          alignItems: 'center',
          bottom: 0,
          justifyContent: 'center',
          position: 'absolute',
          top: 0,
          width: 75,
        },
        backRightBtnLeft: {
          backgroundColor: 'green',
          right: 75,
        },
        backRightBtnRight: {
          backgroundColor: 'red',
          right: 0,
        },
        controls: {
          alignItems: 'center',
          marginBottom: 30,
          marginTop: 30,
          marginBottom: 30,
        },
        switchContainer: {
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 5,
        },
        switch: {
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'black',
          paddingVertical: 10,
          width: 100,
        },
      


});
  