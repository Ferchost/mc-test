import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingDashboardScreen from './onboarding.dashboard.screen';
import LinearGradient from 'react-native-linear-gradient';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import CardsScreen from './cards.dashboard.screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ActiveHome } from '../../atomic/atoms/icons/ActiveHome';
import { InactiveHome } from '../../atomic/atoms/icons/InactiveHome';



export type DashboardRoutes = {
  Onboarding: undefined;
  Cards: undefined;
};

const Tab = createBottomTabNavigator();


export const BottomTabStack = ({ setActualRoute, action }: any) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Cards') {
            return <ActiveHome />;
          } else {
            return <InactiveHome />;
          }

          // Puedes devolver cualquier componente aquí
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: ({ height: 84 }),
      })}
    >
      <Tab.Screen
        name="Cards"
        component={CardsScreen}        
        options={{ headerShown: false, tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Rewards"
        component={CardsScreen}
        options={{ headerShown: false, tabBarLabel: "Rewards" }}
      />
      <Tab.Screen
        name="PFM"
        component={CardsScreen}
        options={{ headerShown: false, tabBarLabel: "PFM" }}
      />
      <Tab.Screen
        name="More"
        component={CardsScreen}
        options={{ headerShown: false, tabBarLabel: "More" }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10
  },
});