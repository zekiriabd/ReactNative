import React, { Component } from 'react';
import { Image,FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
      
      
        <FlatList
          data={[
            {key: '1', Name:'AAAAA' },
            {key: '2', Name:'BBBBB' },
            {key: '3', Name:'CCCCC' },
            {key: '4', Name:'DDDDD' },
            
          ]}

          renderItem={({item}) => 
          <View style={{
            flexDirection: 'row',
            alignItems:'center' ,
          }}>
          <Image source={require('./assets/image.png')} />
          <Text>{item.Name}</Text>
          </View>
        }
        />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  
})

