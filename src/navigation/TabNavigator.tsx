import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, View} from 'react-native';
import Love from '../screens/TabScreen/Love';
import Basket from '../screens/TabScreen/Keranjang';
import Notification from '../screens/TabScreen/Notification';
import Main from '../screens/TabScreen/Main';
import Milkshake from '../screens/Milkshake';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './AppNavigator';
import IceCream from '../screens/IceCream';
import Detail from '../screens/Detail';
import Category from '../screens/Category';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
    <Stack.Screen name="Milkshake" component={Milkshake} options={{ headerShown: false }} />
    <Stack.Screen name="IceCream" component={IceCream} options={{ headerShown: false }} />
    <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
    <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}: any) => ({
        tabBarIcon: ({focused}: any) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = focused
              ? require('../../assets/home-active.png')
              : require('../../assets/home.png');
          } else if (route.name === 'Love') {
            iconSource = focused
              ? require('../../assets/heart-active.png')
              : require('../../assets/heart.png');
          } else if (route.name === 'Basket') {
            iconSource = focused
              ? require('../../assets/basket-active.png')
              : require('../../assets/basket.png');
          } else if (route.name === 'Notification') {
            iconSource = focused
              ? require('../../assets/notification-active.png')
              : require('../../assets/notification.png');
          }

          return (
            <>
              <Image
                source={iconSource}
                style={{width: 24, height: 24}}
                resizeMode="contain"
              />
              <View style={{height: 2}}></View>
              <View
                style={{
                  height: 6,
                  width: 12,
                  backgroundColor: focused ? '#C67C4E' : 'white',
                  borderRadius: 4,
                }}></View>
              <View style={{height: 6}}></View>
            </>
          );
        },
        tabBarLabel: () => null,
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={MainStack} />
      <Tab.Screen name="Love" component={Love} />
      <Tab.Screen name="Basket" component={Basket} />
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
function createStackNavigator() {
  throw new Error('Function not implemented.');
}

