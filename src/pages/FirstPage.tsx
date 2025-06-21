import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Color } from '../Types';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function FirstPage() {
    const navigate = useNavigation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [secureText, setSecureText] = useState(true)

    const login = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            const user = response.user
            if (user) {
                navigate.navigate("MainPage")
            }
        } catch (error) {
            Alert.alert("Fail!", "Please try again", [
                {
                    text: "Ok"
                }
            ])
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%", gap: 95, backgroundColor: Color.navyBlue }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghh1YThSY9SeIe66KOMLcLHq6nYBq5_WoNg&s" }}
                    style={{ width: 150, height: 150, borderWidth: 2, borderColor: "#7f9183", borderRadius: 100 }}
                    resizeMode='cover'
                />
            </View>

            <View style={{ gap: 20, width: "100%", alignItems: "center", }}>
                <View style={{ width: "90%", borderBottomColor: "gray", borderBottomWidth: 1 }}>
                    <TextInput
                        autoCapitalize="none"
                        placeholder='E-mail'
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                        style={{ padding: 10, paddingLeft: 12, fontSize: 16, borderRadius: 10, color: "#fff" }} />
                </View>

                <View style={{ width: "90%", flexDirection: "row", borderBottomColor: "gray", borderBottomWidth: 1 }}>
                    <View style={{ width: 350 }}>
                        <TextInput
                            placeholder='Password'
                            keyboardType="default"
                            value={password}
                            secureTextEntry={secureText}
                            onChangeText={setPassword}
                            style={{ padding: 10, fontSize: 16, paddingLeft: 12, borderRadius: 10, color: "#fff", }} />
                    </View>
                    <View style={{ marginLeft: 10, marginTop: 5 }}>
                        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                            {
                                secureText ? (
                                    <Entypo name="eye" size={24} color="#fff" />
                                ) : (
                                    <Entypo name="eye-with-line" size={24} color="#fff" />
                                )

                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{ gap: 20, width: "40%", }}>

                <TouchableOpacity style={{ paddingVertical: 15, borderRadius: 10, backgroundColor: "#e0e2db", flexDirection: "row", justifyContent: "center" }}
                    onPress={() => {
                        login()
                    }}>
                    <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "500", color: "#000" }}>Giriş yap</Text>
                    <AntDesign name="arrowright" size={24} color="black" style={{ marginLeft: 15, marginTop: 1 }} />
                </TouchableOpacity>

                <TouchableOpacity style={{ paddingVertical: 15, borderRadius: 10, backgroundColor: "#e0e2db", flexDirection: "row", justifyContent: "center" }} onPress={() => {
                    navigate.navigate("RegisterPage")
                }}>
                    <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "500", color: "#000" }}>Kayıt Ol</Text>
                    <AntDesign name="arrowright" size={24} color="black" style={{ marginLeft: 15, marginTop: 1 }} />
                </TouchableOpacity>
            </View>
        </View >
    )
}