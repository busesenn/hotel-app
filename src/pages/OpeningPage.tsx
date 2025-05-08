import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

export default function OpeningPage() {

    const navigate = useNavigation()

    return (
        <View>
            <Image source={{ uri: "https://i.pinimg.com/736x/92/63/b1/9263b1f3547ed19e907f815c5fc41f7a.jpg" }} style={{ height: "100%", width: "100%" }} resizeMode='cover' />
            <View style={{ position: "absolute", }}>
                <View style={{ position: "relative", marginTop: 200 }}>
                    <Text style={{ color: "#14110f", fontSize: 25, marginLeft: 15, fontWeight: 500 }}>Sizi Güzel Bir Kaçamağa Davet Ediyoruz</Text>
                    <Text style={{ color: "#14110f", fontSize: 25, marginLeft: 15 }}>Şehirden uzaklaşmak, yenilenmek ve keyif dolu anlar yaşamak istiyorsanız,hemen kayıt olun ve fırsatları kaçırmayın.</Text>
                </View>
                <TouchableOpacity style={{ marginTop: 450, padding: 15, width: "40%", marginLeft: 140, borderRadius: 10, backgroundColor: "#b5c9c3" }} onPress={() => {
                    navigate.navigate("RegisterPage")
                }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 18, marginLeft: 30 }}>Başla</Text>
                        <AntDesign name="arrowright" size={20} color="black" style={{ marginLeft: 20, marginTop: 2 }} />
                    </View>
                </TouchableOpacity>
            </View>
        </View >
    )
}