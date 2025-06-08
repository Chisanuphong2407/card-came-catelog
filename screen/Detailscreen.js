import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Button, Alert, Modal, Pressable, Image, FlatList, Linking } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

export const DdetailScreen = ({ route }) => {
    const { title, pic, firstitle, firsturl, firstpic, secondtitle, secondurl, secondpic } = route.params;
    const openstURL = () => {
        Linking.openURL(firsturl).catch(err => console.error("couldn't load page"))
    }
    const openndURL = () => {
        Linking.openURL(secondurl).catch(err => console.error("couldn't load page"))
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.sublabel}>{title}</Text>
                <Image source={pic} style={styles.largeImage} />
                <View style={styles.content}>
                    <TouchableOpacity onPress={openstURL}>
                        <View style={styles.detcontent}>
                            <Image source={firstpic} style={styles.detimg} />
                            <Text style={styles.firstitle}>{firstitle}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openndURL}>
                        <View style={styles.detcontent}>
                            <Image source={secondpic} style={styles.detimg} />
                            <Text style={styles.firstitle}>{secondtitle}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export const VdetailScreen = ({ route }) => {
    const { title, pic, sttitle, sturl, stpic, ndtitle, ndurl, ndpic } = route.params;

    const openstURL = () => {
        Linking.openURL(sturl).catch(err => console.error("couldn't load page"))
    }
    const openndURL = () => {
        Linking.openURL(ndurl).catch(err => console.error("couldn't load page"))
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.sublabel}>{title}</Text>
                <Image source={pic} style={styles.clanflag} />
                <View style={styles.content}>
                    <TouchableOpacity onPress={openstURL}>
                        <View style={styles.detcontent}>
                            <Image source={stpic} style={styles.detimg} />
                            <Text style={styles.firstitle}>{sttitle}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openndURL}>
                        <View style={styles.detcontent}>
                            <Image source={ndpic} style={styles.detimg} />
                            <Text style={styles.firstitle}>{ndtitle}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export const AnimeVDetailScreen = () => {
    DATAve = [
        {
            id: 1,
            Thumnail: require('../assets/images/Anime/ch1.png'),
            url: 'https://youtu.be/z41Wnv6wI4c?si=fU9qF6BZLVUgZTv1',
        },
        {
            id: 2,
            Thumnail: require('../assets/images/Anime/ch2.png'),
            url: 'https://youtu.be/LucpvAxjBz4?si=hCSZ2vyxC9sfubjQ',
        },
        {
            id: 3,
            Thumnail: require('../assets/images/Anime/ch3.png'),
            url: 'https://youtu.be/tVg3PpBEdDg?si=uysb5jiIvs6SECsI',
        },
        {
            id: 4,
            Thumnail: require('../assets/images/Anime/ch4.png'),
            url: 'https://youtu.be/OIqMIY_S1Mc?si=Sgc2-d3Hf3Vj_6X3',
        },
        {
            id: 5,
            Thumnail: require('../assets/images/Anime/ch5.png'),
            url: 'https://youtu.be/IuISSS9r0pk?si=ZZTQ-aB-XdZGZ_SY',
        },
        {
            id: 6,
            Thumnail: require('../assets/images/Anime/ch6.png'),
            url: 'https://youtu.be/56YKBFLN90U?si=dlc9iSApuoQbdnt8',
        },
        {
            id: 7,
            Thumnail: require('../assets/images/Anime/ch7.png'),
            url: 'https://youtu.be/ggj_dx0piao?si=w0shcJ_dV-R1YlEt',
        },{
            id: 8,
            Thumnail: require('../assets/images/Anime/ch8.png'),
            url: 'https://youtu.be/TP3IHAyAcng?si=YNsfy9EYl52jvpWG',
        },{
            id: 9,
            Thumnail: require('../assets/images/Anime/ch9.png'),
            url: 'https://youtu.be/SxbW0cJNdes?si=4vwi5K4Bg3QpjClA',
        },{
            id: 10,
            Thumnail: require('../assets/images/Anime/ch10.png'),
            url: 'https://youtu.be/UF3XLpbOY5k?si=QiC9fCIBEvy09Si0',
        },{
            id: 11,
            Thumnail: require('../assets/images/Anime/ch11.png'),
            url: 'https://youtu.be/-PBysrUFj88?si=b_OvsxoPwKYOrTld',
        },
        {
            id: 12,
            Thumnail: require('../assets/images/Anime/ch12.png'),
            url: 'https://youtu.be/boJ1-kQ6Go4?si=d1OoshLi6KWaMPBJ',
        },{
            id: 13,
            Thumnail: require('../assets/images/Anime/ch13.png'),
            url: 'https://youtu.be/uTd_Yy7d8fc?si=I7ViR0x6ZUPi5hVv',
        },{
            id: 14,
            Thumnail: require('../assets/images/Anime/ch14.png'),
            url: 'https://youtu.be/B_nkVdQPrp8?si=AA-A3E2CBRefqYCf',
        },
    ];

    const Item = ({ id, Thumnail, url}) => (
        <TouchableOpacity
        onPress={() => {
            Linking.openURL(url).catch(err => console.error("couldn't load page"))
        }
        }
        >
            <View style={styles.animeitem}>
                <Image source={Thumnail} style={styles.animeImg} />
                <Text style={styles.animetitle}>การ์ดไฟท์ แวนการ์ด วี ไดเมนชัน ตอนที่ {id}</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <View>
            <ScrollView>
                <FlatList
                style={styles.animeflat}
                    data={DATAve}
                    renderItem={({ item }) => <Item
                        Thumnail={item.Thumnail}
                        title={item.title}
                        id={item.id}
                        url={item.url} />
                    }
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        </View>
    );
};

export const AnimeDDetailScreen = () => {
    DATAde = [
        {
            id: 1,
            Thumnail: require('../assets/images/AnimeD/ch1.jpg'),
            url: 'https://youtu.be/bKkT4F1_9-s?si=yHM1yL10pqhIyorh',
        },
        {
            id: 2,
            Thumnail: require('../assets/images/AnimeD/ch2.jpg'),
            url: 'https://youtu.be/iQSLu2pE9ns?si=qThKhyNzVghTlOiE',
        },
        {
            id: 3,
            Thumnail: require('../assets/images/AnimeD/ch3.jpg'),
            url: 'https://youtu.be/uq64ANEJBi8?si=kOdumj3bgUokve_9',
        },
        {
            id: 4,
            Thumnail: require('../assets/images/AnimeD/ch4.jpg'),
            url: 'https://youtu.be/Ge9NcqdQqto?si=5g9ybTY9mNO03MgI',
        },
        {
            id: 5,
            Thumnail: require('../assets/images/AnimeD/ch5.jpg'),
            url: 'https://youtu.be/wcQIpu0FOlg?si=dR1Swed_79G_kw1q',
        },
        {
            id: 6,
            Thumnail: require('../assets/images/AnimeD/ch6.jpg'),
            url: 'https://youtu.be/kHRZymXR9zg?si=sRSRpL-kaz350BiM',
        },
        {
            id: 7,
            Thumnail: require('../assets/images/AnimeD/ch7.jpg'),
            url: 'https://youtu.be/oTt-2UwSf6k?si=222JZvMNqv8FuXCN',
        },
        {
            id: 8,
            Thumnail: require('../assets/images/AnimeD/ch8.jpg'),
            url: 'https://youtu.be/PO9Mf5L5hMM?si=Iz_oCjbnufX02tCu',
        },
        {
            id: 9,
            Thumnail: require('../assets/images/AnimeD/ch9.jpg'),
            url: 'https://youtu.be/GL559bOz0WE?si=HSDJRkKAe48tzjVl',
        },
        {
            id: 10,
            Thumnail: require('../assets/images/AnimeD/ch10.jpg'),
            url: 'https://youtu.be/nSKp1WQtCAQ?si=UqOrZN67RPgsZvrn',
        },
        {
            id: 11,
            Thumnail: require('../assets/images/AnimeD/ch11.jpg'),
            url: 'https://youtu.be/ACcEwhRGi2I?si=3WssMNNobTtePFWv',
        },
        {
            id: 12,
            Thumnail: require('../assets/images/AnimeD/ch12.jpg'),
            url: 'https://youtu.be/rWGEpxYpB5I?si=HvNSqB_UjrDYnFjg',
        },
        {
            id: 13,
            Thumnail: require('../assets/images/AnimeD/ch13.jpg'),
            url: 'https://youtu.be/WtLRoQ3hh_U?si=9zzRbHsFm6A2UYK4',
        },
    ];

    const Item = ({ id, Thumnail, url}) => (
        <TouchableOpacity
        onPress={() => {
            
        }
        }
        >
            <View style={styles.animeitem}>
                <Image source={Thumnail} style={styles.animeImg} />
                <Text style={styles.animetitle}>การ์ดไฟท์ แวนการ์ด โอเวอร์เดรส ตอนที่ {id}</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <View>
            <ScrollView>
                <FlatList
                style={styles.animeflat}
                    data={DATAde}
                    renderItem={({ item }) => <Item
                        Thumnail={item.Thumnail}
                        title={item.title}
                        id={item.id}
                        url={item.url} />
                    }
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BCE7F7',
    },
    largeImage: {
        width: 250,
        height: 150,
        borderRadius: 5,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 15
    },
    sublabel: {
        fontSize: 30,
        padding: 14,
        paddingLeft: 20,
        paddingBottom: 20,
        fontWeight: 'bold'
    },
    firstitle: {
        fontSize: 20,
        padding: 20,
        fontWeight: '700'

    },
    detimg: {
        height: 400,
        width: 300,
        resizeMode: 'cover',
        alignSelf: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
    },
    content: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 15,
        justifyContent: 'center',
        marginTop: 10,
    },
    detcontent: {
        flex: 0.5,
        backgroundColor: "#8CD2EA",
        borderRadius: 10,
        justifyContent: 'center',
        margin: 30,
    },
    clanflag: {
        width: 200,
        height: 200,
        borderRadius: 5,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 15
    },
    animeImg: {
        resizeMode: 'cover',
        width: 'auto',
        height: 80,
        flex: 1,
        borderRadius: 6
    },
    animeflat: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#BCE7F7',
    },
    animetitle: {
        fontSize: 16,
        flex: 1,
        padding: 10,
        paddingTop: 2 ,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    animeitem: {
        backgroundColor: '#54C1E8',
        padding: 10,
        marginVertical: 4,
        marginHorizontal: 8,
        width: 'auto',
        borderRadius: 6,
        flexDirection: 'row'
    },
});