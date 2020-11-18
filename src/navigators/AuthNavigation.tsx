import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import color from '@themes/colors';

import Welcome from '@screens/auth/Welcome';
import RegisterName from '@screens/auth/RegisterName';
import RegisterPokemon from '@screens/auth/RegisterPokemon';

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
        initialRouteName='WelcomeScreen'>
        <StackNavigation.Screen name='WelcomeScreen' component={Welcome} />
        <StackNavigation.Screen
          name='RegisterNameScreen'
          component={RegisterName}
          options={{ gestureEnabled: false }}
        />
        <StackNavigation.Screen
          name='RegisterPokemonScreen'
          component={RegisterPokemon}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  </>
);

export default AuthNavigation;
