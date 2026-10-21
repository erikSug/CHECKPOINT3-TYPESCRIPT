import { useState, useEffect, type JSX } from 'react'
import {
    View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet,
} from 'react-native';
const LoginScreen = (): JSX.Element => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            
        
        </KeyboardAvoidingView>
    )
}

export default LoginScreen
