import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingDashboardScreen from './onboarding.dashboard.screen';
import { BottomTabStack } from './bottomtabs.dashboard.stack';
import ControlsScreen from './controls.dashboard.screen';
import  CustomHeader  from '../../atomic/molecules/header/header.component';

export type DashboardRoutes = {
  Onboarding: undefined;
  Cards: undefined;
  Controls:undefined
};

const Stack = createStackNavigator<DashboardRoutes>();

export const DashboardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        header: ({ route }: any) => {
          return (
            <CustomHeader title={route?.name} />
          )
        },
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTitleStyle: {
          color: 'white',
          width: '90%'
        },
      })}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingDashboardScreen}
      />
      <Stack.Screen
        name="Cards"
        options={{ headerShown: false }}
        component={BottomTabStack}
      />
      <Stack.Screen
        name="Controls"
        options={{ headerShown: false }}
        component={ControlsScreen}
      />
    </Stack.Navigator>
  );
};
