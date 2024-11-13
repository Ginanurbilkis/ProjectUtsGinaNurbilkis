import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { IceCreamItem } from '../models/IceCreamItem';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

const category = [
    'Strawberry',
    'Blueberry',
    'Coklat',
    'Matcha',
    'Oreo',
    'Vanilla'
  ];  

const iceCreamData : IceCreamItem[] = [
    {
        id: 1,
        image: require('../../assets/IceCream/Strawberry/Strawberry1.jpeg'), 
        rating: 4.5,
        title: 'Strawberry',
        desc: 'Strawberry Cup',
        price: '$5.00',
    },
    {
        id: 2,
        image: require('../../assets/IceCream/Strawberry/Strawberry2.jpeg'), 
        rating: 4.5,
        title: 'Strawberry',
        desc: 'Box Gift Strawberry',
        price: '$5.00',
    },
    {
        id: 3,
        image: require('../../assets/IceCream/Strawberry/Strawberry3.jpeg'), 
        rating: 4.5,
        title: 'Strawberry',
        desc: 'Strawberry Lumer Blueberry',
        price: '$5.00',
    },
    {
        id: 4,
        image: require('../../assets/IceCream/Strawberry/Strawberry4.jpeg'),
        rating: 4.5,
        title: 'Strawberry',
        desc: 'Fresh strawberry ice',
        price: '$5.00',
    },
    {
        id: 5,
        image: require('../../assets/IceCream/Strawberry/Strawberry5.jpeg'),
        rating: 4.5,
        title: 'Strawberry',
        desc: 'Strawberry ice Ball',
        price: '$5.00',
    },
    {
        id: 6,
        image: require('../../assets/IceCream/Strawberry/Strawberry6.jpeg'),
        rating: 4.5,
        title: 'Strawberry',
        desc: ' Milk Ice strawberry',
        price: '$5.00',
    },
    {
        id: 7,
        image: require('../../assets/IceCream/Blueberry/Blueberry1.jpeg'),
        rating: 4.5,
        title: 'Blueberry',
        desc: 'Ice Cup Blueberry',
        price: '$5.00',
    },
    {
        id: 8,
        image: require('../../assets/IceCream/Blueberry/Blueberry2.jpeg'),
        rating: 4.5,
        title: 'Blueberry',
        desc: 'Blueberry Lemon Mint',
        price: '$5.00',
    },
    {
        id: 9,
        image: require('../../assets/IceCream/Blueberry/Blueberry3.jpeg'),
        rating: 4.5,
        title: 'Blueberry',
        desc: 'Ball fresh Blueberry',
        price: '$5.00',
    },
    {
        id: 10,
        image: require('../../assets/IceCream/Blueberry/Blueberry4.jpeg'),
        rating: 4.5,
        title: 'Blueberry',
        desc: 'Milk Ball Blueberry',
        price: '$5.00',
    },
    {
        id: 11,
        image: require('../../assets/IceCream/Blueberry/Blueberry5.jpeg'),
        rating: 4.5,
        title: 'Blueberry',
        desc: 'Almond Blueberry',
        price: '$5.00',
    },
    {
        id: 12,
        image: require('../../assets/IceCream/Blueberry/Blueberry6.jpeg'),
        rating: 4.5,
        title: 'Blueberry',
        desc: 'Blueberry Cup Ball',
        price: '$5.00',
    },
    {
        id: 13,
        image: require('../../assets/IceCream/Coklat/Coklat1.jpeg'),
        rating: 4.5,
        title: 'Coklat',
        desc: 'Coconat Ball choco',
        price:  '$5.00',
    },
    {
        id: 14,
        image: require('../../assets/IceCream/Coklat/Coklat2.jpeg'),
        rating: 4.5,
        title: 'Coklat',
        desc: 'Boba Ice choco',
        price:  '$5.00',
    },
    {
        id: 15,
        image: require('../../assets/IceCream/Coklat/Coklat3.jpeg'),
        rating: 4.5,
        title: 'Coklat',
        desc: 'Kitkat Ice choco',
        price:  '$5.00',
    },
    {
        id: 16,
        image: require('../../assets/IceCream/Coklat/Coklat4.jpeg'),
        rating: 4.5,
        title: 'Coklat',
        desc: 'Blueberry Ice choco',
        price:  '$5.00',
    },
    {
        id: 17,
        image: require('../../assets/IceCream/Coklat/Coklat5.jpeg'),
        rating: 4.5,
        title: 'Coklat',
        desc: 'Ice choco lumer',
        price:  '$5.00',
    },
    {
        id: 18,
        image: require('../../assets/IceCream/Coklat/Coklat6.jpeg'),
        rating: 4.5,
        title: 'Coklat',
        desc: 'Ice choco Premium',
        price:  '$5.00',
    },
    {
        id: 19,
        image: require('../../assets/IceCream/Matcha/Matcha1.jpeg'),
        rating: 4.5,
        title: 'Matcha',
        desc: 'Matcha Ice Choco',
        price: '$5.00',
    },
    {
        id: 20,
        image: require('../../assets/IceCream/Matcha/Matcha2.jpeg'),
        rating: 4.5,
        title: 'Matcha',
        desc: 'Matcha Ice Cup',
        price: '$5.00',
    },
    {
        id: 21,
        image: require('../../assets/IceCream/Matcha/Matcha3.jpeg'),
        rating: 4.5,
        title: 'Matcha',
        desc: 'Matcha Ice Mangkok',
        price: '$5.00',
    },
    {
        id: 22,
        image: require('../../assets/IceCream/Matcha/Matcha4.jpeg'),
        rating: 4.5,
        title: 'Matcha',
        desc: 'Matcha Ice Almond',
        price: '$5.00',
    },
    {
        id: 23,
        image: require('../../assets/IceCream/Matcha/Matcha5.jpeg'),
        rating: 4.5,
        title: 'Matcha',
        desc: 'Matcha Ice Mint',
        price: '$5.00',
    },
    {
        id: 24,
        image: require('../../assets/IceCream/Oreo/Oreo1.jpeg'),
        rating: 4.5,
        title: 'Oreo',
        desc: 'Oreo Ice cream',
        price: '$5.00', 
    },
    {
        id: 25,
        image: require('../../assets/IceCream//Oreo/Oreo2.jpeg'),
        rating: 4.5,
        title: 'Oreo',
        desc: 'Oreo Ball Ice',
        price: '$5.00',
    },
    {
        id: 26,
        image: require('../../assets/IceCream//Oreo/Oreo3.jpeg'),
        rating: 4.5,
        title: 'Oreo',
        desc: 'Oreo Choco Ball Ice',
        price: '$5.00',
    },
    {
        id: 27,
        image: require('../../assets/IceCream//Oreo/Oreo4.jpeg'),
        rating: 4.5,
        title: 'Oreo',
        desc: 'Oreo Cup',
        price: '$5.00',
    },
    {
        id: 28,
        image: require('../../assets/IceCream//Oreo/Oreo5.jpeg'),
        rating: 4.5,
        title: 'Oreo',
        desc: 'Oreo Ball Ice',
        price: '$5.00',
    },
    {
        id: 29,
        image: require('../../assets/IceCream//Oreo/Oreo6.jpeg'),
        rating: 4.5,
        title: 'Oreo',
        desc: 'Oreo Ice Lumer',
        price: '$5.00',
    },
    {
        id: 30,
        image: require('../../assets/IceCream/Vanilla/Vanilla1.jpeg'),
        rating: 4.5,
        title: 'Vanilla',
        desc: 'Coconut Vanilla Ice Cream',
        price: '$5.00',
    },
    {
        id: 31,
        image: require('../../assets/IceCream/Vanilla/Vanilla2.jpeg'),
        rating: 4.5,
        title: 'Vanilla',
        desc: 'Roll Vanilla Ice',
        price: '$5.00',
    },
    {
        id: 32,
        image: require('../../assets/IceCream/Vanilla/Vanilla3.jpeg'),
        rating: 4.5,
        title: 'Vanilla',
        desc: 'Banana Vanilla Ice',
        price: '$5.00',
    },
    {
        id: 33,
        image: require('../../assets/IceCream/Vanilla/Vanilla4.jpeg'),
        rating: 4.5,
        title: 'Vanilla',
        desc: 'Red Velvet Vanilla',
        price: '$5.00',
    },
    {
        id: 34,
        image: require('../../assets/IceCream/Vanilla/Vanilla5.jpeg'),
        rating: 4.5,
        title: 'Vanilla',
        desc: 'Mint Vanilla Ice Cream',
        price: '$5.00',
    }
];

const IceCreamColor = [
    '#F9D8E8',
    '#FD5BC7',
    '#F9D8E8',
    '#FD5BC7',
    '#F9D8E8',
    '#FD5BC7',
]

const IceCreamPopuler = [
    require('../../assets/IceCream/Coklat/Coklat3.jpeg'),
    require('../../assets/IceCream/Blueberry/Blueberry2.jpeg'),
    require('../../assets/IceCream/Matcha/Matcha2.jpeg'),
    require('../../assets/IceCream/Oreo/Oreo3.jpeg'),
    require('../../assets/IceCream/Vanilla/Vanilla2.jpeg'),
    require('../../assets/IceCream/Strawberry/Strawberry5.jpeg'),
]

const IceCream = () => {

    const handleItemPress = (image: any) => {
        // Cari item yang memiliki gambar yang sama
        const item = iceCreamData.find(iceCream => iceCream.image == image);

        console.log(image);
        console.log(item);
        
    
        if (item) {
          navigation.navigate('Detail', { item: item });
        }
      };

      
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <ScrollView>
      <View>
        <LinearGradient colors={['white','#FD5BC7']}
            style={{
                width: '100%',
                height: 685,
            }}>
                <View 
                    style={{
                        width: 300,
                        height: 250,
                        backgroundColor: '#FD5BC7',
                        marginTop: 40,
                        marginLeft: 30,
                        borderRadius: 20,
                    }}>
                </View>
                <View 
                    style={{
                        backgroundColor: '#F9D8E8',
                        marginTop: -240,
                        height: 230,
                        width: 270,
                        marginLeft: 45,
                        borderRadius: 10,
                    }}> 
                        <Image source={require('../../assets/MatchaChoco.png')}
                            style={{
                                width: 200,
                                height: 250,
                                // backgroundColor: 'black',
                                marginTop: -20,
                                marginLeft: 35,
                            }}/>
                </View>
                <LinearGradient colors={['white','#FD5BC7']}
                    style={{
                        width: 150,
                        height: 50,
                        marginTop: -270,
                        marginLeft: 105,
                        borderRadius: 20,
                    }}>
                    <Text 
                        style={{
                            color: 'black',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginTop: 10,
                            fontStyle: 'italic',
                            fontSize: 20,
                        }}>
                        Ice Cream
                    </Text>
                </LinearGradient>
                <ScrollView horizontal 
                    contentContainerStyle={{
                        alignItems: 'center',
                        height: 70,
                    }}
                        style={{
                            flexGrow: 0, 
                            marginTop: 250,
                        }}>
                    {category.map((category,index) => (
                    <TouchableOpacity key={index} onPress={() => {
                        const selectedItems = iceCreamData.filter(item => item.title === category); // Filter berdasarkan kategori
                        navigation.navigate('Category', { items: selectedItems }); // Kirim daftar item
                      }}
                        style={{
                            padding: 0,
                            margin: 0,
                            height: 60,
                    }}>
                        <View 
                            style={{
                                backgroundColor: IceCreamColor[index],
                                margin: 5,
                                padding: 10,
                                alignItems: 'center',
                                borderRadius: 10,
                            }}>
                            <Text 
                                style={{
                                    fontWeight: 'bold',
                                    color: 'black',
                                }}> 
                                {category}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
                </ScrollView>
                <View>
                    <LinearGradient colors={['white','#FD5BC7']}
                        style={{
                            height: 60,
                            // borderWidth: 2,
                            marginTop: 20,
                        }}>
                            <Text 
                            style={{
                                fontFamily: 'Pacifico-Regular',
                                color: 'black',
                                fontSize: 30,
                                marginLeft: 10,
                                lineHeight: 50,
                            }}> 
                                Most Populer 
                            </Text>
                    </LinearGradient>
                </View>
                <View style={{
                    height: 200,
                    marginTop: 10,
                    backgroundColor: '#FD5BC7',
                }}>
                    <ScrollView horizontal
                        contentContainerStyle={{
                            alignItems: 'center',
                        }}>
                        {IceCreamPopuler.map((populer,index) => (
                            <TouchableOpacity key={index} onPress={() => handleItemPress(populer)}  // Menyaring item berdasarkan gambar
>
                                    <View 
                                        style={{
                                            height: 190,
                                            backgroundColor: '#F9D8E8', 
                                            margin: 5,
                                            borderRadius: 10,
                                            alignItems: 'center',
                                        }}>
                                        <Image source={populer}
                                            style={{
                                                width: 110,
                                                height: 170,
                                                marginTop: 10,
                                                margin: 5,
                                                borderRadius: 10,
                                            }}/>
                                    </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default IceCream;