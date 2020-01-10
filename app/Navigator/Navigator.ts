import {
  createStackNavigator,
} from "react-navigation-stack";
import {
  createDrawerNavigator,
} from "react-navigation-drawer";
import {
    createSwitchNavigator
  } from 'react-navigation';
import DetailScreen from "../screens/Detail/DetailScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import LoadingScreen from "../screens/Loading/LoadingScreen";
import OptionsScreen from "../screens/Options/OptionsScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import { Platform } from "react-native";
import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from "react-navigation-tabs";
import BurgerMenu from "../component/BurgerMenu/BurgerMenu";
import LoginScreen from '../screens/Login/LoginScreen';
import PasswordResetScreen from '../screens/PasswordReset/PasswordResetScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
const SettingsStack = createStackNavigator({ SettingsScreen: SettingsScreen });

const HomeStack = createStackNavigator(
  {
    DetailScreen: DetailScreen,
    HomeScreen: HomeScreen,
    OptionsScreen: OptionsScreen
  },
  {
    initialRouteName: "HomeScreen"
  }
);
const MainNavigator = Platform.select({
  ios: createBottomTabNavigator({ HomeStack:HomeStack, SettingsStack:SettingsStack }),
  android: createDrawerNavigator(
    { HomeStack, SettingsStack },
    { contentComponent: BurgerMenu }
  )
});

const LoginStack = createStackNavigator({ LoginScreen, PasswordResetScreen });

const AuthTabs = createBottomTabNavigator({ LoginStack, RegisterScreen });

const RootSwitch = createSwitchNavigator({ LoadingScreen, AuthTabs, MainNavigator });
export default RootSwitch;
