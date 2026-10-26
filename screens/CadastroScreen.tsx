import { useState, type JSX } from 'react'
import {
    View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet,
    Alert,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Cadastro'>;

const CadastroScreen = ({ navigation }: Props): JSX.Element => {
    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    
    const [errorUser, setErrorUser] = useState<string>('');
    const [errorPassword, setErrorPassword] = useState<string>('');
    const [errorPasswordConfirm, setErrorPasswordConfirm] = useState<string>('');

    const validateUser = (userInput: string): string => {
        if (userInput.trim().length < 3) {
            return 'Mínimo de 3 letras';
        }
        return '';
    }

    const validatePassword = (userInput: string): string => {
        if (userInput.trim().length < 6) {
            return 'Senha no mínimo de 6 letras';
        }
        return '';
    }

    const validatePasswordConfirm = (userPassword: string, userPasswordConfirm: string): string => {
        if (userPassword !== userPasswordConfirm) {
            return 'Senha não é a mesma';
        }
        return '';
    }

    const changeUser = (text: string): void => {
        setUser(text);
        setErrorUser(validateUser(text)); // Valida em tempo real (opcional, mas melhora a UX)
    }
    
    const changePassword = (text: string): void => {
        setPassword(text);
        setErrorPassword(validatePassword(text));
    }
    
    const changePasswordConfirm = (text: string): void => {
        setPasswordConfirm(text);
        setErrorPasswordConfirm(validatePasswordConfirm(password, text));
    }

    const cadastro = (): void => {

        const messageUser = validateUser(user);
        const messagePassword = validatePassword(password);
        const messagePasswordConfirm = validatePasswordConfirm(password, passwordConfirm);


        setErrorUser(messageUser);
        setErrorPassword(messagePassword);
        setErrorPasswordConfirm(messagePasswordConfirm);


        if (messageUser === '' && messagePassword === '' && messagePasswordConfirm === '') {
            Alert.alert("Sucesso", "Conta criada com sucesso!", [
                { 
                    text: "OK", 
                    onPress: () => navigation.goBack() // Agora sim, volta pro login explicitamente quando o usuário clica em OK
                }
            ]);
        }
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
                {errorUser !== '' && <Text style={styles.error}>{errorUser}</Text>}
                
                <Text style={styles.subtitle}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Sua senha.."
                    placeholderTextColor="#9A9AA3"
                    value={password}
                    onChangeText={changePassword}
                    secureTextEntry={true}
                />
                {errorPassword !== '' && <Text style={styles.error}>{errorPassword}</Text>}
                
                <Text style={styles.subtitle}>Confirme sua senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Confirme sua senha.."
                    placeholderTextColor="#9A9AA3"
                    value={passwordConfirm}
                    onChangeText={changePasswordConfirm}
                    secureTextEntry={true}
                />
                {errorPasswordConfirm !== '' && <Text style={styles.error}>{errorPasswordConfirm}</Text>}
                
                <TouchableOpacity style={styles.button} onPress={cadastro}>
                    <Text style={styles.buttonText}>CADASTRAR</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default CadastroScreen;

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