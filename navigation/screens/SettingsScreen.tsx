import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function SettingsScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate("Home")}>Settings screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
