import {type JSX } from 'react'
import {
    View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import {MUSICS, formatDuration } from '../data/musics';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const DetailsScreen = ({ route, navigation}: Props, ): JSX.Element => {
    const { music } = route.params;

    const index = MUSICS.findIndex((m) => m.id === music.id);
    const next= MUSICS[index + 1];


    const goNext = (): void => {
        if (next) {
            navigation.push('Detail', { music: next });
        }
    };
    const goPrevious = (): void => {
        navigation.goBack();
    };

    const goHome = (): void => {
        navigation.popToTop();
    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.screen}>
                <View style={styles.content}>
                    <Text style={styles.subtitle}>{music.genre}</Text>
                    <Text style={styles.title}>{music.title}</Text>
                    <Text style={styles.subtitle}>{music.artist} . {music.year}</Text>
                    <Text style={styles.subtitle}>Duração: {formatDuration(music.durationSec)}</Text>

                <TouchableOpacity style={styles.button} onPress={goNext}>
                    <Text style={styles.buttonText} >Próxima Música</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={goPrevious}>
                    <Text style={styles.buttonText} >Voltar</Text>
                </TouchableOpacity>
                                
                <TouchableOpacity style={styles.button} onPress={goHome}>
                    <Text style={styles.buttonText} >Início</Text>
                </TouchableOpacity>
                </View>
        </KeyboardAvoidingView>
    )
}

export default DetailsScreen;

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