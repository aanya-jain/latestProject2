import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native';
import StarMap from './screen/StarMap'
import SpaceCrafts from './screen/SpaceCrafts'
import DailyPic from './screen/DailyPic'
const Stack = createStackNavigator()
export default function App() {
  return (
  <NavigationContainer> 
    <Stack.Navigator initialRouteName = 'Home' >
      <Stack.Screen name = 'DailyPic' component = {DailyPic}/>
      <Stack.Screen name = 'SpaceCrafts' component = {SpaceCrafts}/>
      <Stack.Screen name = 'StarMap' component = {StarMap}/>





    </Stack.Navigator>
     </NavigationContainer>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
