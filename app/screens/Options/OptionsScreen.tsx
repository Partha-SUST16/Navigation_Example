import React, { Component } from 'react';
import { Text, View ,StyleSheet} from 'react-native';

class OptionsScreen extends Component {
componentDidMount(){
    console.log('ComponentDidMount OptionsScreen');
}
componentWillMount(){
    console.log('ComponentWillMount OptionsScreen');
}
componentWillUnmount(){
    console.log('ComponentWillUnMount OptionsScreen');
}
  render() {
    {console.log('OptionsScreen Render');}
    return (
      <View style={styles.container}>
        <Text>This is the OptionsScreen.</Text>
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
export default OptionsScreen;