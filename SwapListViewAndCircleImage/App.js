import React, { Component } from 'react';
import { Image, FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={[
            {key: '1', Name:'A'},
            {key: '2', Name:'B'},
            {key: '3', Name:'C'},
            {key: '4', Name:'E'},
            {key: '5', Name:'F'},
            {key: '6', Name:'G'},
            {key: '7', Name:'H'},
            {key: '8', Name:'I'},
          ]}
          renderItem={({item}) => 
          //<Text> {item.key} | {item.Name} </Text>
          <View style={{
            flexDirection: 'row',
            alignItems:'center' ,
            
          }}>
          <Image source={require('./assets/image.png')} />
          <Text style={styles.ItemText}>Item 1</Text>
            
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

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
