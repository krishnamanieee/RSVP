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
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddParticipantScreen from '../screens/AddParticipantScreen';
import ParticipantDetailsScreen from '../screens/ParticipantDetailsScreen';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

type HomeStackParamList = {
  Home: undefined;
  ['Participant Details']: undefined;
};

type ParticipantParamList = {
  ['Add Participant']: undefined;
};
const HomeStack = createStackNavigator<HomeStackParamList>();
const ParticipantStack = createStackNavigator<ParticipantParamList>();
const Drawer = createDrawerNavigator();

class Navigation extends React.Component<any, any> {
  render(): React.ReactElement {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={this.renderHomeStack} />
          <Drawer.Screen
            name="Add Participant"
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
          // @ts-ignore
          options={(props: {navigation: any; route: any}) => ({
            headerLeft: () => this.onMenuPress(props.navigation),
          })}
        />
      </ParticipantStack.Navigator>
    );
  };

  public renderHomeStack = () => {
    return (
      <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          // @ts-ignore
          options={(props: {navigation: any; route: any}) => ({
            headerLeft: () => this.onMenuPress(props.navigation),
          })}
        />
        <HomeStack.Screen
          name="Participant Details"
          component={ParticipantDetailsScreen}
        />
      </HomeStack.Navigator>
    );
  };

  private onMenuPress = (navigation: any) => {
    const onPress = () => navigation.openDrawer();
    return (
      <TouchableOpacity onPress={onPress} style={{paddingHorizontal: 10}}>
        <Image
          source={require('../assets/images/menu.png')}
          style={styles.menuImage}
        />
      </TouchableOpacity>
    );
  };
}

export default Navigation;

const styles = StyleSheet.create({
  menuImage: {
    height: 20,
    width: 20,
  },
});
