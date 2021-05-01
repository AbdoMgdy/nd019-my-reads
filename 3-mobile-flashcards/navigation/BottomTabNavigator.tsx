/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import DecksScreen from "../screens/DecksScreen";
import AddDeckScreen from "../screens/AddDeckScreen";
import { BottomTabParamList, DecksParamList, AddDeckParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Decks"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Decks"
        component={DecksNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="AddDeck"
        component={AddDeckNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const DecksStack = createStackNavigator<DecksParamList>();

function DecksNavigator() {
  return (
    <DecksStack.Navigator>
      <DecksStack.Screen name="DecksScreen" component={DecksScreen} />
    </DecksStack.Navigator>
  );
}

const AddDeckStack = createStackNavigator<AddDeckParamList>();

function AddDeckNavigator() {
  return (
    <AddDeckStack.Navigator>
      <AddDeckStack.Screen name="AddDeckScreen" component={AddDeckScreen} />
    </AddDeckStack.Navigator>
  );
}
