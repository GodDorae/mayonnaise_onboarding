import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './home/Home';
import Magazine from './magazine/Magazine';
import My from './my/My';

const Main = createBottomTabNavigator();

function MainNavigator() {
  return (
    <Main.Navigator initialRouteName="Home">
      <Main.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="Magazine"
        component={Magazine}
        options={{headerShown: false}}
      />
      <Main.Screen name="My" component={My} options={{headerShown: false}} />
    </Main.Navigator>
  );
}

export default MainNavigator;
