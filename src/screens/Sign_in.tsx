import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

const Sign_in = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
  // State untuk menyimpan input user
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Fungsi untuk menghandle login
  const handleLogin = async () => {
    try {
      const response = await fetch('https://429xjw2w-3000.asse.devtunnels.ms/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        Alert.alert('Sukses', 'Login berhasil');
        navigation.navigate('MainTabs'); // Navigasi ke halaman utama setelah login berhasil
      } else {
        Alert.alert('Error', data.message || 'Login gagal');
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Error', 'Terjadi kesalahan pada server');
    }
  };

  return (
    <ScrollView>
      <View>
        <LinearGradient colors={['white', '#FD5BC7']}
          style={{
            width: '100%',
            height: 720,
            position: 'relative',
            alignItems: 'center',
          }}>
          <View style={{ width: '100%', position: 'absolute', alignItems: 'center' }}>
            <LinearGradient colors={['white', '#E61D82']} style={{ width: 200, marginTop: 200, borderRadius: 10 }}>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'black' }}>
                Username
              </Text>
            </LinearGradient>
          </View>
          <TextInput
            style={{
              borderWidth: 2,
              borderColor: '#F90B82',
              color: '#F90B82',
              backgroundColor: '#F9D8E8',
              marginTop: 230,
              width: 200,
              textAlign: 'center',
              fontWeight: 'bold',
              borderRadius: 20,
            }}
            placeholder="Masukkan Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <View>
            <LinearGradient colors={['white', '#E61D82']} style={{ width: 200, marginTop: 10, borderRadius: 10 }}>
              <Text style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }}>
                Password
              </Text>
            </LinearGradient>
          </View>
          <TextInput
            style={{
              width: 200,
              borderWidth: 2,
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
          <TouchableOpacity onPress={handleLogin}>
            <View>
              <LinearGradient colors={['white', '#E61D82']} style={{ width: 200, height: 50, marginTop: 80, borderRadius: 20 }}>
                <Text style={{ fontWeight: 'bold', color: 'black', textAlign: 'center', marginTop: 13 }}>
                  Login
                </Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Sign_up')}>
            <View>
              <LinearGradient colors={['white', '#E61D82']} style={{ width: 200, height: 50, marginTop: 80, borderRadius: 20 }}>
                <Text style={{ fontWeight: 'bold', color: 'black', textAlign: 'center', marginTop: 13 }}>
                  Buat Akun
                </Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default Sign_in;
