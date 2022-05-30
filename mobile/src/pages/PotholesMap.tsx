import { Feather } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Alert, Dimensions, StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import mapMarker from "../images/map-marker.png";
import api from "../services/api";

interface Pothole {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function PotholesMap() {
  const navigation = useNavigation();
  const [potholes, setPotholes] = useState<Pothole[]>([]);
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0, 0,
  ]);

  useFocusEffect(() => {
    
    api.get("potholes").then((response) => {
      setPotholes(response.data);
    }).catch(console.error) ;
  });

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestBackgroundPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Ops!",
          "Precisamos de sua permissão para obter a localização"
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      setInitialPosition([latitude, longitude]);
    }
    loadPosition();
  }, []);

  function handleNavigateToPotholeDetails(id: number) {
    console.log(id);
    navigation.navigate("PotholeDetails", { id });
  }

  function handleNavigateToTutorial() {
    navigation.navigate("Tutorial");
  }

  return (
    <View style={styles.container}>
      {initialPosition[0] !== 0 && (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          loadingEnabled={initialPosition[0] == 0}
          initialRegion={{
            latitude: initialPosition[0],
            longitude: initialPosition[1],
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
        >
          {potholes.map((pothole) => {
            return (
              <Marker
                key={pothole.id}
                icon={mapMarker}
                calloutAnchor={{
                  x: 2.7,
                  y: 0.8,
                }}
                coordinate={{
                  latitude: pothole.latitude,
                  longitude: pothole.longitude,
                }}
              >
                <Callout
                  tooltip={true}
                  onPress={() => handleNavigateToPotholeDetails(pothole.id)}
                >
                  <View style={styles.calloutContainer}>
                    <Text style={styles.calloutText}>{pothole.name}</Text>
                  </View>
                </Callout>
              </Marker>
            );
          })}
        </MapView>
      )}

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {" "}
          {potholes.length} buracos encontrados{" "}
        </Text>

        <RectButton
          style={styles.createPotholeButton}
          onPress={handleNavigateToTutorial}
        >
          <Feather name="plus" size={20} color="#FFF" />
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  calloutContainer: {
    width: 160,
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 16,
    justifyContent: "center",
  },

  calloutText: {
    fontFamily: "Nunito_700Bold",
    color: "#0089a5",
    fontSize: 14,
  },

  footer: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: "#FFF",
    borderRadius: 20,
    height: 46,
    paddingLeft: 24,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 3,
  },

  footerText: {
    fontFamily: "Nunito_700Bold",
    color: "#8fa7b3",
  },

  createPotholeButton: {
    width: 56,
    height: 56,
    backgroundColor: "#15c3d6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
