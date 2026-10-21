import { useState, useEffect, type JSX } from 'react'
import {
    View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet,
} from 'react-native';
const LoginScreen = (): JSX.Element => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text style={{ color: 'black', fontSize: 30 }}>
                TESTE FUNCIONOU!
            </Text>
        </View>
    )
}

export default LoginScreen
