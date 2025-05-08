import { View, Text, FlatList, SafeAreaView, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { getDocs, collection } from "firebase/firestore";
import { db } from '../firebaseConfig';
import { Color } from '../Types';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import { Alert } from 'react-native';
import { removeFromReservations } from '../redux/RezervasyonSlice';
import { useAppDispatch, useAppSelector } from '../redux/app/hooks'


export default function RezervasyonGeçmişi() {
    const navigate = useNavigation()
    const [reservations, setReservations] = useState([])

    useLayoutEffect(() => {
        navigate.setOptions({
            title: "Rezervasyon Geçmişi",
            headerTitleStyle: {
                fontSize: 18,
                fontWeight: "bold"
            }
        })

    })

    const fetchReservations = async () => {
        const reservationsRef = collection(db, "reservations");
        const snapshot = await getDocs(reservationsRef);
        const data = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        return data
    }
    useEffect(() => {
        const getData = async () => {
            const data = await fetchReservations();
            setReservations(data)
        }
        getData()
    }, [])

    const formatDate = (isoDate: string | number | Date) => {
        return new Date(isoDate).toLocaleDateString("tr-TR")
    }


    return (
        <View style={{ flex: 1, backgroundColor: Color.navyBlue }}>
            <SafeAreaView>
                {
                    reservations.length === 0 ? (
                        <View style={{ alignItems: "center", marginTop: 200 }}>
                            <Entypo name="emoji-sad" size={50} color="gray" />
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Otel rezervasyon geçmişiniz yok</Text>
                            </View>
                        </View>
                    ) : (
                        <FlatList
                            data={reservations}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={{ gap: 20, borderBottomWidth: .5, borderBottomColor: "gray", paddingBottom: 20 }}>
                                    <View style={{ marginTop: 30, }}>
                                        <Text style={{ color: "#fff", marginLeft: 15, fontSize: 16 }}>Otel Adı: {item.hotelName}</Text>
                                    </View>
                                    <View style={{ position: "absolute" }}>
                                        <TouchableOpacity style={{ position: "relative", left: 400, top: 10 }}>
                                            <Entypo name="cross" size={30} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginTop: 10, }}>
                                        <Text style={{ color: "#fff", marginLeft: 15, fontSize: 16 }}>Giriş Tarihi: {formatDate(item.checkIn)}</Text>
                                    </View>
                                    <View style={{ marginTop: 10 }}>
                                        <Text style={{ color: "#fff", marginLeft: 15, fontSize: 16 }}>Çıkış Tarihi: {formatDate(item.checkOut)}
                                        </Text>
                                    </View>
                                </View>
                            )}
                        />
                    )
                }

            </SafeAreaView>
        </View>
    )
}

