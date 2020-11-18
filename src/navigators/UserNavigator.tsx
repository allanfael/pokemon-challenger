import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import color from '@themes/colors';

import Dashboard from '@screens/logged/Dashboard';

const StackNavigation = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
};

const AuthNavigation = () => (
  <>
    <StatusBar barStyle='dark-content' backgroundColor={color.green100} />
    <SafeAreaView style={{ backgroundColor: color.green100 }} />
    <NavigationContainer theme={MyTheme}>
      <StackNavigation.Navigator
        screenOptions={{
          headerTransparent: true,
          headerShown: false,
          headerTitle: '',
        }}
        initialRouteName='DashboardScreen'>
        <StackNavigation.Screen name='DashboardScreen' component={Dashboard} />
      </StackNavigation.Navigator>
    </NavigationContainer>
  </>
);

export default AuthNavigation;
