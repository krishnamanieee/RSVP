/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddParticipantScreen from './screens/AddParticipantScreen';

type HomeStackParamList = {
  Home: undefined;
};

type ParticipantParamList = {
  ['Add Participant']: undefined;
};
const HomeStack = createStackNavigator<HomeStackParamList>();
const ParticipantStack = createStackNavigator<ParticipantParamList>();
const Drawer = createDrawerNavigator();

class Router extends React.Component<any, any> {
  render(): React.ReactElement {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={this.renderHomeStack} />
          <Drawer.Screen
            name="participant"
            component={this.renderParticipantStack}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

  public renderParticipantStack = () => {
    return (
      <ParticipantStack.Navigator initialRouteName="Add Participant">
        <ParticipantStack.Screen
          name="Add Participant"
          component={AddParticipantScreen}
        />
      </ParticipantStack.Navigator>
    );
  };

  public renderHomeStack = () => {
    return (
      <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen name="Home" component={HomeScreen} />
      </HomeStack.Navigator>
    );
  };
}

export default Router;
