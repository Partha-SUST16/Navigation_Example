import React from 'react';
import {
  Animated,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {
  NativeViewGestureHandler,
  RectButton,
} from 'react-native-gesture-handler';
import {
  SupportedThemes,
  ThemeColors,
  ThemeContext,
  Themed,
  createAppContainer,
  SafeAreaView,
} from 'react-navigation';
import SimpleStack from './src/SimpleStack';

const Navigation = createAppContainer(SimpleStack);
export default function App() {
  return (
    <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
