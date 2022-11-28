import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from 'react-native'
import React from 'react'
import Login from "../screens/Login";
import Locator from "../screens/Locator";
import Home from "../screens/Home";
import TabNavigator from "./TabNavigator";
import Register from "../screens/Register";
import RegisterConfirm from "../screens/RegisterConfirm";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen  name="LoginScreen" component={Login} />
        <Stack.Screen  name="LocatorScreen" component={Locator} />
        <Stack.Screen  name="MainScreen" component={TabNavigator} />
        <Stack.Screen  name="RegisterScreen" component={Register} />
        <Stack.Screen  name="RegisterConfirmScreen" component={RegisterConfirm} />
    </Stack.Navigator>
  )
}

export default StackNavigator;