import { TouchableOpacity } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "../pages/FirstPage";
import RegisterPage from "../pages/RegisterPage";
import UserAgreement from "../pages/UserAgreement";
import MainPage from "../pages/MainPage";
import AllOpportunities from "../pages/AllOpportunities";
import FavsPage from "../pages/FavsPage";
import Map from "../pages/Map";
import Profile from "../pages/Profile";
import { Color } from "../Types";
import UnusualPlaces from '../pages/UnusualPlaces';
import MockDataDetail from '../pages/MockDataDetail';
import GuestPicker from '../pages/GuestPicker';
import PopularHotelsDetail from '../pages/PopularHotelsDetail';
import UnusualPlacesDetail from '../pages/UnusualPlacesDetail';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import RezervasyonGeçmişi from '../pages/RezervasyonGeçmişi';


const Stack = createNativeStackNavigator();


export default function StackNavigator() {
    const navigate = useNavigation()
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}
            initialRouteName="FirstPage">
            <Stack.Screen name="FirstPage" component={FirstPage}
            />
            <Stack.Screen name="UserAgreement" component={UserAgreement} />
            <Stack.Screen name="MainPage" component={MainPage} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: Color.navyBlue
                },
                headerTintColor: "#fff",
                headerRight: () => (
                    <TouchableOpacity onPress={() => {
                        navigate.navigate("Profile")
                    }}>
                        <FontAwesome name="user-circle-o" size={25} color="#fff" />
                    </TouchableOpacity>
                ),
                headerTitle: "",
                headerBackButtonDisplayMode: "minimal",
                headerBackVisible: false
            }} />
            <Stack.Screen name="FavsPage" component={FavsPage} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="Profile" component={Profile} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: Color.navyBlue
                },
                headerTintColor: "#fff",
                headerBackButtonDisplayMode: "minimal"
            }} />
            <Stack.Screen name="AllOpportunities" component={AllOpportunities} />
            <Stack.Screen name="UnusualPlaces" component={UnusualPlaces} />
            <Stack.Screen name="MockDataDetail" component={MockDataDetail} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: Color.navyBlue
                },
                headerTintColor: "#fff",
                headerBackVisible: true,
                title: "",
                headerBackButtonDisplayMode: "minimal"
            }} />
            <Stack.Screen name="RegisterPage" component={RegisterPage} />
            <Stack.Screen name="GuestPicker" component={GuestPicker} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: Color.navyBlue
                },
                headerTintColor: "#fff"
            }} />
            <Stack.Screen name="PopularHotelsDetail" component={PopularHotelsDetail} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: Color.navyBlue
                },
                headerTintColor: "#fff",
                headerBackButtonDisplayMode: "minimal",
                headerBackVisible: true
            }}

            />
            <Stack.Screen name="UnusualPlacesDetail" component={UnusualPlacesDetail} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: Color.navyBlue
                },
                headerTintColor: "#fff",
                headerBackVisible: true,
                headerBackButtonDisplayMode: "minimal"
            }}
            />
            <Stack.Screen name="RezervasyonGeçmişi" component={RezervasyonGeçmişi} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: Color.navyBlue
                },
                headerTintColor: "#fff",
                headerBackButtonDisplayMode: "minimal"
            }} />
        </Stack.Navigator>
    )
}