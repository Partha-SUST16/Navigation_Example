import React, { Component } from 'react';
import { Text, View ,StyleSheet} from 'react-native';

class PasswordResetScreen extends Component {
componentDidMount(){
    console.log('ComponentDidMount PasswordResetScreen');
}
componentWillMount(){
    console.log('ComponentWillMount PasswordResetScreen');
}
componentWillUnmount(){
    console.log('ComponentWillUnMount PasswordResetScreen');
}
  render() {
    {console.log('PasswordResetScreen Render');}
    return (
      <View style={styles.container}>
        <Text>This is the PasswordResetScreen.</Text>
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
export default PasswordResetScreen;