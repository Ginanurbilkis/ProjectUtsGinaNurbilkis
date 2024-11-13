import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

const Sign_up = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
  // State untuk menyimpan input user
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  // Fungsi untuk menghandle registrasi
  const handleRegister = async () => {
    try {
      const response = await fetch('https://429xjw2w-3000.asse.devtunnels.ms/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
          phone_number: phoneNumber,
        }),
      });

      const data = await response.json();

      if (response.status === 201) {
        Alert.alert('Sukses', 'Registrasi berhasil');
        navigation.navigate('Sign_in'); // Navigasi ke halaman login
      } else {
        Alert.alert('Error', data.message || 'Registrasi gagal');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      Alert.alert('Error', 'Terjadi kesalahan pada server');
    }
  };

  return (
    <ScrollView>
      <View>
        <LinearGradient colors={['white','#FD5BC7']}
          style={{
            width: '100%',
            height: 720,
            position: 'relative',
            alignItems: 'center',
          }}>
          <View style={{ width: '100%', position: 'absolute', alignItems: 'center' }}>
            <LinearGradient colors={['white', '#E61D82']} style={{ width: 200, marginTop: 180, borderRadius: 10 }}>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'black' }}>
                Username
              </Text>
            </LinearGradient>
          </View>
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: '#F90B82',
              backgroundColor: '#F9D8E8',
              color: '#F90B82',
              marginTop: 210,
              width: 200,
              borderRadius: 20,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
            placeholder="Masukkan Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <View>
            <LinearGradient colors={['white', '#E61D82']} style={{ width: 200, marginTop: 10, borderRadius: 10 }}>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'black' }}> 
                Nomor Telepon 
              </Text>
            </LinearGradient>
          </View>
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: '#F90B82',
              color: '#F90B82',
              backgroundColor: '#F9D8E8',
              width: 200,
              marginTop: 10,
              borderRadius: 20,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
            placeholder="Masukkan Nomor Telepon"
            keyboardType="phone-pad"
            onChangeText={(text) => setPhoneNumber(text)}
            value={phoneNumber}
          />
          <View>
            <LinearGradient colors={['white', '#E61D82']} style={{ width: 200, marginTop: 10, borderRadius: 10 }}>
              <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>
                Password
              </Text>
            </LinearGradient>
          </View>
          <TextInput 
            style={{
              borderWidth: 2,
              width: 200,
              borderColor: '#F90B82',
              color: '#F90B82',
              backgroundColor: '#F9D8E8',
              marginTop: 10,
              borderRadius: 20,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
            placeholder="Masukkan Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity onPress={handleRegister}>
            <View>
              <LinearGradient colors={['white', '#E61D82']} style={{ width: 200, marginTop: 60, borderRadius: 20, height: 50 }}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 13, color: 'black' }}>
                  Buat Akun
                </Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Sign_in')}>
            <View>
              <LinearGradient colors={['white', '#E61D82']} style={{ width: 200, marginTop: 60, borderRadius: 20, height: 50 }}>
                <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 13, color: 'black' }}>
                  Login
                </Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default Sign_up;
