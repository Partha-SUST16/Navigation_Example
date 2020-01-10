import React, { Component } from 'react';
import { Text, View ,StyleSheet} from 'react-native';

class RegisterScreen extends Component {
componentDidMount(){
    console.log('ComponentDidMount RegisterScreen');
}
componentWillMount(){
    console.log('ComponentWillMount RegisterScreen');
}
componentWillUnmount(){
    console.log('ComponentWillUnMount RegisterScreen');
}
  render() {
    {console.log('RegisterScreen Render');}
    return (
      <View style={styles.container}>
        <Text>This is the RegisterScreen.</Text>
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
export default RegisterScreen;