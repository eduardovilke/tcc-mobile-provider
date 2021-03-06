import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import ServicesRecentsList from '../ServicesRecentsList/index';
import ServicesRecentListStackScreen from '../ServicesRecentListStackScreen';
import ServicesRecentListScheduledStackScreen from '../ServicesRecentListScheduledStackScreen';

const ServicesRecentListRoute = () => <ServicesRecentListStackScreen />;
const ServicesRecentListScheduledRoute = () => <ServicesRecentListScheduledStackScreen />;

const Tab = createMaterialBottomTabNavigator();

export default function Feed(){

  const ServicesRecentsRoute = () => <ServicesRecentsList />;
  return(
    <Tab.Navigator
      initialRouteName="Feed"
      shifting={true}
      sceneAnimationEnabled={false}
      barStyle={{ backgroundColor: '#4fb4c8' }}
      activeColor="#FFFFFF"
      inactiveColor="#FFFFFF"
    >
      <Tab.Screen
        name="Início"
        component={ServicesRecentListRoute}
        options={{
          tabBarIcon: 'home',
        }}
      />
      <Tab.Screen
        name="Agendados"
        component={ServicesRecentListScheduledRoute}
        options={{
          tabBarIcon: 'clock',
        }}
      />
      <Tab.Screen
        name="Minha área"
        component={ServicesRecentsRoute}
        options={{
          tabBarIcon: 'account',
        }}
      />
    </Tab.Navigator>
  )
}