import { View, Text } from 'react-native';
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import { AntDesign, Octicons, MaterialIcons  } from '@expo/vector-icons'; 
import ParkingStatus from '../screens/ParkingStatus';
import Payment from '../screens/Payment';
const Tab = createMaterialBottomTabNavigator();

const TabNavigator = ({navigator, route}) => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      barStyle={{ backgroundColor: "#121212" }}>
        <Tab.Screen name="Parking" 
            component={Home} 
            options={{
                tabBarIcon: ({color}) => (
                    <AntDesign name="car" size={24} color={color} />
                )
            }}  />
        <Tab.Screen name="Parking Status" 
            component={ParkingStatus} 
            options={{
                tabBarIcon: ({color}) => (
                    <MaterialIcons name="local-parking" size={24} color={color} />
                )
            }}  />
        <Tab.Screen name="Payment" 
            component={Payment} 
            options={{
                tabBarIcon: ({color}) => (
                    <MaterialIcons name="payment" size={24} color={color} />
                )
        }}  />
    </Tab.Navigator>
  )
}

export default TabNavigator;