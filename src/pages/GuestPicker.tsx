import { Text, TouchableOpacity, SafeAreaView, Modal, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Color } from '../Types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';



export default function GuestPicker() {

    const [count, setCount] = useState(0)
    const [guestCount, setGuestCount] = useState(0)

    const increaseCount = () => {
        setCount((preCount) => preCount + 1)
    }

    const decreaseCount = () => {
        if (count > 0) {
            setCount((preCount) => preCount - 1)
        } else {
            return 0;
        }

    }


    const increaseGuest = () => {
        setGuestCount((preGuest) => preGuest + 1)
    }

    const decreaseGuest = () => {
        if (guestCount > 0) {
            setGuestCount((preGuest) => preGuest - 1)
        } else {
            0
        }
    }



    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Misafirler",
            headerBackTitle: "Geri",
            headerTitleStyle: {
                fontSize: 18,
                fontWeight: "bold"
            }
        })
    })

    return (
        <SafeAreaView style={{ backgroundColor: Color.navyBlue, flex: 1 }}>
            <View style={{ gap: 20, marginTop: 70, borderBottomWidth: 1, borderBottomColor: "gray", width: "100%", height: 120 }}>
                <View style={{ marginTop: 10, marginLeft: 10, flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ color: "#fff", fontSize: 18 }}>Yetişkin</Text>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flexDirection: "row", width: 200, paddingLeft: 70 }}>
                            <TouchableOpacity onPress={increaseCount}>
                                <AntDesign name="pluscircleo" size={24} color="#fff" />
                            </TouchableOpacity>
                            <Text style={{ color: "#fff", fontSize: 18, marginRight: 20, marginLeft: 20 }}>{count}</Text>
                            <TouchableOpacity onPress={decreaseCount}>
                                <Feather name="minus-circle" size={24} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 10, marginLeft: 10, flexDirection: "row" }}>
                    <Text style={{ color: "#fff", fontSize: 18 }}>Çocuk</Text>
                    <Text style={{ color: "#fff", fontSize: 18 }}>(0-17 yaşında)</Text>
                    <View style={{ flexDirection: "row", width: 200, paddingLeft: 134 }}>
                        <TouchableOpacity onPress={increaseGuest}>
                            <AntDesign name="pluscircleo" size={24} color="#fff" />
                        </TouchableOpacity>
                        <Text style={{ color: "#fff", fontSize: 18, marginRight: 20, marginLeft: 20 }}>{guestCount}</Text>
                        <TouchableOpacity onPress={decreaseGuest}>
                            <Feather name="minus-circle" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={{ marginTop: 100, justifyContent: "center", alignItems: "center", height: 60, borderRadius: 10, width: "90%", marginLeft: 22, backgroundColor: "#8baaad" }}
                    onPress={() => {
                        navigation.goBack()
                    }}>
                    <Text style={{ color: "#fff", fontSize: 20, fontWeight: 600 }}>Tamam</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}