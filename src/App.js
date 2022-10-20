

import React, { useState, useEffect } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';

import { StatusBar, StyleSheet, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer, DefaultTheme as DefaultThemeNav } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AccountScreen from './screens/AccountScreen';
import CreateAdScreen from './screens/CreateAdScreen';
import HomeScreen from './screens/ListItemScreen';
import Feather from 'react-native-vector-icons/Feather'
import { create } from 'react-test-renderer';
import auth from '@react-native-firebase/auth'

const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    myOwnColor: 'darkblue',
  },
};

const MyTheme = {
  ...DefaultThemeNav,
  colors: {
    ...DefaultThemeNav.colors,
    background: 'white',
  },
};

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const AuthNavigator = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="signup" component={SignupScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
    //  </NavigationContainer>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'

          } else if (route.name === 'Create') {
            iconName = 'plus-circle'
          } else {
            iconName = 'user'
          }

          // You can return any component that you like here!
          return <View ><Feather name={iconName} size={35} color={color} /></View>
        },
      })}
      tabBarOptions={{
        activeTintColor: 'darkblue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: '' }} />
      <Tab.Screen name="Create" component={CreateAdScreen} options={{ title: '' }} />
      <Tab.Screen name="Account" component={AccountScreen} options={{ title: '' }} />
    </Tab.Navigator>
  )
}
const Navigation = () => {
  const [user, setUser] = useState('')
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((userExist) => {
      if (userExist) {
        setUser(userExist)
      } else {
        setUser('')
      }
    })
    return unsubscribe

  }, [])
  return (
    <NavigationContainer theme={MyTheme}>{
      user ? <TabNavigator /> : <AuthNavigator />
    }
    </NavigationContainer>
  )

}

const App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        {/* called fragments */}
        <StatusBar barStyle='dark-content' backgroundColor='darkblue' />
        <View style={styles.container}>
          <Navigation />

        </View>
      </PaperProvider>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;
