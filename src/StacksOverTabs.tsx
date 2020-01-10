import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  getActiveChildNavigationOptions,
  NavigationScreenProp,
  NavigationState,
  SafeAreaView
} from "react-navigation";
import {
  createStackNavigator,
  NavigationStackScreenProps
} from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Button } from "./commonComponents/ButtonWithMargin";
import SampleText from "./SampleText";

interface MyNavScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
  banner: string;
}
class MyNavScreen extends React.Component<MyNavScreenProps> {
  componentDidMount() {
    console.log("MyNavScreen was Mounted");
  }
  componentWillUnmount() {
    console.log("MyNavScreen was Unmounted");
  }
  render() {
    {
      console.log("MyNavScreen Rendering");
    }
    const { navigation, banner } = this.props;
    return (
      <ScrollView>
        <SafeAreaView forceInset={{ horizontal: "always", vertical: "never" }}>
          <SampleText>{banner}</SampleText>
          <Button
            onPress={() => navigation.navigate("Profile", { name: "Jordan" })}
            title="Open profile screen"
          />
          <Button
            onPress={() => navigation.navigate("NotifSettings")}
            title="Open notifications screen"
          />
          <Button
            onPress={() => navigation.navigate("SettingsTab")}
            title="Go to settings tab"
          />
          <Button onPress={() => navigation.goBack(null)} title="Go back" />
        </SafeAreaView>
        <StatusBar barStyle="default" />
      </ScrollView>
    );
  }
}

interface HomeScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}
class MyHomeScreen extends React.Component<HomeScreenProps> {
  componentDidMount() {
    console.log("MyHomeScreen was Mounted");
  }
  componentWillUnmount() {
    console.log("MyHomeScreen was Unmounted");
  }
  render() {
    {
      console.log("HomeScreen Rendering");
    }
    const { navigation } = this.props;
    return <MyNavScreen banner="Home Screen" navigation={navigation} />;
  }
}
const MyNotificationsSettingsScreen = ({
  navigation
}: NavigationStackScreenProps) => (
  <MyNavScreen banner="Notifications Screen" navigation={navigation} />
);

class MyProfileScreen extends React.Component<HomeScreenProps> {
  componentDidMount() {
    console.log("MyProfileScreen was Mounted");
  }
  componentWillUnmount() {
    console.log("MyProfileScreen was Unmounted");
  }
  render() {
    const { navigation } = this.props;
    {
      console.log("MyProfileScreen Rendering");
    }
    return <MyNavScreen banner="Settings Screen" navigation={navigation} />;
  }
}
class MySettingsScreen extends React.Component<HomeScreenProps> {
  componentDidMount() {
    console.log("MySettings was Mounted");
  }
  componentWillUnmount() {
    console.log("MySettings was Unmounted");
  }
  render() {
    {
      console.log("MySettings Rendering");
    }
    const { navigation } = this.props;
    return <MyNavScreen banner="Settings Screen" navigation={navigation} />;
  }
}

const TabNav = createBottomTabNavigator(
    {
      MainTab: {
        navigationOptions: {
          tabBarIcon: ({
            tintColor,
            focused,
          }: {
            tintColor: string;
            focused: boolean;
          }) => (
            <Ionicons
              name={focused ? 'ios-home' : 'ios-home'}
              size={26}
              style={{ color: tintColor }}
            />
          ),
          tabBarLabel: 'Home',
          title: 'Welcome',
        },
        path: '/',
        screen: MyHomeScreen,
      },
      SettingsTab: {
        navigationOptions: {
          tabBarIcon: ({
            tintColor,
            focused,
          }: {
            tintColor: string;
            focused: boolean;
          }) => (
            <Ionicons
              name={focused ? 'ios-settings' : 'ios-settings'}
              size={26}
              style={{ color: tintColor }}
            />
          ),
          title: 'Settings',
        },
        path: '/settings',
        screen: MySettingsScreen,
      },
    },
    {
      
    }
  );
TabNav.navigationOptions = ({
  navigation,
  screenProps
}: {
  navigation: NavigationScreenProp<NavigationState>;
  screenProps: { [key: string]: any };
}) => {
  const childOptions = getActiveChildNavigationOptions(navigation, screenProps);
  return {
    title: childOptions.title
  };
};

const StacksOverTabs = createStackNavigator({
  NotifSettings: {
    navigationOptions: {
      title: "Notifications"
    },
    screen: MyNotificationsSettingsScreen
  },
  Profile: {
    navigationOptions: ({ navigation }: NavigationStackScreenProps) => ({
      title: `${navigation.state.params!.name}'s Profile!`
    }),
    path: "/people/:name",
    screen: MyProfileScreen
  },
  Root: {
    screen: TabNav
  }
});

export default StacksOverTabs;
