import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ServicesRecentsListScheduled from './ServicesRecentsListScheduled';
import ServiceInformation from './ServiceInformation'

const ServicesRecentsListScheduledStack = createStackNavigator();

export default function ServicesRecentsListScheduledStackScreen(){
  return (
    <ServicesRecentsListScheduledStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <ServicesRecentsListScheduledStack.Screen 
        name="ServicesRecentsListScheduled"
        component={ServicesRecentsListScheduled}
      />
      <ServicesRecentsListScheduledStack.Screen 
        name="ServiceInformation"
        component={ServiceInformation}
      />

    </ServicesRecentsListScheduledStack.Navigator>
  )
}