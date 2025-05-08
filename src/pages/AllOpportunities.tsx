import { View, Text, SafeAreaView, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Color } from '../Types'
import { Opportunities } from '../Datas/MockDataOpportunities'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';


export default function AllOpportunities() {
    const navigate = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.navyBlue }}>
            <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 20 }}>
                <Text style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>En çok tercih edilen konumdaki oteller </Text>
                <TouchableOpacity onPress={() => {
                    navigate.navigate("Map")
                }}>
                    <Feather name="map-pin" size={20} color="#fff" style={{ marginLeft: 80 }} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={Opportunities}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        navigate.navigate("PopularHotelsDetail", { id: item.id })
                    }}>
                        <View style={{ width: "93%", marginTop: 20, height: 300, marginLeft: 15, borderRadius: 20, flexDirection: "row", borderColor: "gray", borderWidth: 1 }}>
                            <Image source={{ uri: item.image }} style={{ width: "50%", height: 300, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} />
                            <View style={{ marginLeft: 15, gap: 12, marginTop: 10, }}>
                                <Text style={{ fontSize: 18, fontWeight: 500, marginTop: 10, color: "#fff" }}>{item.name}</Text>
                                <Text style={{ color: "#fff" }}>{item.location}</Text>
                                <View style={{ flexDirection: "row" }}>
                                    {
                                        item.available === "Havuz" ?
                                            <MaterialIcons name="pool" size={15} color="#fff" /> :
                                            <MaterialIcons name="free-breakfast" size={15} color="#fff" style={{ marginTop: 2 }} />
                                    }
                                    <Text style={{ marginLeft: 4, color: "#fff" }}>{item.available}</Text>
                                </View>

                                <View style={{ height: 30, width: 45, borderRadius: 10, backgroundColor: "#20bf55" }}>
                                    <Text style={{ marginTop: 5, textAlign: "center", fontWeight: 600 }}>{item.rating}</Text>
                                </View>

                                <View>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ fontSize: 20, color: "#fff", textDecorationLine: "line-through", marginTop: 10 }}>{item.price} TL </Text>
                                        <Text style={{ color: "#fff", marginTop: 12, marginLeft: 3, fontSize: 15 }}>{(item.price * 0.7).toFixed(3)} TL </Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: "#fff", marginTop: 2, fontSize: 14 }}>Gecelik {((item.price * .7) / 2).toFixed(3)}  TL</Text>
                                        <Text style={{ color: "#fff", fontSize: 14, marginTop: 3 }}>vergiler ve ücretler dahildir</Text>
                                    </View>
                                    <View style={{ marginTop: 18, height: 30, width: 140, borderRadius: 5, backgroundColor: "purple", flexDirection: "row" }}>
                                        <MaterialIcons name="discount" size={18} color="white" style={{ marginTop: 5, marginLeft: 7 }} />
                                        <Text style={{ color: "#fff", marginLeft: 3, marginTop: 4, fontWeight: "bold", fontSize: 16 }}>%30 indirim</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}