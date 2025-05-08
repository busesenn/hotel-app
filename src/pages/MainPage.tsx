import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { Color } from '../Types';

import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { hotels } from '../Datas/MockData';
import { discoverHotels } from '../Datas/MockDataDiscover';
import { PopularPlaces } from '../Datas/MockDataPopülerYerler';


export default function MainPage() {
    const navigate = useNavigation()

    useLayoutEffect(() => {
        navigate.setOptions({
            title: ""
        })
    })


    return (
        <ScrollView style={{ flex: 1, backgroundColor: Color.navyBlue }}>
            <FlatList
                data={hotels}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ height: 460, marginLeft: 10, borderWidth: 1, borderColor: "gray", borderRadius: 20, position: "relative", marginTop: 20 }}
                        onPress={() =>
                            navigate.navigate("MockDataDetail", { id: item.id })}
                    >
                        <Image source={{ uri: item.image }}
                            style={{ width: 350, height: 250, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                        />
                        <View style={{ height: 200, backgroundColor: Color.navyBlue, gap: 10, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                            <Text style={{
                                color: "white", marginLeft: 10, fontSize: 22, fontWeight: 600, marginTop: 10
                            }}>{item.name}</Text>
                            <Text style={{ color: "white", marginLeft: 10, fontWeight: 500 }}>{item.location}</Text>
                            <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 5 }}>
                                <AntDesign name="star" size={15} color="yellow" style={{ marginTop: 1.5 }} />
                                <Text style={{ color: "white", marginLeft: 6, fontWeight: 700, fontSize: 16 }}>{item.rating}/10</Text>
                            </View>
                            <View style={{ width: 130, height: 35, flexDirection: "row", borderRadius: 10, backgroundColor: "purple", position: "absolute", bottom: 0, right: 0, top: 90, marginRight: 15 }}>
                                <MaterialIcons name="discount" size={18} color="white" style={{ marginTop: 10, marginLeft: 6 }} />
                                <Text style={{ marginTop: 9, marginLeft: 3, color: "#fff", fontSize: 16, fontWeight: "bold" }}>%20 indirim</Text>
                            </View>
                            <View style={{ marginTop: 25, marginLeft: 210 }}>
                                <Text style={{ color: "white", textDecorationLine: "line-through", fontSize: 22 }}>{(item.price).toFixed(3)} TL</Text>
                                <Text style={{ color: "white", fontSize: 16, marginTop: 5 }}> Gecelik {(item.price * 0.8).toFixed(3)} TL</Text>
                            </View>

                        </View>
                    </TouchableOpacity>

                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToAlignment={"center"}
                decelerationRate={"fast"}
            />
            <View style={{ flexDirection: "row" }}>
                <Text style={{ marginTop: 50, marginLeft: 18, color: "#ADD8E6", fontWeight: "bold", fontSize: 17 }}>Tipik konaklamanızın dışına çıkın</Text>
            </View>
            <View>
                <FlatList
                    data={discoverHotels}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{ height: 350, marginLeft: 10, marginTop: 20 }}
                            onPress={() => {
                                navigate.navigate("UnusualPlaces")
                            }}
                        >
                            <Image source={{ uri: item.image }} style={{ height: 350, width: 200, borderRadius: 20, }} resizeMode='cover'
                            />
                            <View style={{ position: "relative" }}>
                                <Text style={{ position: "absolute", bottom: 0, marginLeft: 15, marginBottom: 20, fontSize: 20, color: "#daddd8", fontWeight: "bold" }}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment={"center"}
                    decelerationRate={"fast"}
                />
            </View>

            <View style={{ marginTop: 50, marginLeft: 20 }}>
                <Text style={{ fontSize: 17, color: "#ADD8E6", fontWeight: 600, }}>Popüler tatil konaklamalarını keşfedin</Text>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: "#3399FF", fontWeight: "bold", fontSize: 18, borderBottomWidth: 2, borderBottomColor: "#ADD8E6", alignSelf: "flex-start", paddingBottom: 10 }}>
                        Plaj</Text>
                </View>
            </View>
            <FlatList
                data={PopularPlaces}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ height: 340, marginTop: 25, marginLeft: 18, borderWidth: .5, borderColor: "gray", borderRadius: 20 }}
                        onPress={() => {
                            navigate.navigate("AllOpportunities")
                        }}
                    >
                        <Image source={{ uri: item.image }} style={{ width: 370, height: 250, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                        />
                        <View style={{ marginTop: 20, marginLeft: 10, gap: 5 }}>
                            <Text style={{ color: "#fff", fontSize: 18, fontWeight: 500 }}>{item.name}</Text>
                            <Text style={{ color: "#fff", fontSize: 17, fontWeight: 500 }}>{item.location}</Text>
                        </View>
                    </TouchableOpacity>

                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToAlignment={"center"}
                decelerationRate={"fast"}
            />
            <TouchableOpacity onPress={() => {
                navigate.navigate("AllOpportunities")
            }}>
                <View style={{ flexDirection: "row", marginTop: 12, width: 240, marginLeft: 25, borderRadius: 20, }}>
                    <Text style={{ color: "#ADD8E6", fontWeight: 600, fontSize: 15, textDecorationLine: "underline" }}>Tüm fırsatları gör</Text>
                    <AntDesign name="arrowright" size={20} color="#ADD8E6" style={{ marginLeft: 5 }} />
                </View>
            </TouchableOpacity>
        </ScrollView >
    )
}