import * as React from "react";
import {View} from  "react-native"
import {
  NavigationActions,
  NavigationEventPayload,
  NavigationEventSubscription,
  SafeAreaView,
  StackActions,
  Themed,
  withNavigation
} from "react-navigation";
import {
  createStackNavigator,
  NavigationStackProp,
  NavigationStackScreenProps
} from "react-navigation-stack";
import { Button } from "./commonComponents/ButtonWithMargin";
import { HeaderButtons } from "./commonComponents/HeaderButton";
import SampleText from "./SampleText";
const DEBUG = true;

interface MyNavScreenProps {
  navigation: NavigationStackProp;
  banner: React.ReactNode;
}

interface BackButtonProps {
  navigation: NavigationStackProp;
}
class MyBackButton extends React.Component<BackButtonProps, any> {
  render() {
    return (
      <HeaderButtons>
        <HeaderButtons.Item title="Back" onPress={this.navigateBack} />
      </HeaderButtons>
    );
  }
  navigateBack = () => {
    this.props.navigation.goBack(null);
  };
}

const MyBackButtonWithNavigation: any = withNavigation(MyBackButton);
// class ButtonForAll extends React.Component<MyNavScreenProps>{
//     render(){
//         const { navigation, banner } = this.props;
//         const { push, replace, popToTop, pop, dismiss } = navigation;
//     }
// }

class MyNavScreen extends React.Component<MyNavScreenProps> {
  render() {
    const { navigation, banner } = this.props;
    const { push, replace, popToTop, pop, dismiss } = navigation;
    return (
      <SafeAreaView forceInset={{ top: "never" }}>
        <SampleText>{banner}</SampleText>
        <Button
          onPress={() => push("Photos", { name: "Jane" })}
          title="Push a profile screen"
        />
        <Button
          onPress={() => navigation.navigate("Photos", { name: "Jane" })}
          title="Navigate to a photos screen"
        />
        <Button
          onPress={() => replace("Photos", { name: "Lucy" })}
          title="Replace with profile"
        />
        <Button onPress={() => popToTop()} title="Pop to top" />
        <Button onPress={() => pop()} title="Pop" />
        <Button
          onPress={() => {
            if (navigation.goBack()) {
              console.log("goBack handled");
            } else {
              console.log("goBack unhandled");
            }
          }}
          title="Go back"
        />
        <Button onPress={() => dismiss()} title="Dismiss" />
      </SafeAreaView>
    );
  }
}

class MyHomeScreen extends React.Component<NavigationStackScreenProps> {
  static navigateOptions = {
    title: "Home Screen"
  };
  s0: NavigationEventSubscription | null = null;
  s1: NavigationEventSubscription | null = null;
  s2: NavigationEventSubscription | null = null;
  s3: NavigationEventSubscription | null = null;

  componentDidMount() {
    console.log("Component Did Mount of Home Screen");
    this.s0 = this.props.navigation.addListener("willFocus", this.onWF);
    this.s1 = this.props.navigation.addListener("didFocus", this.onDF);
    this.s2 = this.props.navigation.addListener("willBlur", this.onWB);
    this.s3 = this.props.navigation.addListener("didBlur", this.onDB);
  }
  componentWillMount() {
      if(this.s0===null || this.s1===null || this.s3===null || this.s2==null){
        console.log("Component Will Mount of Home Screen");
        
      }else 
    {this.s0!.remove();
    this.s1!.remove();
    this.s2!.remove();
    this.s3!.remove();
console.log("Component Will Mount of Home Screen");}
  }
  componentWillUnmount(){
      console.log("Home Component will be unmounted");
  }
  onWF = (a: NavigationEventPayload) => {
    DEBUG && console.log("willFocus HomeScreen", a);
  };
  onDF = (a: NavigationEventPayload) => {
    DEBUG && console.log("didFocus HomeScreen", a);
  };
  onWB = (a: NavigationEventPayload) => {
    DEBUG && console.log("willBlur HomeScreen", a);
  };
  onDB = (a: NavigationEventPayload) => {
    DEBUG && console.log("didBlur HomeScreen", a);
  };
  render() {
    const { navigation } = this.props;
    {console.log("Render Home")}
    return <MyNavScreen banner="Home Screen" navigation={navigation} />;
  }
}

class MyPhotosScreen extends React.Component<NavigationStackScreenProps> {
  static navigationOptions = {
    headerLeft: () => <MyBackButtonWithNavigation />,
    title: "Photos"
  };
  constructor(props){
      super(props);
      console.log("Constructor of Photos");
  }
  s0: NavigationEventSubscription | null = null;
  s1: NavigationEventSubscription | null = null;
  s2: NavigationEventSubscription | null = null;
  s3: NavigationEventSubscription | null = null;
  componentWillMount(){
      console.log("Photos Screen will mount now");
  }
  componentDidMount() {
    console.log("Component Did Mount of Photos Screen");
    this.s0 = this.props.navigation.addListener("willFocus", this.onWF);
    this.s1 = this.props.navigation.addListener("didFocus", this.onDF);
    this.s2 = this.props.navigation.addListener("willBlur", this.onWB);
    this.s3 = this.props.navigation.addListener("didBlur", this.onDB);
  }
  componentWillUnmount() {
    console.log("Component Will UnMount of Photos Screen");
    this.s0!.remove();
    this.s1!.remove();
    this.s2!.remove();
    this.s3!.remove();
  }
  onWF = (a: NavigationEventPayload) => {
    DEBUG && console.log("willFocus PhotosScreen", a);
  };
  onDF = (a: NavigationEventPayload) => {
    DEBUG && console.log("didFocus PhotosScreen", a);
  };
  onWB = (a: NavigationEventPayload) => {
    DEBUG && console.log("willBlur PhotosScreen", a);
  };
  onDB = (a: NavigationEventPayload) => {
    DEBUG && console.log("didBlur PhotosScreen", a);
  };

  render() {
    const { navigation } = this.props;
    {console.log("render photo screen")}
    return (
      <MyNavScreen
        banner={`${navigation.getParam("name")}'s Photos`}
        navigation={navigation}
      />
    );
  }
}

const MyProfileScreen = ({
  navigation
}: {
  navigation: NavigationStackProp;
}) => (
    
  <View>
      {console.log("My Profile render")}
      <MyNavScreen
    banner={`${
      navigation.getParam("mode") === "edit" ? "Now Editing " : ""
    }${navigation.getParam("name")}'s Profile`}
    navigation={navigation}/>
  </View>
  
);

MyProfileScreen.navigationOptions = (props: NavigationStackScreenProps) => {
  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state;

  return {
    headerBackImage: params!.headerBackImage,
    headerRight: () => (
      <HeaderButtons>
        <HeaderButtons.Item
          title={params!.mode === "edit" ? "Done" : "Edit"}
          onPress={() =>
            setParams({ mode: params!.mode === "edit" ? "" : "edit" })
          }
        />
      </HeaderButtons>
    ),
    headerTitle: `${params!.name}'s Profile!`
  };
};

const SimpleStack = createStackNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Photos: {
     path: "photos/:name",
    screen: MyPhotosScreen
  },
  Profile: {
     path: "people/:name",
    screen: MyProfileScreen
  }
}
);

export default SimpleStack;
