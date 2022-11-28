import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AuthContextProvider from './src/context/AuthContext';
import StackNavigator from './src/navigation/StackNavigator';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';
import MallContextProvider from './src/context/MallContext';

Amplify.configure(config);

const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <View style={styles.container}>
          <NavigationContainer>
            <AuthContextProvider>
              <MallContextProvider>
                <StackNavigator />
              </MallContextProvider>
            </AuthContextProvider>
          </NavigationContainer>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    justifyContent: 'center',


  }
  
});

export default App;
