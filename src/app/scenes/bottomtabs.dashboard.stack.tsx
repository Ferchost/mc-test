import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import CardsScreen from './cards.dashboard.screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ActiveHome } from '../../atomic/atoms/icons/ActiveHome';
import { InactiveHome } from '../../atomic/atoms/icons/InactiveHome';
import { CommonTheme } from '../../atomic/theme';

export type DashboardRoutes = {
  Onboarding: undefined;
  Cards: undefined;
};

const Tab = createBottomTabNavigator();
const EmptyPage=()=>{
  return(
    <Fragment></Fragment>
  )
}
const color = CommonTheme.color

export const BottomTabStack = ({ setActualRoute, action }: any) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Card') {
            return <ActiveHome />;
          } else {
            return <InactiveHome />;
          }
        },
        tabBarActiveTintColor: color.mainOrange,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: ({ height: 84 }),
      })}
    >
      <Tab.Screen
        name="Card"
        component={CardsScreen}        
        options={{ headerShown: false, tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Rewards"
        component={EmptyPage}
        options={{ headerShown: false, tabBarLabel: "Rewards" }}
      />
      <Tab.Screen
        name="PFM"
        component={EmptyPage}
        options={{ headerShown: false, tabBarLabel: "PFM" }}
      />
      <Tab.Screen
        name="More"
        component={EmptyPage}
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