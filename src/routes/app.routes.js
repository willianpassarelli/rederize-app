import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Logo from '../assets/logo';

import Feed from '../pages/Feed';

const App = createBottomTabNavigator();

const styles = StyleSheet.create({
  inactiveTabStyle: {
    width: 45,
    alignItems: 'center',
    paddingTop: 5,
  },
  activeTabStyle: {
    borderTopColor: '#8f5de8',
    borderTopWidth: 3,
    width: 45,
    alignItems: 'center',
    paddingTop: 5,
    borderRadius: 2,
  },
  mainButton: {
    width: 52,
    height: 52,
    borderRadius: 50,
    backgroundColor: '#8f5de8',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#8f5de8',
    shadowRadius: 2,
    shadowOpacity: 5,
    shadowOffset: { width: 0, height: 0 },
  },
  bagdeIcon: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bagdeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

const Routes = () => (
  <App.Navigator
    tabBarOptions={{
      activeTintColor: '#8f5de8',
      showLabel: false,
      style: {
        borderTopWidth: 0,
        shadowColor: '#ddd',
        shadowRadius: 5,
        shadowOpacity: 5,
      },
    }}
  >
    <App.Screen
      name="Feed"
      component={Feed}
      options={{
        tabBarIcon: ({ color, focused }) => (
          <View
            style={focused ? styles.activeTabStyle : styles.inactiveTabStyle}
          >
            <MaterialCommunityIcons name="newspaper" color={color} size={32} />
          </View>
        ),
      }}
    />
    <App.Screen
      name="Profile"
      component={Feed}
      options={{
        tabBarIcon: ({ color, focused }) => (
          <View
            style={focused ? styles.activeTabStyle : styles.inactiveTabStyle}
          >
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={32}
            />
          </View>
        ),
      }}
    />
    <App.Screen
      name="Main"
      component={Feed}
      options={{
        tabBarIcon: () => (
          <View style={styles.mainButton}>
            <View style={styles.bagdeIcon}>
              <Text style={styles.bagdeText}>1</Text>
            </View>
            <Logo color="#fff" size={28} />
          </View>
        ),
      }}
    />
    <App.Screen
      name="Search"
      component={Feed}
      options={{
        tabBarIcon: ({ color, focused }) => (
          <View
            style={focused ? styles.activeTabStyle : styles.inactiveTabStyle}
          >
            <MaterialCommunityIcons name="magnify" color={color} size={32} />
          </View>
        ),
      }}
    />
    <App.Screen
      name="Location"
      component={Feed}
      options={{
        tabBarIcon: ({ color, focused }) => (
          <View
            style={focused ? styles.activeTabStyle : styles.inactiveTabStyle}
          >
            <MaterialCommunityIcons
              name="compass-outline"
              color={color}
              size={32}
            />
          </View>
        ),
      }}
    />
  </App.Navigator>
);

export default Routes;
