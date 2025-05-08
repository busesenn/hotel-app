import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Color } from '../Types'
import { useNavigation } from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { auth } from '../firebaseConfig';
import { signOut } from '@firebase/auth';

export default function Profile() {
    const navigate = useNavigation()

    useLayoutEffect(() => {
        navigate.setOptions({
            title: "Hesap",
            headerTitleStyle: {
                fontSize: 18,
                fontWeight: "bold"
            }
        })
    })

    const logout = async () => {
        await signOut(auth);
        console.log("çıkış yapıldı");
        navigate.navigate("FirstPage")
    }

    return (
        <View style={{ flex: 1, backgroundColor: Color.navyBlue }}>
            <SafeAreaView>
                <View style={{ gap: 30, marginTop: 60 }}>
                    <TouchableOpacity style={{ borderBottomWidth: .5, borderBottomColor: "gray" }} onPress={() => {
                        navigate.navigate("RezervasyonGeçmişi")
                    }}>
                        <View style={{ flexDirection: "row" }}>
                            <MaterialIcons name="history" size={20} color="#fff" style={{ marginLeft: 10 }} />
                            <Text style={{ color: "#fff", marginBottom: 10, fontSize: 17, marginLeft: 10 }}>Rezervasyon geçmişi</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderBottomWidth: .5, borderBottomColor: "gray" }} onPress={() => {
                        navigate.navigate("FavsPage")
                    }}>
                        <View style={{ flexDirection: "row" }}>
                            <MaterialIcons name="favorite" size={20} color="#fff" style={{ marginLeft: 10 }} />
                            <Text style={{ color: "#fff", marginBottom: 10, fontSize: 17, marginLeft: 10 }}>Favori Oteller</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderBottomWidth: .5, borderBottomColor: "gray" }}>
                        <View style={{ flexDirection: "row" }}>
                            <Entypo name="tools" size={20} color="#fff" style={{ marginLeft: 10 }} />
                            <Text style={{ color: "#fff", marginBottom: 10, fontSize: 17, marginLeft: 10 }}>Düzenle</Text>
                        </View>
                    </TouchableOpacity >
                    <TouchableOpacity style={{ borderBottomWidth: .5, borderBottomColor: "gray" }}>
                        <View style={{ flexDirection: "row" }}>
                            <Feather name="settings" size={20} color="#fff" style={{ marginLeft: 10 }} />
                            <Text style={{ color: "#fff", marginBottom: 10, fontSize: 17, marginLeft: 10 }}>Ayarlar</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderBottomWidth: .5, borderBottomColor: "gray" }} onPress={logout}>
                        <View style={{ flexDirection: "row" }}>
                            <MaterialCommunityIcons name="exit-to-app" size={20} color="#fff" style={{ marginLeft: 10 }} />
                            <Text style={{ color: "#fff", marginBottom: 10, fontSize: 17, marginLeft: 10 }}>Çıkış</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}