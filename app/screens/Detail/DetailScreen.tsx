import React, { Component } from 'react';
import { Text, View ,StyleSheet} from 'react-native';

class DetailScreen extends Component {
componentDidMount(){
    console.log('ComponentDidMount DetailScreen');
}
componentWillMount(){
    console.log('ComponentWillMount DetailScreen');
}
componentWillUnmount(){
    console.log('ComponentWillUnMount DetailScreen');
}
  render() {
    {console.log('DetailScreen Render');}
    return (
      <View style={styles.container}>
        <Text>This is the DetailScreen.</Text>
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
export default DetailScreen;