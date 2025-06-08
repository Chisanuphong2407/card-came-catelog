import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Button, Alert, Modal, Pressable, Image, Linking } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import Swiper from 'react-native-swiper';
import 'setimmediate';

export const Homescreen = ({ navigation }) => {

    const DATA = [
        {
            id: '1',
            title: 'Decklist',
        },
        {
            id: '2',
            title: 'Anime',
        },
        {
            id: '3',
            title: 'Discord',
        },
    ];

    const Item = ({ title }) => (
        <TouchableOpacity onPress={() => {
            if ([title] == 'Decklist') {
                navigation.navigate('Deck');
            } else if ([title] == 'Anime') {
                navigation.navigate('Anime');
            } else {
                Linking.openURL('https://discord.gg/pZxAf5x').catch(err => console.error("couldn't load page"))
            }
        }
        }>
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );

    const OpenFB = () => {
        Linking.openURL('https://www.facebook.com/ThaiVanguardClub').catch(err => console.error("couldn't load page"))
    };

    const OpenYT = () => {
        Linking.openURL('https://www.youtube.com/@Kidzncardzchannel').catch(err => console.error("couldn't load page"))
    };

    const OpenWEB = () => {
        Linking.openURL('https://thaivanguard.blogspot.com/').catch(err => console.error("couldn't load page"))
    };


    const swipe = [
        { key: '1', text: 'ช่องทางติดตามข่าวสาร (ปัดแรงๆ)' }
    ];

    const SrenderItem = ({ item }) => (
        <View style={styles.rowFront}>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    );

    const SrenderHiddenItem = ({ item }) => (
        <View style={styles.rowBack}>
            <TouchableOpacity style={[styles.backLeftBtn, styles.backLeftBtnLeft]}
                onPress={OpenFB}
            >
                <Text style={styles.backTextWhite}>facebook</Text>
            </TouchableOpacity>
            <View style={styles.backRightBtns}>
                <TouchableOpacity style={styles.backRightBtn}
                    onPress={OpenWEB}
                >
                    <Text style={styles.backTextWhite}>Website</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.backRightBtn, styles.deleteBtn]}
                    onPress={OpenYT}
                >
                    <Text style={styles.backTextWhite}>youtube</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.swipelist}>
                <SwipeListView
                    data={swipe}
                    renderItem={SrenderItem}
                    renderHiddenItem={SrenderHiddenItem}
                    leftOpenValue={75}
                    rightOpenValue={-150}
                />
            </View>
            <View style={styles.swipe}>
                <Swiper
                    loop={true} // เปิดการทำงานแบบ loop
                    autoplay={true} // ให้สไลด์ทำงานแบบอัตโนมัติ
                    autoplayTimeout={3} // เวลาในการเปลี่ยนภาพ (หน่วยวินาที)
                    showsPagination={true} // แสดงจุดเล็กๆ เพื่อบอกตำแหน่งของสไลด์
                    dotStyle={styles.dotStyle} // สไตล์จุดปกติ
                    activeDotStyle={styles.activeDotStyle} // สไตล์จุดที่เลือกอยู่
                    showsButtons // แสดงปุ่ม
                >
                    <View>
                        <Image
                            source={require('../assets/images/swiper/1.jpg')}
                            style={styles.image}
                        />
                    </View>
                    <View>
                        <Image
                            source={require('../assets/images/swiper/2.jpg')}
                            style={styles.image}
                        />
                    </View>
                    <View>
                        <Image
                            source={require('../assets/images/swiper/3.jpg')}
                            style={styles.image}
                        />
                    </View>
                    <View>
                        <Image
                            source={require('../assets/images/swiper/4.jpg')}
                            style={styles.image}
                        />
                    </View>
                    <View>
                        <Image
                            source={require('../assets/images/swiper/5.jpg')}
                            style={styles.image}
                        />
                    </View>
                </Swiper>
            </View>
            <View style={styles.content}>
                <Text style={styles.sublabel}>เมนู</Text>
                <SafeAreaView style={styles.FlatList}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <Item title={item.title} />}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </View>
        </View>
    );
};

const Stack = createNativeStackNavigator();

export const styles = StyleSheet.create({
    rowFront: {
        backgroundColor: '#FFF',
        borderBottomColor: '#12321',
        borderBottomWidth: 1,
        justifyContent: 'center',
        position: 'relative',
        height: 60,
        width: 380,
        paddingLeft: 15,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backTextWhite: {
        color: '#FFF',
    },
    backLeftBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backLeftBtnLeft: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        backgroundColor: '#5294ff'
    },
    backRightBtns: {
        flexDirection: 'row',
        alignItems: 'stretch',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0,


    },
    backRightBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
        backgroundColor: '#ffc49c',
    },
    deleteBtn: {
        backgroundColor: '#ff4d4d',
    },
    swipe: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
        padding: 10
    },
    image: {
        width: '100%',
        height: '100%',
        padding: 20,
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#BCE7F7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    FlatList: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#54C1E8',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: 'auto',
        borderRadius: 20
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color : 'white'
    },
    content: {
        backgroundColor: "white",
        flex: 0.6,
        width: '100%',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    sublabel: {
        fontSize: 25,
        padding: 20,
        fontWeight: 'bold'
    },
    swipelist: {
        flex: 0.1,
        justifyContent: 'flex-end',
    },
    swiperView: {
        flex: 0.4
    },
    text: {
        fontSize: 20,
    },
});

export default Homescreen;