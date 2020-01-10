import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { NavigationTabScreenProps, NavigationTabProp } from 'react-navigation-tabs';
import strings from './strings';
import { Icon } from 'react-native-vector-icons/Icon';
import { NavigationSwitchScreenProps } from 'react-navigation';

class HomeScreen extends Component {
componentDidMount(){
    console.log('ComponentDidMount HomeScreen');
}
componentWillMount(){
    console.log('ComponentWillMount HomeScreen');
}
componentWillUnmount(){
    console.log('ComponentWillUnMount HomeScreen');
}
static navigationOptions = ({ navigation }: any) => ({
    headerTitle: strings.homeTitle,
    headerLeft: Platform.select({
      ios: null,
      android: (
        <Icon
          name="md-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  });
  render() {
    {console.log('HomeScreen Render');}
    return (
      <View style={styles.container}>
        <Text>This is the HomeScreen.</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    icon: {
        paddingLeft: 10
      }
  });
export default HomeScreen;