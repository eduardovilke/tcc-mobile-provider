import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterCapabilities from './pages/RegisterCapabilities'
import Feed from './pages/Feed';
import ServicesRecentListStackScreen from './pages/ServicesRecentListStackScreen'
import ServicesRecentListScheduledStackScreen from './pages/ServicesRecentListScheduledStackScreen'

const Stack = createStackNavigator();

export default function routes(){
  return(
    <NavigationContainer>
      <Stack.Navigator 
      initinalRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="RegisterCapabilities" component={RegisterCapabilities}/>
        <Stack.Screen name="Feed" component={Feed}/>
        <Stack.Screen name="ServicesRecentListStackScreen" component={ServicesRecentListStackScreen}/>
        <Stack.Screen name="ServicesRecentListScheduledStackScreen" component={ServicesRecentListScheduledStackScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}