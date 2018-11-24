import React, { Component } from 'react';
import { Image,SectionList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (

      

    
      <View style={styles.container}>
      
      
      <SectionList
       sections={[
        {title: 'Group 1', data:[ {key: 'A-1', Name:'AAAAA', ImageUrl:require('./assets/image1.png') },{key: 'A-2', Name:'BBBBB',ImageUrl:require('./assets/image2.png') }, {key: 'A-3', Name:'CCCCC', ImageUrl:require('./assets/image3.png') }] },
        {title: 'Group 2', data:[ {key: 'B-1', Name:'AAAAA', ImageUrl:require('./assets/image1.png') },{key: 'B-2', Name:'BBBBB',ImageUrl:require('./assets/image2.png') }, {key: 'B-3', Name:'CCCCC', ImageUrl:require('./assets/image3.png') }] },
        {title: 'Group 3', data:[ {key: 'C-1', Name:'AAAAA', ImageUrl:require('./assets/image1.png') },{key: 'C-2', Name:'BBBBB',ImageUrl:require('./assets/image2.png') }, {key: 'C-3', Name:'CCCCC', ImageUrl:require('./assets/image3.png') }] },
      ]}

          renderItem={({item}) => 
          <View style={{
            flexDirection: 'row',
            alignItems:'center' ,
          }}>
          <Image source={item.ImageUrl} />
          <Text style={styles.item}>{item.Name}</Text>
          </View>
        }
        
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}

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
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'red',
  },
  item: {
    padding: 10,
    fontSize: 14,
    height: 44,
  },
})



