import React from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import AsyncStorage from '@react-native-community/async-storage';

// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Image from '../assets/gaming.svg';

const OnboardingScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontWeight: 'bold',
            alignItems: 'center',
            fontSize: 30,
            color: '#20315f',
          }}>
          KEAMANAN MOTOR MADI
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={styles.image}
          source={require('../src/assets/motorcycle.png')}></Image>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#AD40AF',
          // backgroundColor: '#841584',
          padding: 20,
          width: '90%',
          borderRadius: 10,
          marginBottom: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate('Menu')}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Roboto-MediumItalic',
          }}>
          MARI KITA START :)
        </Text>
        {/* <Icon name="ios-person" size={30} color="#900" /> */}
        {/* <MaterialIcons name="arrow-forward" size={22} color="#fff" /> */}
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    // rotate: '-15deg',
    // transform: [{ rotate: '-15deg' }],
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default OnboardingScreen;
