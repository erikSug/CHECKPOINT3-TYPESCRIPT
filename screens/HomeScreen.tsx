import { useEffect, useState,  type JSX } from 'react'
import {
    View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet,
    Alert,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';


type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props): JSX.Element => {
    const [username, setUsername] = useState<string>('');
    useEffect(() => {
        const loadSession = async (): Promise<void> => {
            const stored = await AsyncStorage.getItem('session');
            if (stored) {
                setUsername(JSON.parse(stored).username);
            }
        };
        loadSession();
    }, []);

    const sair = async (): Promise<void> => {
        await AsyncStorage.removeItem('session');
        navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.screen}>
                <View style={styles.content}>
                    <Text style={styles.title}>Bem-vindo, {username}! </Text>
                    <Text style={styles.subtitle}>1000 músicas estão esperando por você! </Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>VER MÚSICAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={sair}>
                        <Text style={styles.buttonText}>SAIR</Text>
                    </TouchableOpacity>
                </View>
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