import { useState, type JSX } from 'react'
import {
    View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet,
    Alert,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';


type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props): JSX.Element => {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.screen}>
                <Text style={styles.subtitle}>BEM VINDO A HOME</Text>
        </KeyboardAvoidingView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#0E0E10' },
    content: { flex: 1, justifyContent: 'center', paddingHorizontal: 28 },
    title: { color: '#ED145B', fontSize: 28, fontWeight: 'bold' },
    subtitle: { color: '#9A9AA3', fontSize: 14, marginTop: 17, marginBottom: 8 },
    input: { backgroundColor: '#17171B', borderWidth: 1, borderColor: '#2A2A31', borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, color: '#EDEDEF', fontSize: 16 },
    error: { color: '#FF4D94', fontSize: 12, marginTop: 4 },
    button: { backgroundColor: '#ED145B', borderRadius: 999, paddingVertical: 14, alignItems: 'center', marginTop: 24 },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});