import React from 'react';
import {Button,StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';

class Page1ContainerComponent extends React.Component {
  static navigationOptions = { title: 'Page1'};
  render() {
    const { navigate } = this.props.navigation;
    return ( <Button title="Go to Page2" onPress={() => navigate('Page2Component')}/>);
  }
};

class Page2ContainerComponent extends React.Component {
  static navigationOptions = { title: 'Page2'};
  render() {
    const { navigate } = this.props.navigation;
    return (<Button title="Go to Page1" onPress={() => navigate('Page1Component')}/>
    );
  }
};


const NavComponent  = createStackNavigator({
  Page1Component: { screen: Page1ContainerComponent },
  Page2Component: { screen: Page2ContainerComponent },
});

export default class App extends React.Component {
  render() {
    return <NavComponent/>
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
