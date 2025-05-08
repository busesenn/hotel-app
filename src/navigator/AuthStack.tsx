import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import OpeningPage from '../pages/OpeningPage';
import RegisterPage from '../pages/RegisterPage';

const Stack = createStackNavigator();


export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="OpeningPage" component={OpeningPage} />
            <Stack.Screen name="RegisterPage" component={RegisterPage} />
        </Stack.Navigator>
    )
}