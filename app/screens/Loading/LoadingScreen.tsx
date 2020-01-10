import React, { Component } from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { NavigationScreenProp, NavigationSwitchScreenProps,NavigationEvents } from 'react-navigation';

class LoadingScreen extends Component<NavigationSwitchScreenProps> {
    constructor(props){
        super(props);
        setTimeout(() => {
            this.props.navigation.navigate("LoginScreen");
          }, 2000);
    }
componentDidMount(){
    console.log('ComponentDidMount LoadingScreen');
}
componentWillMount(){
    console.log('ComponentWillMount LoadingScreen');
}
componentWillUnmount(){
    console.log('ComponentWillUnMount LoadingScreen');
}
  render() {
    {console.log('LoadingScreen Render');}
    return (
      <View style={styles.container}>
        <Text>This is the LoadingScreen.</Text>
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
export default LoadingScreen;