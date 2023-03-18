import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

//screens
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/GolfGamesScreen";
import SettingsScreen from "./screens/SettingsScreen";

const homeName = "Home";
const detailsName = "Golf games";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }: any) => ({
          tabBarIcon: ({ focused, color, size }: any) => {
            let iconName = "";

            if (route.name === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === detailsName) {
              iconName = focused
                ? "game-controller"
                : "game-controller-outline";
            } else if (route.name === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
