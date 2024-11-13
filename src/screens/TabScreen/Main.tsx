import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';

const Main = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <ScrollView>
      <View >
        <LinearGradient colors={['white','#FD5BC7']}
          style={{
            width: '100%',
            height: 720,
            position: 'relative',
          }}>
          <View >
            <LinearGradient colors={['#FD5BC7', 'white']}
              style={{
                width: 300,
                height: 300,
                marginTop: 10,
                marginLeft: 10,
                borderRadius: 20,
              }}>
              <Text 
                style={{
                  marginLeft: 20,
                  marginTop: 20,
                  fontSize: 30,
                  color: 'black',
                  fontFamily: 'FacultyGlyphic-Regular',
                  height: 40,
                }}>
                  Welcome
              </Text>
              <Text 
                style={{
                  marginLeft: 15,
                  fontSize: 40,
                  fontWeight: 'regular',
                  color: 'black',
                  fontFamily: 'Pacifico-Regular',
                  lineHeight: 55,
                }}>
                Cream Ice
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('IceCream')}>
                <View>
                  <LinearGradient colors={['#FD5BC7', 'white']}
                    style={{
                      width: 200,
                      height: 210,
                      marginTop: 100,
                      marginLeft: 170,
                      borderRadius: 20,
                    }}>
                    <Image source={require('../../../assets/EsCream.png')}
                      style={{
                        width: 200,
                        height: 300,
                        marginLeft: -10,
                        marginTop: -130,
                        borderRadius: 20,
                      }}/>
                      <Text 
                        style={{
                          fontFamily: 'Pacifico-Regular',
                          fontSize: 20,
                          textAlign: 'center',
                          color: 'black',
                        }}>
                        Ice Cream
                      </Text>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate ('Milkshake')}>
                <LinearGradient colors={['#FD5BC7', 'white']}
                  style={{
                    width: 200,
                    height: 210,
                    marginTop: -20,
                    borderRadius: 20,
                    marginLeft: -30,
                  }}>
                    <Image source={require('../../../assets/MilkshakeHalPertama.png')}
                      style={{
                        width: 200,
                        height: 250,
                        marginTop: -90,
                        marginLeft: 10,
                      }}/>
                      <Text 
                        style={{
                          fontFamily: 'Pacifico-Regular',
                          fontSize: 20,
                          color: 'black',
                          textAlign: 'center',
                          marginTop: 10,
                        }}>
                          Milkshake
                      </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate ('AllProduct')}>
                <LinearGradient colors={['#FD5BC7', 'white']}
                  style={{
                    width: 130,
                    height: 150,
                    marginLeft: 230,
                    marginTop: -80,
                    borderRadius: 20,
                  }}>
                    <Image source={require('../../../assets/AllProduct.png')}
                      style={{
                        width: 150,
                        height: 150,
                        marginTop: -80,
                        marginLeft: -50,
                      }}/>
                      <Text 
                        style={{
                          fontFamily: 'Pacifico-Regular',
                          fontSize: 20,
                          color: 'black',
                          lineHeight: 28,
                        }}>
                        All {"\n"}     Product
                      </Text>
                </LinearGradient>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </LinearGradient>
      </View>
    </ScrollView>
  )
}

export default Main;