import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
// import Main from '../screens/TabScreen/Main';
import TabNavigator from './TabNavigator';
import {IceCreamItem } from '../models/IceCreamItem';
import Sign_up from '../screens/Sign_up';
import Sign_in from '../screens/Sign_in';
import IceCream from '../screens/IceCream';
import Milkshake from '../screens/Milkshake';
import StartScreen from '../screens/StartScreen';
import AllProduct from '../screens/TabScreen/AllProduct';
import Category from '../screens/Category';
import Detail from '../screens/Detail';
import Keranjang from '../screens/TabScreen/Keranjang';

export type RootStackParamList = {
  StartScreen: undefined;
  MainTabs: undefined;
  Category: { items: IceCreamItem[] };  // Here we specify that Detail takes a CoffeeItem
  Detail: { item: IceCreamItem };  // Here we specify that Detail takes a CoffeeItem
  Sign_up: undefined;
  Sign_in: undefined;
  IceCream: undefined;
  Main: undefined;
  Milkshake: undefined;
  AllProduct: undefined;
  Keranjang: undefined;
};

type CategoryScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Category'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Sign_up" component={Sign_up} />
        <Stack.Screen name="Sign_in" component={Sign_in} />
        <Stack.Screen name="IceCream" component={IceCream} />
        <Stack.Screen name="Milkshake" component={Milkshake} />
        <Stack.Screen name="AllProduct" component={AllProduct} />
        <Stack.Screen name="Keranjang" component={Keranjang} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
