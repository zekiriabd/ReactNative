import React from 'react';
import {Image, ListView,  Text, TouchableOpacity, View } from 'react-native';

import SwipeListView from './components/SwipeListView';
import StyleSheet from './css/styles';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: [
        {key: '1', Name:'zekiri abdelali', Image:require('./assets/bebe1.jpg'), Description:'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz' },
        {key: '2', Name:'ali alwi' ,       Image:require('./assets/bebe2.jpg'), Description:'aaaaaaaaaaaaaaaaaaaaaaaa' },
        {key: '3', Name:'raouf rahich' ,   Image:require('./assets/bebe3.jpg'), Description:'rrrrrrrrrrrrrrrrrr' },
        {key: '4', Name:'mess berkan' ,    Image:require('./assets/bebe4.jpg'), Description:'mmmmmmmmmmmmmmmmmmmm' },
        {key: '5', Name:'Mohamed ness' ,   Image:require('./assets/bebe5.jpg'), Description:'sssssssssssssssssss' },        
      ],
    };

  }

  btnOptionClick(secId, rowId, rowMap) {
    
    alert('btn Option Click ' + secId );
    console.log(rowId);
    //console.log(rowMap);
  }

  btnDeleteClick(secId, rowId, rowMap) {
    
    alert('btn Delet Click ' + secId );
    console.log(rowId);
    //console.log(rowMap);
  }

  render() {
    return (

        <View style={StyleSheet.container}>
          <SwipeListView 
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow=
            {data => (
                <View style={StyleSheet.rowFront}>
                  <Image source={data.Image} style={StyleSheet.imgcircel}/>
                  <View>
                    <Text style={StyleSheet.itemTitle}>{data.Name} </Text>
                    <Text style={StyleSheet.itemText}>{data.Description}</Text>
                  </View>
                </View>
            )}

            renderHiddenRow=
            {(data, secId, rowId, rowMap) => (
              <View style={StyleSheet.rowBack}>

                <TouchableOpacity
                  style={[StyleSheet.backRightBtn, StyleSheet.backRightBtnLeft]}
                  onPress={()=> this.btnOptionClick(secId, rowId, rowMap)}>
                  <Text style={StyleSheet.backTextWhite}>Option</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[StyleSheet.backRightBtn, StyleSheet.backRightBtnRight]}
                  onPress={()=> this.btnDeleteClick(secId, rowId, rowMap)}>
                  <Text style={StyleSheet.backTextWhite}>Delete</Text>
                </TouchableOpacity>

              </View>
            )}
            rightOpenValue={-150}
          />
      </View>
    );
  }
}