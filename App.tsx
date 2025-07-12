import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import Homescreen from "./screen/homescreen";

export default function App() {
  const android = Platform.OS === "android";
  // console.log(android);

  return (
    <View style={{ paddingTop: android ? 50 : 30 }}>
      <StatusBar style="auto" />
      <Homescreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
