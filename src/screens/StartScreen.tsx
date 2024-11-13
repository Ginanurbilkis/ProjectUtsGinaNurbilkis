import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { RootStackParamList } from '../navigation/AppNavigator';


const StartScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View>
      <LinearGradient colors={['white','#FD5BC7']}
        style={{
          width: '100%',
          height: '100%',
      }}>
    <ScrollView>
      <View style={{
        margin: 10,
        backgroundColor: '#F9D8E8',
        height: 400,
        borderRadius: 80,
      }}>
        <Image source={require('../../assets/EsCreamHalamanPertama.png')}
          style={{
            width: 'auto',
            height: 300,
            position: 'relative',
            marginTop: 45,
          }}/>
          <View 
            style={{
              flex: 1, 
              position: 'absolute',
              width: '100%',
              marginTop: 150,}}>
                  </View>
                  <TouchableOpacity onPress={() => navigation.navigate('Sign_up')}>
                    <View >
                      <LinearGradient
                        colors={['white', '#FD5BC7']}
                        style={{
                          marginTop: 200,
                          marginLeft: 70,
                          width: 200,
                          height: 50,
                          borderRadius: 20,
                          borderWidth: 2,
                          borderColor: '#E61D82',
                        }}>
                          <Text 
                            style={{
                              textAlign: 'center',
                              marginTop: 12,
                              fontWeight: '900',
                              fontSize: 16,
                              color: 'black',
                            }}>
                              Get Started
                          </Text>
                      </LinearGradient>
                    </View>
                  </TouchableOpacity>
      </View>
    </ScrollView>
    </LinearGradient>
    </View>
  );
};
export default StartScreen;