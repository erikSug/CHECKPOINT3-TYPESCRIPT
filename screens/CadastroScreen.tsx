import { useState, useEffect, type JSX } from 'react'
import {
    View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Cadastro'>;
const CadastroScreen = (): JSX.Element => {
    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');

    const changeUser = (text: string): void => {
        setUser(text);
    }
    const changePassword = (text: string): void => {
        setPassword(text);
    }
    const changePasswordConfirm = (text: string): void => {
        setPasswordConfirm(text);
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.screen}>
            <View style={styles.content}>
                <Text style={styles.title}>Cadastro</Text>
                <Text style={styles.subtitle}>Usuário</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seu usuário.."
                    placeholderTextColor="#9A9AA3"
                    value={user}
                    onChangeText={changeUser}
                />
                <Text style={styles.subtitle}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Sua senha.."
                    placeholderTextColor="#9A9AA3"
                    value={password}
                    onChangeText={changePassword}
                    secureTextEntry={true}
                />

                <Text style={styles.subtitle}>Confirme sua senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Sua senha.."
                    placeholderTextColor="#9A9AA3"
                    value={passwordConfirm}
                    onChangeText={changePasswordConfirm}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default CadastroScreen
const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#0E0E10' },
    content: { flex: 1, justifyContent: 'center', paddingHorizontal: 28 },
    title: { color: '#ED145B', fontSize: 28, fontWeight: 'bold' },
    subtitle: { color: '#9A9AA3', fontSize: 14, marginTop: 8, marginBottom: 24 },
    input: { backgroundColor: '#17171B', borderWidth: 1, borderColor: '#2A2A31', borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, color: '#EDEDEF', fontSize: 16 },
    error: { color: '#FF4D94', fontSize: 12, marginTop: 6 },
    button: { backgroundColor: '#ED145B', borderRadius: 999, paddingVertical: 14, alignItems: 'center', marginTop: 24 },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});