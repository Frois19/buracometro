import React from 'react';

import grandfather from '../assets/gradfather.png';
import car2 from '../assets/car2.png'

import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function Presentation() {

  const navigation = useNavigation();

  function handleStart(){

     navigation.navigate('PotholesMap');

  }

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.wrapper}>

       <Image source={grandfather} style={styles.imageKids} resizeMode="contain" />

       <Text style={styles.title}>

         Escolha um {'\n'}
         buraco no mapa {'\n'}
         e veja as informações

       </Text>

       <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleStart}>

         <Feather name="chevron-right" style={styles.buttonIcon}/>

       </TouchableOpacity>

       <Image source={car2} style={styles.imageCar} resizeMode="contain"/>

      </View>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },

  imageKids: {
    height: Dimensions.get('window').width * 0.5,
    marginBottom: 20
  },

  title: {
    fontFamily: 'Nunito_700Bold',
    color: '#0089A5',
    fontSize: 30,
    lineHeight: 36,
    textAlign: 'right',
    left: 15,
  },

  button: {
    backgroundColor: '#D1EDF2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: 56,
    width: 56,
    left: 110,
    marginTop: 30
  },

  buttonIcon: {
    fontSize: 32,
    color: '#15B6D6',
  },

  imageCar: {
    right: 115,
    bottom: 27,
  }

})