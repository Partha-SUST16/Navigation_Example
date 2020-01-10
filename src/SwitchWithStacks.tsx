import React from 'react';
import { ActivityIndicator, AsyncStorage, StyleSheet, View, Platform } from 'react-native';
import { Themed, createSwitchNavigator } from 'react-navigation';
import {
    createStackNavigator,
    NavigationStackScreenProps,
} from 'react-navigation-stack';
import { Button } from './commonComponents/ButtonWithMargin';

class SignInScreen extends React.Component<NavigationStackScreenProps>{
    static navigationOptions = {
        title: 'Please Sign in'
    }
    componentWillUnmount() {
        console.log('SignInScreen component will unmount');
    }
    componentDidMount() {
        console.log("SignInScreen did mount ");
    }
    render() {
        return (
          <View style={styles.container}>
            <Button title="Sign in!" onPress={this.signInAsync} />
            <Button
              title="Go back to other examples"
              onPress={() => this.props.navigation.goBack(null)}
            />
            <Themed.StatusBar />
          </View>
        );
      }
    
      signInAsync = async () => {
          console.log('SignIn')
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('Home');
      };
}
class HomeScreen extends React.Component<NavigationStackScreenProps> {
    static navigationOptions = {
        title: 'Welcome to the app!',
    };
    componentWillUnmount() {
        console.log('HomeScreen component will unmount');
    }
    componentDidMount() {
        console.log("HomeScreen did mount ");
    }
    render() {
        return (
            <View style={styles.container}>
                <Button title="Show me more of the app" onPress={this.showMoreApp} />
                <Button title="sign me out" onPress={this.signOutAsync} />
                <Themed.StatusBar />
            </View>
        );
    }

    showMoreApp = () => {
        this.props.navigation.navigate('Other');
    };

    signOutAsync = async () => {
        if (Platform.OS === 'ios') {
            await AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove);
        } else {
            await AsyncStorage.clear();
        }

        this.props.navigation.navigate('Auth');
    };
}
class OtherScreen extends React.Component<NavigationStackScreenProps> {
    static navigationOptions = {
        title: 'More of features here',
    };
    componentWillUnmount() {
        console.log('OtherScreen component will unmount');
    }
    componentDidMount() {
        console.log("otherScreen did mount ");
    }
    render() {
        return (
            <View style={styles.container}>
                <Button title="sign me out" onPress={this.signOutAsync} />
                <Themed.StatusBar />
            </View>
        );
    }

    signOutAsync = async () => {
        if (Platform.OS === 'ios') {
            await AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove);
        } else {
            await AsyncStorage.clear();
        }

        this.props.navigation.navigate('Auth');
    };
}
class LoadingScreen extends React.Component<any, any> {
    componentDidMount() {
        console.log('LoadingScreen is mounted');
        this.bootstrapAsync();
    }
    componentWillUnmount() {
        console.log('LoadingScreen component will unmount');
    }

    bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        const initialRouteName = userToken ? 'App' : 'Auth';
        this.props.navigation.navigate(initialRouteName);
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <Themed.StatusBar />
            </View>
        );
    }
}

const AppStack = createStackNavigator(
    { Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator(
    { SignIn: SignInScreen });

export default createSwitchNavigator({
    App: AppStack,
    Auth: AuthStack,
    Loading: LoadingScreen,
},{
    initialRouteName:'Loading',
});

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});