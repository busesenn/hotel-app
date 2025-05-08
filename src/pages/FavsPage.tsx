import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks'
import Entypo from 'react-native-vector-icons/Entypo'
import { Color } from '../Types'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { removeFavorite } from '../redux/FavoritesSlice'


export default function FavsPage() {
    const dispatch = useAppDispatch()
    const favorites = useAppSelector((state) => state.FavoritesSlice.favorites)

    const toggleFavorite = (hotelId: string) => {
        dispatch(removeFavorite(hotelId))
        Alert.alert("Otel favorilerden çıkarıldı")
    }
    return (
        <View style={{ flex: 1, backgroundColor: Color.navyBlue }}>
            <SafeAreaView>
                {
                    favorites.length === 0 ? (
                        <View style={{ alignItems: "center", marginTop: 200 }}>
                            <Entypo name="emoji-sad" size={50} color="gray" />
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Favori oteliniz yok</Text>
                            </View>
                        </View>
                    ) : (
                        <ScrollView>
                            {favorites.map((hotel) => (
                                <View style={{ flexDirection: "row", gap: 20, marginTop: 20, height: 320, borderBottomColor: "gray", borderBottomWidth: 1 }}>
                                    <View style={{ borderRadius: 10, marginLeft: 20 }}>
                                        <Image key={hotel.id} source={{ uri: hotel.image }} style={{ width: 200, height: 300, borderRadius: 10, }} />
                                    </View>
                                    <View style={{ position: "absolute" }}>
                                        <TouchableOpacity style={{ position: "relative", height: 35, width: 35, left: 400 }} onPress={() => toggleFavorite(hotel.id)}>
                                            <Entypo name="cross" size={30} color="black" />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ gap: 20, marginTop: 30 }}>
                                        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>{hotel.name}</Text>
                                        <View style={{ flexDirection: "row" }}>
                                            <FontAwesome6 name="location-dot" size={14} color="gray" style={{ marginTop: 2 }}
                                            />
                                            <Text style={{ color: "#fff", fontSize: 16, marginLeft: 5 }}>{hotel.location}</Text>
                                        </View>
                                        <Text style={{ color: "#fff", fontSize: 16 }}>{(hotel.price).toFixed(3)} TL</Text>
                                        <Text style={{ color: "#fff", fontSize: 16 }}>{hotel.available}</Text>
                                    </View>

                                </View>
                            ))}
                        </ScrollView>
                    )
                }
            </SafeAreaView >
        </View>
    )
}