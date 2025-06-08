import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Button, Alert, Modal, Pressable,Image } from 'react-native';
import { Homescreen } from './screen/Homescreen';
import { DeckprofileScreen, VanDScreen,VanVScreen,AnimeScreen } from './screen/Menuscreen';
import { DdetailScreen,VdetailScreen, AnimeVDetailScreen ,AnimeDDetailScreen} from './screen/Detailscreen';

const Loginscreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = () => {
    
    if (username == 'user' && password == '1234') {
      navigation.navigate('Home');
    } else {
      setModalVisible(true);
    }
  };
  return (
    <View style={styles.container}>
      <Image
      style = {styles.loginlogo}
      source={require('./assets/images/logo.png')}
      />
      <Text style={styles.labelStyle}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder='enter username'
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder='enter password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button
        color='#103796'
        title='Login'
        onPress={handleLogin}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
           <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.alertStyle}>ลองอีกครั้ง</Text>
              </Pressable>
            </View>
          </View>
      </Modal>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Loginscreen} options={{ title: 'Login' }}/>
        <Stack.Screen name='Home' component={Homescreen} options={{ title: 'เมนูหลัก' }}/>
        <Stack.Screen name='Deck' component={DeckprofileScreen} options={{ title: 'เลือกฟอร์แมต' }}/>
        <Stack.Screen name='Anime' component={AnimeScreen} options={{ title: 'เลือกภาค' }}/>
        <Stack.Screen name='AnimeV' component={AnimeVDetailScreen} options={{ title: 'แวนการ์ด วี ไดเมนชัน' }}/>
        <Stack.Screen name='AnimeD' component={AnimeDDetailScreen} options={{ title: 'แวนการ์ด โอเวอร์เดรส' }}/>
        <Stack.Screen name='VanD' component={VanDScreen} options={{ title: 'เลือกเนชั่นที่ต้องการ' }}/>
        <Stack.Screen name='VanV' component={VanVScreen} options={{ title: 'เลือกแคลนที่ต้องการ' }}/>
        <Stack.Screen name='Ddetail' component={DdetailScreen} options={{ title: '' }}/>
        <Stack.Screen name='Vdetail' component={VdetailScreen} options={{ title: '' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCE7F7',
    alignItems: 'center',
    justifyContent: 'top',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff'
  },
  loginBTN: {
    backgroundColor: '#103796',
    width: 60,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 40,
  },
  buttonClose: {
    backgroundColor: '#0F388E',
  },
  labelStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    marginTop:30
  },
  modalText:{
    margin: 20,
    fontSize: 30,
    textAlign: 'center',
  },
  loginlogo:{
    width:300,
    height:300,
    paddingTop:20
  },
  alertStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;