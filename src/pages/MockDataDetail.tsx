import { View, Text, Image, TouchableOpacity, Modal, ScrollView, Button, Alert } from 'react-native'
import { Color } from '../Types'
import { useNavigation, useRoute } from '@react-navigation/native';
import { hotels } from '../Datas/MockData';
import React, { useLayoutEffect, useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker"
import Entypo from 'react-native-vector-icons/Entypo';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import { addFavorite, clearFavorite, removeFavorite } from '../redux/FavoritesSlice';


export default function MockDataDetail() {
    const navigate = useNavigation()
    const route = useRoute();
    const { id } = route.params

    const selectedHotel = hotels.find((hotel) => hotel.id === id);


    const dispatch = useAppDispatch()
    const favorites = useAppSelector((state) => state.FavoritesSlice.favorites)

    const isFavorite = favorites.some(h => h.id === selectedHotel?.id)

    const toogleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFavorite(selectedHotel?.id))
            Alert.alert("Otel favorilerden çıkarıldı")
        } else {
            dispatch(addFavorite(selectedHotel))
            Alert.alert("Otel favorilere eklendi")
        }
    }
    useLayoutEffect(() => {
        navigate.setOptions({
            title: selectedHotel?.name,
            headerBackTitle: "Geri",
            headerTitleStyle: {
                fontSize: 18,
                fontWeight: "bold"
            }
        })
    }, [navigate, selectedHotel])

    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [showCheckIn, setShowCheckIn] = useState(false);
    const [showCheckOut, setShowCheckOut] = useState(false);
    const [date, setDate] = useState("30/05/2025")

    const [selectedDate, setSelectedDate] = useState(new Date())

    const handleReservation = async () => {
        try {
            await addDoc(collection(db, 'reservations'), {
                hotelId: selectedHotel?.id,
                hotelName: selectedHotel?.name,
                createdAt: new Date().toISOString(),
                checkIn: checkInDate.toISOString(),
                checkOut: checkOutDate.toISOString(),
            });
            Alert.alert('Başarılı', 'Otel rezervasyonu kaydedildi');
        } catch (error) {
            Alert.alert('Hata', 'Kaydedilemedi');
        }
    };



    return (
        <ScrollView style={{ flex: 1, backgroundColor: Color.navyBlue }}>
            <View style={{ marginTop: 20 }}>
                <Image source={{ uri: selectedHotel?.image }} style={{
                    width: "95%", height: 350, alignSelf: "center", borderBottomRightRadius: 30,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    borderWidth: 1, borderColor: "gray"
                }} />
            </View>
            <View style={{ position: "absolute" }}>
                <TouchableOpacity style={{ height: 35, width: 35, borderRadius: 100, backgroundColor: Color.navyBlue, position: "relative", left: 380, top: 30, }}
                    onPress={toogleFavorite}>
                    <MaterialIcons name="favorite-border" size={26} color="#ff5e5b" style={{ marginTop: 5, alignSelf: "center", }} />
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 30 }}>
                <View style={{ flexDirection: "row" }}>
                    <AntDesign name="check" size={22} color="#20bf55" style={{ marginLeft: 20 }} />
                    <Text style={{ color: "#20bf55", marginLeft: 8, fontSize: 15 }}>Tümüyle geri ödemeli</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <AntDesign name="check" size={22} color="#20bf55" style={{ marginLeft: 20 }} />
                    <Text style={{ color: "#20bf55", marginLeft: 8, fontSize: 15 }}>Şimdi rezervasyon yapın, daha sonra ödeyin</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                    <FontAwesome name="star" size={15} color="#ffed66" style={{ marginLeft: 20 }} />
                    <FontAwesome name="star" size={15} color="#ffed66" style={{ marginLeft: 10 }} />
                    <FontAwesome name="star" size={15} color="#ffed66" style={{ marginLeft: 10 }} />
                    <FontAwesome name="star" size={15} color="#ffed66" style={{ marginLeft: 10 }} />
                    <FontAwesome name="star" size={15} color="#ffed66" style={{ marginLeft: 10 }} />
                </View>
            </View>
            <View style={{ width: 50, height: 30, marginLeft: 20, marginTop: 25, borderRadius: 5, backgroundColor: "#70798c" }}>
                <Text style={{ color: "#fff", textAlign: "center", marginTop: 5, fontSize: 15 }}>{selectedHotel?.rating}</Text>
            </View>
            <View style={{ marginTop: 25, marginLeft: 20, flexDirection: "row" }}>
                <Text style={{ fontSize: 15, color: "#ADD8E6", fontWeight: 600 }}>Bu konaklama yeri hakkında</Text>
                <MaterialIcons name="keyboard-arrow-right" size={20} color="#fff" style={{ marginLeft: 8 }} />
            </View>
            <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 20, }}>
                <MaterialIcons name="pool" size={20} color="#fff" />
                <Text style={{ color: "#fff", marginLeft: 10 }}>{selectedHotel?.available}</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 15, marginLeft: 20 }}>
                <FontAwesome5 name="parking" size={20} color="#fff" />
                <Text style={{ color: "#fff", marginLeft: 10 }}>Ücretsiz Otopark</Text>
            </View>

            <View style={{ marginTop: 10, padding: 20 }}>
                <View style={{ borderWidth: 1, borderColor: "gray", padding: 5, borderRadius: 10 }}>
                    <View style={{ flexDirection: "row", marginLeft: 10 }}>
                        <Entypo name="calendar" size={18} color="#fff" style={{ marginTop: 10, }} />
                        <Text style={{ marginVertical: 10, fontSize: 17, color: "#fff", marginLeft: 10 }}>Check-in Tarihi:</Text>
                    </View>
                    <Button title={checkInDate.toDateString()} onPress={() => setShowCheckIn(true)} />
                    {showCheckIn && (
                        <DateTimePicker
                            value={checkInDate}
                            mode="date"
                            onChange={(e, date) => {
                                setShowCheckIn(false);
                                if (date) setCheckInDate(date);
                            }}
                        />
                    )}
                </View>
            </View>

            <View style={{ borderWidth: 1, borderColor: "gray", borderRadius: 10, marginTop: 10, padding: 5, marginLeft: 20, marginRight: 20 }}>
                <View style={{ flexDirection: "row", marginLeft: 10, paddingVertical: 6 }}>
                    <Entypo name="calendar" size={18} color="#fff" style={{ marginTop: 5, }} />
                    <Text style={{ marginVertical: 5, fontSize: 17, color: "#fff", marginLeft: 10 }}>Check-out Tarihi:</Text>
                </View>

                <Button title={checkOutDate.toDateString()} onPress={() => setShowCheckOut(true)}
                />
                {showCheckOut && (
                    <DateTimePicker
                        value={checkOutDate}
                        mode="date"
                        onChange={(e, date) => {
                            setShowCheckOut(false);
                            if (date) setCheckOutDate(date);
                        }}
                    />
                )}
            </View>


            <View style={{ marginLeft: 20, marginTop: 20, borderWidth: 1, borderColor: "gray", padding: 10, width: "90%", gap: 5, flexDirection: "row", borderRadius: 10 }}>
                <FontAwesome name="user" size={24} color="#fff" style={{ marginTop: 5, marginLeft: 5 }} />
                <View style={{ marginLeft: 5 }}>
                    <TouchableOpacity onPress={() => navigate.navigate("GuestPicker")}>
                        <Text style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>Misafir Sayısı</Text>
                        <Text style={{ color: "gray", fontSize: 18 }}>1 oda,2 misafir</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={{ marginTop: 40, justifyContent: "center", alignItems: "center", height: 60, borderRadius: 10, width: "90%", marginLeft: 22, backgroundColor: "#8baaad" }} onPress={handleReservation}>
                <Text style={{ color: "#fff", fontSize: 20, fontWeight: 600 }}>Rezervasyon oluştur</Text>
            </TouchableOpacity>
        </ScrollView >
    )
}