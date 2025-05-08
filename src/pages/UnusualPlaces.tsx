import { View, Text, SafeAreaView, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Color } from '../Types'
import { Opportunities } from '../Datas/MockDataOpportunities'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Unusual } from '../Datas/MockDataUnusualPlaces';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export default function UnusualPlaces() {
    const navigate = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.navyBlue }}>
            <FlatList
                data={Unusual}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        navigate.navigate("UnusualPlacesDetail", { id: item.id })
                    }}>
                        <View style={{ width: "93%", marginTop: 20, height: 300, marginLeft: 15, borderRadius: 20, flexDirection: "row", borderColor: "gray", borderWidth: 1 }}>
                            <Image source={{ uri: item.image }} style={{ width: "50%", height: 300, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }} />
                            <View style={{ marginLeft: 15, gap: 12, marginTop: 10, }}>
                                <Text style={{ fontSize: 18, fontWeight: 500, marginTop: 10, color: "#fff" }}>{item.name}</Text>
                                <Text style={{ color: "#fff" }}>{item.location}</Text>
                                <View style={{ flexDirection: "row" }}>
                                    {
                                        item.available === "Her şey dahil" ?
                                            <Octicons name="infinity" size={15} color="#fff" /> :
                                            <FontAwesome5 name="spa" size={15} color="#fff" />
                                    }
                                    <Text style={{ color: "#fff", marginLeft: 4 }}>{item.available}</Text>
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