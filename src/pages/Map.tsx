import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native'
import { Markers } from "../Markers"


export default function Map() {
    const mapRef = useRef(null)
    const [delta, setDelta] = useState(0.1)
    const navigate = useNavigation()
    const [region, setRegion] = useState({
        latitude: 39.9208,
        longitude: 32.8541,
        latitudeDelta: 10,
        longitudeDelta: 10
    })

    const zoomIn = () => {
        const newDelta = delta / 2;
        setDelta(newDelta);
        mapRef.current?.animateToRegion({
            latitude: 39.9208,
            longitude: 32.8541,
            latitudeDelta: newDelta,
            longitudeDelta: newDelta,
        }, 300);
    };

    const zoomOut = () => {
        const newDelta = delta * 2;
        setDelta(newDelta);
        mapRef.current?.animateToRegion({
            latitude: 39.9208,
            longitude: 32.8541,
            latitudeDelta: newDelta,
            longitudeDelta: newDelta,
        }, 300);
    };


    return (
        <SafeAreaView>
            <MapView initialRegion={region} style={{ width: "100%", height: "100%" }}
                ref={mapRef}
                onRegionChange={(region) => setRegion(region)}>
                <TouchableOpacity onPress={() => {
                    navigate.goBack("MainPage")
                }}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/271/271220.png" }} style={{ width: 20, height: 25, marginTop: 10, marginLeft: 10 }} />
                </TouchableOpacity>
                {Markers.map((marker) => (
                    <Marker
                        key={marker.id}
                        coordinate={marker.coordinate}
                        title={marker.title}
                    />
                ))}
                <View style={{ position: "absolute", bottom: 24, right: 20, backgroundColor: "#daddd8", padding: 16, borderRadius: 10, paddingVertical: 15, }}>
                    <TouchableOpacity style={{ marginBottom: 8 }} onPress={zoomIn}>
                        <Text style={{ textAlign: "center", fontSize: 20 }}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={zoomOut}>
                        <Text style={{ textAlign: "center", fontSize: 20 }}>-</Text>
                    </TouchableOpacity>
                </View>
            </MapView>
        </SafeAreaView>
    )
}