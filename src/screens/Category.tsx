import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationProp, RouteProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/AppNavigator';
import {IceCreamItem} from '../models/IceCreamItem';
// import { style } from '../style/font_style';
// import LinearGradient from 'react-native-linear-gradient';

// Define the route prop for Detail
type CategoryScreenRouteProp = RouteProp<RootStackParamList, 'Category'>;

interface DetailProps {
  route: CategoryScreenRouteProp;
}

const Category = ({ route }: DetailProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { items } = route.params; // Pastikan 'items' sesuai dengan yang dikirim

  return (
    <View 
      style={{
        backgroundColor: '#F97BC7',
      }}
      >
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail', { item })}
            style={{
              margin: 10,
              padding: 10,
              backgroundColor: '#F9D8E8',
              borderRadius: 10,
            }}
          >
            <View 
              style={{
                flexDirection: 'row',
                }}>
              <Image source={item.image} 
                style={{ 
                  width: 130, 
                  height: 150,
                  borderRadius: 20,
                }} />
              <View 
                style={{
                  marginLeft: 10,
                }}>
              <Text 
              style={{
                fontWeight: '900',
                color: '#FD5BC7',
                fontSize: 20,
              }}>
                {item.title}
              </Text>
              <Text
                style={{
                  color: '#FD5BC7',
                }}>
                {item.desc}
              </Text>
              <Text 
                style={{
                  color: '#FD5BC7',
                  fontWeight: '900',
                  fontSize: 20,
                  marginTop: 70,
                }}>
                  {item.price}
              </Text>
              </View>
              {/* <View style={{
                flexDirection: 'row',
                // backgroundColor: 'yellow',
                alignItems: 'flex-end',
                width: 70,
                justifyContent: 'space-between',
              }}>
                <Text 
                  style={{
                    // backgroundColor: 'red',
                    fontSize: 20,
                    fontWeight: '900',
                    }}>  - </Text>
                <Text 
                  style={{
                    // backgroundColor: 'violet',
                    fontSize: 20,
                    fontWeight: '900',
                    }}> 1 </Text>
                <Text 
                  style={{
                    // backgroundColor: 'white',
                    fontSize: 20,
                    fontWeight: '900',
                    }}> + </Text>
              
              </View> */}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Category;