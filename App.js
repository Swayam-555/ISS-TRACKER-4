import * as React from 'react';
import { } from 'react-native';
import HomeScreen from './screens/homeScreen';
import ISSLocation from './screens/ISSLocation';
import Meteor from './screens/meteor';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='Meteor' component={Meteor} />
          <Stack.Screen name='ISSLocation' component={ISSLocation} />
        </Stack.Navigator>
      </NavigationContainer>

    )
  }
}