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
import Navigator  from "./app/Navigator/Navigator";
import SwitchWithStacks from './src/SwitchWithStacks';
import SimpleTabsContainer from './src/SimpleTabs';
import TabsInDrawer from './src/TabsInDrawer';
import { createStackNavigator } from 'react-navigation-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const NavigationExampleInfo:any={
  SimpleStack: {
    description: 'A card stack',
    name: 'Stack Example',
  },
  SimpleTabsContainer: {
    description: 'Tabs following platform conventions',
    name: 'Tabs Example',
  },
  SwitchWithStacks: {
    description: 'Jump between routes',
    name: 'Switch between routes',
  },
  TabsInDrawer: {
    description: 'A drawer combined with tabs',
    name: 'Drawer + Tabs Example',
  } 
};

const Routes:any = {
  SimpleStack,
  SimpleTabsContainer,
  SwitchWithStacks,
  TabsInDrawer
};


// class Routing extends React.Component<any,any>{
//   render(){
//     const{navigation}=this.props;
//     return (
//               <View
//                 // style={{
//                 //   backgroundColor: ThemeColors[this.context].bodyContent,
//                 // }}
//               >
//                 {Object.keys(Routes).map((routeName: string) => (
//                   <RectButton
//                     key={routeName}
//                     underlayColor="#ccc"
//                     activeOpacity={0.3}
//                     onPress={() => {
//                       const route = Routes[routeName];
//                       if (route.screen || route.path || route.params) {
//                         const { path, params, screen } = route;
//                         const { router } = screen;
//                         const action =
//                           path &&
//                           router.getActionForPathAndParams(path, params);
//                         navigation.navigate(routeName, {}, action);
//                       } else {
//                         navigation.navigate(routeName);
//                       }
//                     }}
//                   >
//                   </RectButton>
//                 ))}
//               </View>
//      );
//   }
  
// }


// export default function App() {
//   return (
//     <Routing/>
//   );
// }
interface State {
  scrollY: Animated.Value;
}

class MainScreen extends React.Component<any, State> {
  static contextType = ThemeContext;
  context!: React.ContextType<typeof ThemeContext>;

  state = {
    scrollY: new Animated.Value(0),
  };

  render() {
    const { navigation } = this.props;

    const scale = this.state.scrollY.interpolate({
      extrapolate: 'clamp',
      inputRange: [-450, 0, 100],
      outputRange: [2, 1, 0.8],
    });

    const translateY = this.state.scrollY.interpolate({
      inputRange: [-450, 0, 100],
      outputRange: [-150, 0, 40],
    });

    const opacity = this.state.scrollY.interpolate({
      extrapolate: 'clamp',
      inputRange: [0, 50],
      outputRange: [1, 0],
    });

    const underlayOpacity = this.state.scrollY.interpolate({
      extrapolate: 'clamp',
      inputRange: [0, 50],
      outputRange: [0, 1],
    });

    const backgroundScale = this.state.scrollY.interpolate({
      extrapolate: 'clamp',
      inputRange: [-450, 0],
      outputRange: [3, 1],
    });

    const backgroundTranslateY = this.state.scrollY.interpolate({
      inputRange: [-450, 0],
      outputRange: [0, 0],
    });

    return (
      // <View style={{ flex: 1 }}>
      //   <NativeViewGestureHandler>
      //     <Animated.ScrollView
      //       style={{ flex: 1, backgroundColor: ThemeColors[this.context].body }}
      //       scrollEventThrottle={1}
      //       onScroll={Animated.event(
      //         [
      //           {
      //             nativeEvent: { contentOffset: { y: this.state.scrollY } },
      //           },
      //         ],
      //         { useNativeDriver: true }
      //       )}
      //     >
      //       <Animated.View
      //         style={[
      //           styles.backgroundUnderlay,
      //           {
      //             transform: [
      //               { scale: backgroundScale },
      //               { translateY: backgroundTranslateY },
      //             ],
      //           },
      //         ]}
      //       />
      //       <Animated.View
      //         style={{ opacity, transform: [{ scale }, { translateY }] }}
      //       >
      //         <SafeAreaView
      //           style={styles.bannerContainer}
      //           forceInset={{ top: 'always', bottom: 'never' }}
      //         >
      //           <View style={styles.banner}>
      //             <Text style={styles.bannerTitle}>
      //               React Navigation Examples
      //             </Text>
      //           </View>
      //         </SafeAreaView>
      //       </Animated.View>

            <SafeAreaView
              forceInset={{ top: 'always', bottom: 'always' }}
              style={{ backgroundColor: '#eee' }}
            >
              <View
                style={{
                  backgroundColor: ThemeColors[this.context].bodyContent,
                }}
              >
                {Object.keys(Routes).map((routeName: string) => (
                  <RectButton
                    key={routeName}
                    underlayColor="#ccc"
                    activeOpacity={0.3}
                    onPress={() => {
                      const route = Routes[routeName];
                      if (route.screen || route.path || route.params) {
                        const { path, params, screen } = route;
                        const { router } = screen;
                        const action =
                          path &&
                          router.getActionForPathAndParams(path, params);
                        navigation.navigate(routeName, {}, action);
                      } else {
                        navigation.navigate(routeName);
                      }
                    }}
                  >
                    <View
                      style={[
                        styles.item,
                        this.context === 'dark'
                          ? styles.itemDark
                          : styles.itemLight,
                      ]}
                    >
                      <Themed.Text style={styles.title}>
                        {NavigationExampleInfo[routeName].name}
                      </Themed.Text>
                      <Text style={styles.description}>
                        {NavigationExampleInfo[routeName].description}
                      </Text>
                    </View>
                  </RectButton>
                ))}
              </View>
             </SafeAreaView>
      //     </Animated.ScrollView>
      //   </NativeViewGestureHandler>
      //   <StatusBar barStyle="light-content" />
      //   <Animated.View
      //     style={[styles.statusBarUnderlay, { opacity: underlayOpacity }]}
      //   />
      // </View>
    );
  }
}

const Navigation = createAppContainer(
  createStackNavigator(
    {
      ...Routes,Index: {
        screen: MainScreen,
      },
    },
    {
      headerMode: 'none',
      initialRouteName: 'Index',

      /*
       * Use modal on iOS because the card mode comes from the right,
       * which conflicts with the drawer example gesture
       */
      //mode: Platform.OS === 'ios' ? 'modal' : 'card',
    }
  )
);

export default () => {
  let [theme, setTheme] = React.useState<SupportedThemes>('light');

  return (
    <View style={{ flex: 1 }}>
      <Navigation theme={theme} />
     </View>
  );
};
const styles = StyleSheet.create({
  backgroundUnderlay: {
    backgroundColor: '#673ab7',
    height: 300,
    left: 0,
    position: 'absolute',
    right: 0,
    top: -100,
  },
  banner: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
  },
  bannerContainer: {
    // backgroundColor: '#673ab7',
    alignItems: 'center',
  },
  bannerImage: {
    height: 36,
    margin: 8,
    resizeMode: 'contain',
    tintColor: '#fff',
    width: 36,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '200',
    marginRight: 5,
    marginVertical: 8,
  },
  description: {
    color: '#999',
    fontSize: 13,
  },
  item: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  itemLight: {
    borderBottomColor: ThemeColors.light.bodyBorder,
  },
  itemDark: {
    borderBottomColor: ThemeColors.dark.bodyBorder,
  },
  statusBarUnderlay: {
    backgroundColor: '#673ab7',
    height: 20,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

