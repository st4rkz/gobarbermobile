import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';

const Tab = createBottomTabNavigator();
const Sign = createStackNavigator();

function SignedRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
}

export default function Routes({ signed = false }) {
  console.tron.log(signed);

  return (
    <Sign.Navigator headerMode="none" initialRouteName="SignIn">
      <Sign.Screen name="SignIn" component={SignIn} />
      <Sign.Screen name="SignUp" component={SignUp} />
      <Sign.Screen name="Dashboard" component={SignedRoutes} />
    </Sign.Navigator>
  );
}
