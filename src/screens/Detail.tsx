import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {NavigationProp, RouteProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/AppNavigator';
import {IceCreamItem} from '../models/IceCreamItem';
import { style } from '../style/font_style';
import LinearGradient from 'react-native-linear-gradient';

// Define the route prop for Detail
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

interface DetailProps {
  route: DetailScreenRouteProp;
}

const Detail = ({ route }: DetailProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { item } = route.params; // Pastikan 'items' sesuai dengan yang dikirim
  const [quantity, setQuantity] = useState(1); // State untuk mengatur jumlah item

  const increaseQuantity = () => {
    setQuantity(e => e + 1);
  };

  // Fungsi untuk mengurangi jumlah item
  const decreaseQuantity = () => {
    setQuantity(e => (e > 1 ? e - 1 : 1)); // Minimal 1
  };

  return (
    <View
    style={{
      backgroundColor: '#F97BC7',
      height: '100%',
      width: 'auto',
      // alignContent: 'center',
      // justifyContent: 'center',
    }}>
      <View style={{
        backgroundColor: '#F9D8E8',
        padding: 10,
        margin: 10,
        borderRadius: 20,
        alignItems: 'center',
        // justifyContent: 'center',
      }}>
          <Image source={item.image} 
            style={{ 
              width: 250, 
              height: 300,
              borderRadius: 20,
              alignItems: 'center',
              }}/>
              <View 
                style={{
                  flexDirection: 'row',
                  margin: 10,
                  width: 330,
                  // backgroundColor: 'brown',
                  alignItems: 'center',
                  justifyContent: 'space-around'
                  }}>
              <View 
                style={{ 
                  // backgroundColor: 'yellow',
                  }}>
          <Text
            style={{
              marginTop: 10,
              fontWeight: '900',
              color: '#F97BC7',
              fontSize: 25,
            }}>{item.desc}</Text>
          <Text
            style={{
              color: '#F97BC7',
            }}>{item.title}</Text>
          <Text
            style={{
              color: '#F97BC7',
              fontSize: 25,
              fontWeight: '900',
              marginTop: 10,
            }}>{item.price}</Text>
            </View>
            </View>
        </View>
        <View 
          style={{
            flexDirection: 'row',
            backgroundColor: '#F9D8E8',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 300, 
            padding: 20,
            margin: 30,
            borderRadius: 20,
          }}>
             <TouchableOpacity onPress={decreaseQuantity}>
          <Text
            style={{
              // backgroundColor: 'violet',
              fontWeight: '900',
              fontSize: 20,
              padding: 10
            }}>-</Text>
            </TouchableOpacity>
          <Text
            style={{
              // backgroundColor: 'yellow',
              fontWeight: '900',
              fontSize: 20,
            }}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity}>
          <Text
            style={{
              // backgroundColor: 'red',
              fontWeight: '900',
              fontSize: 20,
              // backgroundColor: 'red',
              padding: 10
            }}>+</Text>
            </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity 
            style={{
              width: 200,
              backgroundColor: 'yellow',
              alignItems: 'center',
            }}>
            <Text> Order </Text>
          </TouchableOpacity>
          </View>
    </View>
  );
};

export default Detail;