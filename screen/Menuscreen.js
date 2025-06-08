import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Button, Alert, Modal, Pressable, Image, FlatList, Linking, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';

export const DeckprofileScreen = ({ navigation }) => {
    DATA = [
        {
            id: '1',
            title: 'D standard',
            pic: require('../assets/images/VD.png'),
        },
        {
            id: '2',
            title: 'V premium',
            pic: require('../assets/images/VV.png'),
        },
    ];

    const Item = ({ title, pic }) => (
        <TouchableOpacity
            onPress={() => {
                if ([title] == 'D standard') {
                    navigation.navigate('VanD');
                } else {
                    navigation.navigate('VanV');
                }
            }
            }
        >
            <View style={styles.item}>
                <Image source={pic} style={styles.img} />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <SafeAreaView style={styles.FlatList}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item
                    pic={item.pic}
                    title={item.title} />
                }
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

export const AnimeScreen = ({ navigation }) => {
    DATAa = [
        {
            id: '1',
            title: 'Vanguard overdress',
            pic: require('../assets/images/VD.png'),
        },
        {
            id: '2',
            title: 'Vanguard V dimension',
            pic: require('../assets/images/VV.png'),
        },
    ];

    const Item = ({ title, pic }) => (
        <TouchableOpacity
            onPress={() => {
                if ([title] == 'Vanguard overdress') {
                    navigation.navigate('AnimeD');
                } else {
                    navigation.navigate('AnimeV');
                }
            }
            }
        >
            <View style={styles.item}>
                <Image source={pic} style={styles.img} />
                <Text style={styles.Atitle}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <SafeAreaView style={styles.FlatList}>
            <FlatList
                data={DATAa}
                renderItem={({ item }) => <Item
                    pic={item.pic}
                    title={item.title} />
                }
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

export const VanDScreen = ({ navigation }) => {
    DATA = [
        {
            id: '1',
            title: 'Dragon empire',
            pic: require('../assets/images/nation/Dragon_empire.png'),
            firstitle: 'มังกรศักดิ์สิทธิ์วงแหวนสวรรค์ เนอร์วานา',
            firsturl: 'https://youtu.be/RGcNC7MLrWk?si=JbpaSvv8iHtBySLy',
            firstpic: require('../assets/images/nation/Rideline/Nirvana.png'),
            secondtitle: 'ปืนใหญ่พายุทราย ยูจีน',
            secondurl: 'https://youtu.be/BPyRGGa6xtw?si=wXdsFpWOOJvymhqV',
            secondpic: require('../assets/images/nation/Rideline/Eugene.png'),
        },
        {
            id: '2',
            title: 'Dark state',
            pic: require('../assets/images/nation/Dark_state.png'),
            firstitle: 'เดียโบรอส "ไวโอเลนซ์" บรูซ',
            firsturl: 'https://youtu.be/_0iiHlCS6FY?si=6oBlI7SqjkLKAjwB',
            firstpic: require('../assets/images/nation/Rideline/Bruce.png'),
            secondtitle: 'ผู้บงการแรงโน้มถ่วง บาโรวแมกเนส',
            secondurl: 'https://youtu.be/Jv0cqUiKnmU?si=R2ZjHXISbuf9Plzd',
            secondpic: require('../assets/images/nation/Rideline/Baro.png'),
        },
        {
            id: '3',
            title: 'Brandt gate',
            pic: require('../assets/images/nation/Brandt_gate.png'),
            firstitle: 'เจ้าหญิงสงครามแห่งแสงออโรรา เซรัส・ไวท์',
            firsturl: 'https://youtu.be/-FGLLBoqOmg?si=cvXKCPXPmgqN7Kmn',
            firstpic: require('../assets/images/nation/Rideline/Seraph.png'),
            secondtitle: 'คาร์ดินัล・เดอุส ออลฟิสท์',
            secondurl: 'https://youtu.be/b-93bx9jhXU?si=bHyGXjyABIITj9f5',
            secondpic: require('../assets/images/nation/Rideline/Orfist.png'),
        },
        {
            id: '4',
            title: 'Keter sanctuary',
            pic: require('../assets/images/nation/Keter_sanctury.png'),
            firstitle: 'ยอดราชัน บาสทีออน',
            firsturl: 'https://youtu.be/gI2fxf-g50c?si=ZOSWyhxKg0_4ytNo',
            firstpic: require('../assets/images/nation/Rideline/Bastion.png'),
            secondtitle: 'เฮกซาออร์บ・ซอเซอร์เรส',
            secondurl: 'https://youtu.be/mVpn224auEY?si=EtnmZWGs44rJEkE-',
            secondpic: require('../assets/images/nation/Rideline/Hexaorb.png'),
        },
        {
            id: '5',
            title: 'Stoicheia',
            pic: require('../assets/images/nation/Stoicheia.png'),
            firstitle: 'ผู้ใช้วิชาวิญญาณแห่งพิรุณปริศนา ซอร์ก้า',
            firsturl: 'https://youtu.be/ExDsUU3jv7c?si=EDZg0Amsj2FA3mLX',
            firstpic: require('../assets/images/nation/Rideline/Zorga.png'),
            secondtitle: 'ราชาสัตว์เขาแห่งพงไพร แมกโนเลีย',
            secondurl: 'https://youtu.be/_JI-hSp4Xvw?si=DREp-sW_cx85gmtf',
            secondpic: require('../assets/images/nation/Rideline/Magnolia.png'),
        },
    ];

    const Item = ({ title, pic, firstitle, firsturl, secondtitle, secondurl, firstpic, secondpic }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Ddetail', { title, pic, firstitle, firsturl, firstpic, secondtitle, secondurl, secondpic })}>
            <View style={styles.item}>
                <Image source={pic} style={styles.flag} />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <SafeAreaView style={styles.FlatList}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item
                    pic={item.pic}
                    title={item.title}
                    firstitle={item.firstitle}
                    firsturl={item.firsturl}
                    firstpic={item.firstpic}
                    secondtitle={item.secondtitle}
                    secondurl={item.secondurl}
                    secondpic={item.secondpic} />
                }
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

export const VanVScreen = ({ navigation }) => {
    DATAus = [
        {
            id: '1',
            title: "Royal paladin",
            pic: require('../assets/images/clan/Royal.png'),
            sttitle: 'Seeker',
            sturl: 'https://youtu.be/GmU92Kwsiwg?si=vs0006lcNsofdiXQ',
            stpic: require('../assets/images/clan/unit/Seeker.png'),
            ndtitle: 'Altmile',
            ndurl: 'https://youtu.be/fC5w2VOdDpw?si=DBfTxphv8Ao-jBsN',
            ndpic: require('../assets/images/clan/unit/Altmile.png'),
        },
        {
            id: '2',
            title: "Shadow paladin",
            pic: require('../assets/images/clan/Shadow.png'),
            sttitle: 'Revenger',
            sturl: 'https://youtu.be/GmU92Kwsiwg?si=vs0006lcNsofdiXQ',
            stpic: require('../assets/images/clan/unit/Raging.png'),
            ndtitle: 'Witch',
            ndurl: 'https://youtu.be/fC5w2VOdDpw?si=DBfTxphv8Ao-jBsN',
            ndpic: require('../assets/images/clan/unit/Witch.png'),
        },
        {
            id: '3',
            title: "Angel feather",
            pic: require('../assets/images/clan/Angel.png'),
            sttitle: 'Gavrail',
            sturl: 'https://youtu.be/CzVCi_h61kQ?si=Jn6vN73VG262MxTA',
            stpic: require('../assets/images/clan/unit/Gavrail.png'),
            ndtitle: 'Nociel',
            ndurl: 'https://youtu.be/14mzItthcZA?si=8Lc_nW90nnwsmyVr',
            ndpic: require('../assets/images/clan/unit/Nociel.png'),
        },
        {
            id: '4',
            title: "Oracle tink tank",
            pic: require('../assets/images/clan/Oracle.png'),
            sttitle: 'Susanoo',
            sturl: 'https://youtu.be/5iZk_J53mdc?si=UF2AQaU-AkSnXz6j',
            stpic: require('../assets/images/clan/unit/Susanoo.png'),
            ndtitle: 'Magus',
            ndurl: 'https://youtu.be/fi63Y_KdSsE?si=HfteNUP1rvnOclOd',
            ndpic: require('../assets/images/clan/unit/Magus.png'),
        },
        {
            id: '5',
            title: "Gold paladin",
            pic: require('../assets/images/clan/Gold.png'),
            sttitle: 'Blue flame',
            sturl: 'https://youtu.be/b8AslBcsj30?si=Bq_asq92ZiLQ-0zw',
            stpic: require('../assets/images/clan/unit/Blue_flame.png'),
            ndtitle: 'Ezel',
            ndurl: 'https://youtu.be/-p-r2tEuIuo?si=Dr_gU4kqgjW9ZB-f',
            ndpic: require('../assets/images/clan/unit/Ezel.png'),
        },
        {
            id: '6',
            title: "Genesis",
            pic: require('../assets/images/clan/Genesis.png'),
            sttitle: 'Fenrir',
            sturl: 'https://youtu.be/d5YqW9Usuxk?si=yjaqJ3BkeKzVvBJw',
            stpic: require('../assets/images/clan/unit/Fenrir.png'),
            ndtitle: 'Himiko',
            ndurl: 'https://youtu.be/QB13tzVTNLQ?si=SMTZfi-cMUcm2GwS',
            ndpic: require('../assets/images/clan/unit/Himiko.png'),
        },
    ];
    DATAds = [
        {
            id: '1',
            title: "Dark ireggulars",
            pic: require('../assets/images/clan/Dark.png'),
            sttitle: 'Scharhrot',
            sturl: 'https://youtu.be/GmU92Kwsiwg?si=vs0006lcNsofdiXQ',
            stpic: require('../assets/images/clan/unit/Scharhrot.png'),
            ndtitle: 'Datarian',
            ndurl: 'https://youtu.be/fC5w2VOdDpw?si=DBfTxphv8Ao-jBsN',
            ndpic: require('../assets/images/clan/unit/Dantarian.png'),
        },
        {
            id: '2',
            title: "Spike brother",
            pic: require('../assets/images/clan/Spike.png'),
            sttitle: 'Rising nova',
            sturl: 'https://youtu.be/9OHJxlJIZfg?si=Nk3wAYRIS7KdZajn',
            stpic: require('../assets/images/clan/unit/Rising_nova.png'),
            ndtitle: 'Dudly emperor',
            ndurl: 'https://youtu.be/hrc6ZEW-cOc?si=54zrhh_RZpCmrvGB',
            ndpic: require('../assets/images/clan/unit/Dudly.png'),
        },
        {
            id: '3',
            title: "Pale moon",
            pic: require('../assets/images/clan/Pale.png'),
            sttitle: 'Silverthorn',
            sturl: 'https://youtu.be/I8LbKBy33MI?si=MgPGPoSGG1kpac9S',
            stpic: require('../assets/images/clan/unit/Luquier.png'),
            ndtitle: "Bunny's",
            ndurl: 'https://youtu.be/NqZYzQm3cBA?si=mUFY34EZwXmq2dla',
            ndpic: require('../assets/images/clan/unit/Bunny.png'),
        },
        {
            id: '4',
            title: "Gear chronicle",
            pic: require('../assets/images/clan/Gear.png'),
            sttitle: 'Chronofang tiger',
            sturl: 'https://youtu.be/CN5VQ7qJQDk?si=ukeAGMm6RfGKKAgY',
            stpic: require('../assets/images/clan/unit/Chronofang.png'),
            ndtitle: "Chronojet dragon",
            ndurl: 'https://youtu.be/VfaWhKWP4xI?si=9u3CWke0AKYXxsYw',
            ndpic: require('../assets/images/clan/unit/Chronojet.png'),
        },
    ];
    DATAmg = [
        {
            id: '1',
            title: "Granblue",
            pic: require('../assets/images/clan/Granblue.png'),
            sttitle: 'Seven seas',
            sturl: 'https://youtu.be/CN5VQ7qJQDk?si=ukeAGMm6RfGKKAgY',
            stpic: require('../assets/images/clan/unit/Sevenseas.png'),
            ndtitle: "Ghostie",
            ndurl: 'https://youtu.be/qq2YjAy6nv4?si=3X5NVo1g0RxjRPcK',
            ndpic: require('../assets/images/clan/unit/Beatrice.png'),
        },
        {
            id: '2',
            title: "Aqua force",
            pic: require('../assets/images/clan/Aqua.png'),
            sttitle: 'Blue wave',
            sturl: 'https://youtu.be/J3Oqgi7vfzg?si=qWrpUfOu4Z2Xt8SC',
            stpic: require('../assets/images/clan/unit/Tretra.png'),
            ndtitle: "Maelstorm",
            ndurl: 'https://youtu.be/J-1pUxcKb-8?si=yzsWAD6EeNYkUU20',
            ndpic: require('../assets/images/clan/unit/Maelstorm.png'),
        },
        {
            id: '3',
            title: "Bermuda triangle",
            pic: require('../assets/images/clan/Bermuda.png'),
            sttitle: 'Pacifica',
            sturl: 'https://youtu.be/3NmRBfpRvZk?si=2B3vC2lmIYIqe1fl',
            stpic: require('../assets/images/clan/unit/Pacifica.png'),
            ndtitle: "Rivire",
            ndurl: 'https://youtu.be/naCo_-bE46M?si=qPbmgl21KDi7UEVe',
            ndpic: require('../assets/images/clan/unit/Rivire.png'),
        },
    ];
    DATAde = [
        {
            id: '1',
            title: "Kagero",
            pic: require('../assets/images/clan/Kagero.png'),
            sttitle: 'Dragonic overlord',
            sturl: 'https://youtu.be/pEG5qIXcKKo?si=_iJFMq3axCsExWNw',
            stpic: require('../assets/images/clan/unit/The_x.png'),
            ndtitle: "Seal Dragon",
            ndurl: 'https://youtu.be/UjxpOWgPj7Y?si=e_-paUQFJzHb2kre',
            ndpic: require('../assets/images/clan/unit/Blockcad.png'),
        },
        {
            id: '2',
            title: "Nubatama",
            pic: require('../assets/images/clan/Nubatama.png'),
            sttitle: 'Hanzo',
            sturl: 'https://youtu.be/cBkeoPVkze0?si=mP9LyM4S-tVeskFJ',
            stpic: require('../assets/images/clan/unit/Hanzo.png'),
            ndtitle: "Daihouzan",
            ndurl: 'https://youtu.be/TeJII84uERI?si=Fa8I69x_19m02Lip',
            ndpic: require('../assets/images/clan/unit/Daihouzan.png'),
        },
        {
            id: '3',
            title: "Tachikaze",
            pic: require('../assets/images/clan/Tachikaze.png'),
            sttitle: 'Anger blader',
            sturl: 'https://youtu.be/BUbp534E3T8?si=VrncOV134kwhqzhm',
            stpic: require('../assets/images/clan/unit/Anger.png'),
            ndtitle: "Ancient dragon",
            ndurl: 'https://youtu.be/GCaqSIqQU7k?si=xQcLO9JWRlwFlvXm',
            ndpic: require('../assets/images/clan/unit/Ancient.png'),
        },
        {
            id: '4',
            title: "Narukami",
            pic: require('../assets/images/clan/Narukami.png'),
            sttitle: 'Dungaree',
            sturl: 'https://youtu.be/HptJTkyXLcw?si=yY30U3Zx13qQ9fJ2',
            stpic: require('../assets/images/clan/unit/Dungaree.png'),
            ndtitle: "Dragonic kaiser Vermilion",
            ndurl: 'https://youtu.be/Zru7-12E5pY?si=Z7O3lLZVEawql6iG',
            ndpic: require('../assets/images/clan/unit/Kaiser.png'),
        },
        {
            id: '5',
            title: "Murakumo",
            pic: require('../assets/images/clan/Murakumo.png'),
            sttitle: 'Stealth Friends',
            sturl: 'https://youtu.be/XA9_cBZhBOQ?si=LTI_RFNKNyogQSGE',
            stpic: require('../assets/images/clan/unit/Nura.png'),
            ndtitle: "Shirayuki",
            ndurl: 'https://youtu.be/P4lLk78GpX0?si=MV0ZTnLb_3s9x-tg',
            ndpic: require('../assets/images/clan/unit/Shirayuki.png'),
        },
    ];

    DATAsg = [
        {
            id: '1',
            title: "Dimension police",
            pic: require('../assets/images/clan/Dimen.png'),
            sttitle: 'Dimensional robo',
            sturl: 'https://youtu.be/3vT0BdNWVIw?si=a00SFIk0CzFiKw14',
            stpic: require('../assets/images/clan/unit/Daikaiser.png'),
            ndtitle: "Original Zero",
            ndurl: 'https://youtu.be/CZpTLVsnfMc?si=hFzFP7RlXl0ub7D4',
            ndpic: require('../assets/images/clan/unit/Zero.png'),
        },
        {
            id: '2',
            title: "Nova grappler",
            pic: require('../assets/images/clan/Dimen.png'),
            sttitle: 'Raizer',
            sturl: 'https://youtu.be/Lp3Mqa3JQBA?si=6kZaRFZvWsw5uNSC',
            stpic: require('../assets/images/clan/unit/Raizer.png'),
            ndtitle: "Exxtreme battlere",
            ndurl: 'https://youtu.be/NTXw6L_R0sQ?si=_GX4vnqJK2SMGf_y',
            ndpic: require('../assets/images/clan/unit/Victor.png'),
        },
        {
            id: '3',
            title: "Link joker",
            pic: require('../assets/images/clan/Link.png'),
            sttitle: 'Star-vader',
            sturl: 'https://youtu.be/7wPLUK8uKaM?si=zISwR2sf8Fw3LhLd',
            stpic: require('../assets/images/clan/unit/Starvader.png'),
            ndtitle: "Messiah",
            ndurl: 'https://youtu.be/9xD6ojkJt5A?si=AzJZVwUEk-QCNUdJ',
            ndpic: require('../assets/images/clan/unit/Messiah.png'),
        },
    ];

    DATAz = [
        {
            id: '1',
            title: "Great nature",
            pic: require('../assets/images/clan/Great.png'),
            sttitle: 'Hamsuke',
            sturl: 'https://youtu.be/NyYe-wfbeYc?si=m3TlB8am7nv078yX',
            stpic: require('../assets/images/clan/unit/Hamsuke.png'),
            ndtitle: "Isabelle",
            ndurl: 'https://youtu.be/B6cY0CKkGxM?si=wtZiP9fdmNkL3-Yb',
            ndpic: require('../assets/images/clan/unit/Isabelle.png'),
        },
        {
            id: '2',
            title: "Megacolony",
            pic: require('../assets/images/clan/Mega.png'),
            sttitle: 'Gunning coleo',
            sturl: 'https://youtu.be/rEChfcqYFa0?si=EYDXHHBBbObd4q0w',
            stpic: require('../assets/images/clan/unit/Gunning.png'),
            ndtitle: "Machining",
            ndurl: 'https://youtu.be/iGh9J0JCmQ8?si=KeOvjs8V0mxM_wMr',
            ndpic: require('../assets/images/clan/unit/Machining.png'),
        },
        {
            id: '3',
            title: "Neo nectar",
            pic: require('../assets/images/clan/neo.png'),
            sttitle: 'Musketeer',
            sturl: 'https://youtu.be/xxCN2FRmnUs?si=He6Zuz-XGUPbZEYf',
            stpic: require('../assets/images/clan/unit/Vera.png'),
            ndtitle: "Ahsha",
            ndurl: 'https://youtu.be/DtqrYwElnD4?si=4HH0UKBNrpnEAt3T',
            ndpic: require('../assets/images/clan/unit/Ahsha.png'),
        },
    ];

    const numColumns = 2;

    const Item = ({ title, pic, sttitle, sturl, ndtitle, ndurl, stpic, ndpic }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Vdetail', { title, pic, sttitle, sturl, stpic, ndtitle, ndurl, ndpic })}>
            <View style={styles.Vitem}>
                <Image style={styles.clanimg} source={pic} />
                <Text style={styles.Vtext}>{title}</Text>
            </View>
        </TouchableOpacity>

    );
    return (
        <ScrollView>       
            <Text style={[styles.label, styles.uscolor]}>United state</Text>
            <FlatList
                style={styles.usflatlist}
                data={DATAus}
                renderItem={({ item }) => <Item
                    pic={item.pic}
                    title={item.title}
                    sttitle={item.sttitle}
                    sturl={item.sturl}
                    stpic={item.stpic}
                    ndtitle={item.ndtitle}
                    ndurl={item.ndurl}
                    ndpic={item.ndpic}
                />
                }
                keyExtractor={item => item.id}
                numColumns={numColumns}
            />
            <Text style={[styles.label, styles.dscolor]}>Darkzone</Text>
            <FlatList
                style={styles.dsflatlist}
                data={DATAds}
                renderItem={({ item }) => <Item
                    pic={item.pic}
                    title={item.title}
                    sttitle={item.sttitle}
                    sturl={item.sturl}
                    stpic={item.stpic}
                    ndtitle={item.ndtitle}
                    ndurl={item.ndurl}
                    ndpic={item.ndpic}
                />
                }
                keyExtractor={item => item.id}
                numColumns={numColumns}
            />
            <Text style={[styles.label, styles.mgcolor]}>Magallaniga</Text>
            <FlatList
                style={styles.mgflatlist}
                data={DATAmg}
                renderItem={({ item }) => <Item
                    pic={item.pic}
                    title={item.title}
                    sttitle={item.sttitle}
                    sturl={item.sturl}
                    stpic={item.stpic}
                    ndtitle={item.ndtitle}
                    ndurl={item.ndurl}
                    ndpic={item.ndpic}
                />
                }
                keyExtractor={item => item.id}
                numColumns={numColumns}
            />
            <Text style={[styles.label, styles.decolor]}>Dragon empire</Text>
            <FlatList
                style={styles.deflatlist}
                data={DATAde}
                renderItem={({ item }) => <Item
                    pic={item.pic}
                    title={item.title}
                    sttitle={item.sttitle}
                    sturl={item.sturl}
                    stpic={item.stpic}
                    ndtitle={item.ndtitle}
                    ndurl={item.ndurl}
                    ndpic={item.ndpic}
                />
                }
                keyExtractor={item => item.id}
                numColumns={numColumns}
            />
            <Text style={[styles.label, styles.sgcolor]}>Star gate</Text>
            <FlatList
                style={styles.sgflatlist}
                data={DATAsg}
                renderItem={({ item }) =>
                    <Item
                        pic={item.pic}
                        title={item.title}
                        sttitle={item.sttitle}
                        sturl={item.sturl}
                        stpic={item.stpic}
                        ndtitle={item.ndtitle}
                        ndurl={item.ndurl}
                        ndpic={item.ndpic}
                    />
                }
                keyExtractor={item => item.id}
                numColumns={numColumns}
            />
            <Text style={[styles.label, styles.zcolor]}>Zoo</Text>
            <FlatList
                style={styles.zflatlist}
                data={DATAz}
                renderItem={({ item }) =>
                    <Item
                        pic={item.pic}
                        title={item.title}
                        sttitle={item.sttitle}
                        sturl={item.sturl}
                        stpic={item.stpic}
                        ndtitle={item.ndtitle}
                        ndurl={item.ndurl}
                        ndpic={item.ndpic}
                    />
                }
                keyExtractor={item => item.id}
                numColumns={numColumns}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    FlatList: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#BCE7F7',
    },
    item: {
        backgroundColor: '#54C1E8',
        padding: 20,
        marginTop: 20,
        marginHorizontal: 16,
        width: 'auto',
        borderRadius: 20
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white'
    },
    Atitle: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 7,
        color: 'white'
    },
    img: {
        width: 270,
        height: 120,
    },
    flag: {
        width: 'auto',
        height: 150,
        borderRadius: 5
    },
    sublabel: {
        fontSize: 20,
        padding: 14,
        fontWeight: 'bold'
    },
    secondtitle: {
        fontsize: 20,
    },
    usflatlist: {
        backgroundColor: '#fef2cc',
        padding: 3,

    },
    dsflatlist: {
        backgroundColor: '#e4d1e7',

    },
    mgflatlist: {
        backgroundColor: '#d2d2e7',
        padding: 3,
    },
    deflatlist: {
        backgroundColor: '#f4d1d2',
        padding: 3,
        flex: 1

    },
    sgflatlist: {
        backgroundColor: '#e9e7e6',
        padding: 3,
        flex: 1

    },
    zflatlist: {
        backgroundColor: '#ccebda',
        padding: 3,
        flex: 1

    },
    clanimg: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        borderRadius: 5
    },
    Vitem: {
        backgroundColor: '#d4d3d2',
        marginVertical: 8,
        marginHorizontal: 8,
        padding: 3,
        width: 'auto',
        borderWidth: 2,
        borderRadius: 5,
    },
    Vtext: {
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: 'bold'
    },
    label: {
        textAlign: 'center',
        padding: 10,
        width: '100%',
        fontSize: 20,
        fontWeight: 'bold'
    },
    uscolor: {
        backgroundColor: '#fabe01',
        color: 'white'
    },
    dscolor: {
        backgroundColor: '#791a85',
        color: 'white'
    },
    mgcolor: {
        backgroundColor: '#1d2088',
        color: 'white'
    },
    decolor: {
        backgroundColor: '#c8171e',
        color: 'white'
    },
    sgcolor: {
        backgroundColor: '#908882',
        color: 'white'
    },
    zcolor: {
        backgroundColor: '#009a44',
        color: 'white'
    },
});