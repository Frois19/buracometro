import React from 'react';

import world from '../assets/world.png'
import car from '../assets/car.png'

import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function SelectMapPosition() {

  const navigation = useNavigation();

  function handleStart(){

    navigation.navigate('Presentation');

  }

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.wrapper}>

        <Image source={world}  style={styles.imageWorld} resizeMode="contain"/>

        <Text style={styles.title}>
            {'\n'}Melhore {'\n'}
            a qualidade{'\n'}
            das ruas{'\n'}
            da cidade
        </Text>

        <Text style={styles.subtitle}>
          Registre os buracos {'\n'}
          que você encontrar!
          

        </Text>

        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleStart}>
 
           <Feather name="chevron-right" style={styles.buttonIcon} />
           
        </TouchableOpacity>

        <Image source={car}  style={styles.imageCar} resizeMode="contain"/>

      </View>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginTop: 10
  },

  imageWorld: {
    height: Dimensions.get('window').width * 0.6
  },

  title: {
    fontFamily: 'Nunito_700Bold',
    color: '#0089A5',
    fontSize: 48,
    lineHeight: 48,
    right: 5,
  },

  subtitle: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#0089A5',
    right: 35,
    fontSize: 20,
    lineHeight: 30,
    paddingHorizontal: 30,
  },

  button: {
    backgroundColor: '#D1EDF2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: 56,
    width: 56,
    left: 110
  },

  buttonIcon: {
     fontSize: 32,
     color: '#15B6D6',
  },

  imageCar: {
    right: 115,
    bottom: 40,
  }

})