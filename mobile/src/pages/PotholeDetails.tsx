import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Dimensions, Image, Linking, ScrollView, StyleSheet, Text, View
} from "react-native";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import mapMarkerImg from "../images/map-marker.png";
import api from "../services/api";


interface PotholeDetailsRouteParams {
  id: number;
}

interface Pothole {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  description: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}

export default function PotholeDetails() {
  const route = useRoute();
  const [pothole, setPothole] = useState<Pothole>();

  const navigation = useNavigation();

  const params = route.params as PotholeDetailsRouteParams;

  useEffect(() => {
    api.get(`potholes/${params.id}`).then((response) => {
      setPothole(response.data);
    });
  }, [params.id]);

  if (!pothole) {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Carregando...</Text>
      </View>
    );
  }

  function handleOpenGoogleMapRoutes() {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${pothole?.latitude}, ${pothole?.longitude}`
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagesContainer}>
        <ScrollView horizontal pagingEnabled>
          {pothole.images.map((image) => {
            return (
              <Image
                key={image.id}
                style={styles.image}
                source={{ uri: image.url }}
              />
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{pothole.name}</Text>
        <Text style={styles.description}>{pothole.description}</Text>

        <View style={styles.mapContainer}>
          <MapView
            initialRegion={{
              latitude: pothole.latitude,
              longitude: pothole.longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={styles.mapStyle}
          >
            <Marker
              icon={mapMarkerImg}
              coordinate={{
                latitude: pothole.latitude,
                longitude: pothole.longitude,
              }}
            />
          </MapView>

          <TouchableOpacity
            onPress={handleOpenGoogleMapRoutes}
            style={styles.routesContainer}
          >
            <Text style={styles.routesText}>Ver rotas no Google Maps</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagesContainer: {
    height: 240,
  },

  image: {
    width: Dimensions.get("window").width,
    height: 240,
    resizeMode: "cover",
  },

  detailsContainer: {
    padding: 24,
  },

  title: {
    color: "#4D6F80",
    fontSize: 30,
    fontFamily: "Nunito_700Bold",
  },

  description: {
    fontFamily: "Nunito_600SemiBold",
    color: "#5c8599",
    lineHeight: 24,
    marginTop: 16,
  },

  mapContainer: {
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1.2,
    borderColor: "#B3DAE2",
    marginTop: 40,
    backgroundColor: "#E6F7FB",
  },

  mapStyle: {
    width: "100%",
    height: 150,
  },

  routesContainer: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  routesText: {
    fontFamily: "Nunito_700Bold",
    color: "#0089a5",
  },

  separator: {
    height: 0.8,
    width: "100%",
    backgroundColor: "#D3E2E6",
    marginVertical: 40,
  },

});
