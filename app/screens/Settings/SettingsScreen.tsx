import React, { Component } from 'react';
import { Text, View ,StyleSheet} from 'react-native';

class SettingsScreen extends Component {
componentDidMount(){
    console.log('ComponentDidMount SettingsScreen');
}
componentWillMount(){
    console.log('ComponentWillMount SettingsScreen');
}
componentWillUnmount(){
    console.log('ComponentWillUnMount SettingsScreen');
}
  render() {
    {console.log('SettingsScreen Render');}
    return (
      <View style={styles.container}>
        <Text>This is the SettingsScreen.</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });
export default SettingsScreen;