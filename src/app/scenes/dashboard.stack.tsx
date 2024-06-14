import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingDashboardScreen from './onboarding.dashboard.screen';
import LinearGradient from 'react-native-linear-gradient';
import { Alert, Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import CardsScreen from './cards.dashboard.screen';
import { BottomTabStack } from './bottomtabs.dashboard.stack';
import Label from '../../atomic/atoms/label/label.component';
import { Close } from '../../atomic/atoms/icons/close';

export type DashboardRoutes = {
  Onboarding: undefined;
  Cards: undefined;
};
interface IHeader {
  title: string
  route: string
  cornerAction?: () => any,
  closeButton?: boolean
}

const Stack = createStackNavigator<DashboardRoutes>();

export const CustomHeader = ({ title, route, cornerAction, closeButton }: IHeader) => {
  return (
    <LinearGradient
      colors={['#e35306', '#f88c1f']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.header}
    >
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', height: 35, paddingHorizontal: 20, alignItems: 'center' }}>

        <TouchableOpacity onPress={cornerAction} style={{ height: 35, width: '10%',  alignItems: 'center', justifyContent: 'center' }}>
          {
            closeButton ? <Close color='#fff' /> : <></>
          }
        </TouchableOpacity>
        <Label style={styles.headerTitle} variant={'h6'}>{title}</Label>
        <View style={{ height: 50, width: '10%' }} />
      </View>
    </LinearGradient>
  );
};

export const DashboardStack = () => {
  const [actualRoute, setActualRoute] = useState("");

  return (
    <Stack.Navigator
      screenOptions={() => ({
        header: ({ route }: any) => {
          return (
            <CustomHeader title={route?.name} route={actualRoute} />
          )
        },
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTitleStyle: {
          color: 'white',
          width: '80%'
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
    </Stack.Navigator>
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
  },
});