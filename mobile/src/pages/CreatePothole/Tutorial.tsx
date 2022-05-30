import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import hand from '../../assets/hand.png';



export default function Tutorial() {

  const navigation = useNavigation();

  function handleNavigateToCreateAsylum() {

    navigation.navigate('SelectMapPosition')

  }

  return (

    <SafeAreaView style={styles.container} >

      <RectButton style={styles.button} onPress={handleNavigateToCreateAsylum}>

        <MapView
          initialRegion={{
            latitude: -19.9401644,
            longitude: -43.9341399,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
          style={styles.mapStyle}
        />

        <View style={styles.wrapper} >

          <Image source={hand} style={styles.hand} resizeMode="contain" />

          <Text style={styles.text}>
            Toque no mapa {'\n'}
           para adicionar um {'\n'}
           buraco
        </Text>


        </View>

      </RectButton>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 180,
    backgroundColor: 'rgba(21, 191, 205, 0.7)',
    position: 'relative',
  },

  hand: {
    position: 'absolute',
    top: 40,
    height: Dimensions.get('window').width * 0.8,
    zIndex: 2,
  },

  text: {
    position: 'absolute',
    fontFamily: 'Nunito_700Bold',
    color: '#FFFF',
    fontSize: 24,
    lineHeight: 34,
    textAlign: 'center',
    justifyContent: 'center',
    bottom: 200,
    zIndex: 1,
  },

  mapStyle: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  button: {

  },

  buttonIcon: {

  }

})