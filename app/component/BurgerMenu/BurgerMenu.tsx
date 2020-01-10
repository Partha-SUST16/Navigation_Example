import React, { PureComponent } from "react";
import { ScrollView ,StyleSheet} from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { DrawerItems,DrawerContentComponentProps } from "react-navigation-drawer";

class BurgerMenu extends PureComponent<DrawerContentComponentProps> {
  render() {
    return (
      <SafeAreaView style={styles.container} forceInset={{ top: "always", horizontal: "never" }}>
        <ScrollView style={styles.container}>
          <DrawerItems {...this.props} />
        </ScrollView>
        <Button icon={{ name: "md-log-out", type: "ionicon" }} title="Log Out" onPress={() => {}} />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });
export default BurgerMenu;