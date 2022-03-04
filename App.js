import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { StatusBar } from 'expo-status-bar';


import cReducer from './reducers';


import MondstadtStack from './stacks/MondstadtStack'
import LiyueStack from './stacks/LiyueStack';
import FavStack from './stacks/FavStack';

const Tab = createBottomTabNavigator();
const store = createStore(cReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style='auto'/>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            // headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Mondstadt') {
                iconName = focused
                  ? 'ios-leaf'
                  : 'ios-leaf-outline';
              } else if (route.name === 'Liyue') {
                iconName = focused ? 'ios-newspaper' : 'ios-newspaper-outline';
              } else if (route.name === 'Faves') {
                iconName = focused ? 'ios-star' : 'ios-star-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'mediumaquamarine',
            tabBarInactiveTintColor: 'gray'
          })}
        >
          <Tab.Screen name="Mondstadt" component={MondstadtStack} />
          <Tab.Screen name="Liyue" component={LiyueStack} />
          <Tab.Screen name="Faves" component={FavStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}