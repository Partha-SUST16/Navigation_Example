import React, { Component } from 'react';
import { Text, View ,StyleSheet} from 'react-native';

class LoginScreen extends Component {
componentDidMount(){
    console.log('ComponentDidMount LoginScreen');
}
componentWillMount(){
    console.log('ComponentWillMount LoginScreen');
}
componentWillUnmount(){
    console.log('ComponentWillUnMount LoginScreen');
}
  render() {
    {console.log('LoginScreen Render');}
    return (
      <View style={styles.container}>
        <Text>This is the LoginScreen.</Text>
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
export default LoginScreen;