import { useState, useEffect, type JSX } from 'react'
import {
    View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet,
} from 'react-native';
const CadastroScreen = (): JSX.Element => {
    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');

    const changeUser = (text: string): void => {
        setUser(text);
    }
    const changePassword = (text: string): void => {
        setUser(text);
    }
    const changePasswordConfirm = (text: string): void => {
        setPasswordConfirm(text);
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View>
                <Text>Nome: </Text>
                <TextInput
                    placeholder="Seu nome..."
                    placeholderTextColor="#9A9AA3"
                    value={user}
                    onChangeText={changeUser}
                />
                <Text>Criar a senha: </Text>
                <TextInput
                    placeholder="Sua senha..."
                    placeholderTextColor="#9A9AA3"
                    value={password}
                    onChangeText={changePassword}
                />
                <Text>Confirme a senha: </Text>
                <TextInput
                    placeholder="Confirme sua senha..."
                    placeholderTextColor="#9A9AA3"
                    value={passwordConfirm}
                    onChangeText={changePasswordConfirm}
                />
            </View>
            <TouchableOpacity>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default CadastroScreen
