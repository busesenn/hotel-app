import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword } from "firebase/auth"
import ToastManager, { Toast } from 'toastify-react-native'
import { auth } from '../firebaseConfig';


export default function RegisterPage() {
    const navigate = useNavigation()

    const [formData, setFormData] = useState({
<<<<<<< HEAD
        email: "test1@gmail.com",
        password: "123456",
        phoneNumber: "050500505",
=======
        email: "",
        password: "123456",
        phoneNumber: "",
>>>>>>> 13e1e72 (Güncellendi)
        againPassword: "123456",
    })

    const register = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
            const user = response.user
            if (user) {
                navigate.navigate("UserAgreement")
            }
        } catch (error) {
            Toast.error("Lütfen tekrar deneyin!")
        }
    }

    const onChangeText = (key: string, text: string) => {
        setFormData({
            ...formData,
            [key]: text
        })
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%", gap: 60, backgroundColor: "#f7f4ea" }}>
            <View style={{ gap: 10 }}>
                <Text style={{ fontSize: 15 }}>Hemen kayıt olun ve eşsiz fırsatları kaçırmayın 😌</Text>
            </View>
            <View style={{ borderBottomWidth: .5, width: "80%", borderBottomColor: "gray", paddingVertical: 5 }}>
                <Text style={{ fontWeight: "bold" }}>Email <Text style={{ color: "red" }}>*</Text></Text>
                <TextInput placeholder='Email'
                    keyboardType="email-address"
                    value={formData.email} onChangeText={(text) => onChangeText("email", text)}
                    autoCapitalize="none"
                    style={{ padding: 3, borderRadius: 8, backgroundColor: "#f7f4ea", opacity: .5, marginTop: 8 }} />
            </View>

            <View style={{ borderBottomWidth: .5, width: "80%", borderBottomColor: "gray", paddingVertical: 5 }}>
                <Text style={{ fontWeight: "bold" }}>Phone Number <Text style={{ color: "red" }}>*</Text> </Text>
                <TextInput placeholder='Phone Number'
                    value={formData.phoneNumber}
                    onChangeText={(text) => onChangeText("phoneNumber", text)}
                    keyboardType="phone-pad"
                    style={{ padding: 3, borderRadius: 8, backgroundColor: "#f7f4ea", opacity: .5, marginTop: 2 }} />
            </View>

            <View style={{ borderBottomWidth: .5, width: "80%", borderBottomColor: "gray", paddingVertical: 5 }}>
                <Text style={{ fontWeight: "bold" }}>Password <Text style={{ color: "red" }}>*</Text></Text>
                <TextInput placeholder='Password'
                    secureTextEntry
                    value={formData.password} onChangeText={(text) => onChangeText("password", text)}
<<<<<<< HEAD
=======
                    textContentType='none'
>>>>>>> 13e1e72 (Güncellendi)
                    style={{ padding: 3, borderRadius: 8, backgroundColor: "#f7f4ea", opacity: .5, marginTop: 2 }} />
            </View>

            <View style={{ borderBottomWidth: .5, width: "80%", borderBottomColor: "gray", paddingVertical: 5 }}>
                <Text style={{ fontWeight: "bold" }}>Password <Text style={{ color: "red" }}>*</Text></Text>
                <TextInput placeholder='Password'
                    secureTextEntry
                    value={formData.againPassword} onChangeText={(text) => onChangeText("againPassword", text)}
<<<<<<< HEAD
=======
                    textContentType='none'
>>>>>>> 13e1e72 (Güncellendi)
                    style={{ padding: 3, borderRadius: 8, backgroundColor: "#f7f4ea", opacity: .5, marginTop: 2 }} />

            </View>

            <TouchableOpacity
                onPress={() => {
                    register()
                }}
            >
                <Text style={{ fontSize: 18, padding: 15, paddingHorizontal: 45, borderRadius: 10, backgroundColor: "#cce3de", fontWeight: "300" }}>Continue</Text>
            </TouchableOpacity>
            <ToastManager duration={2000} position="bottom" />
        </View>
    )
}