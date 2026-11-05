import { type JSX } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import HomeScreen  from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import DetailsScreen from './screens/DetailsScreen';

// STACK: uma tela por cima da outra. É a raiz do app
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Lista"
          component={ListScreen}
          options={{
            headerShown: true,
            title: 'Músicas',
            headerStyle: { backgroundColor: '#17171B' },
            headerTintColor: '#EDEDEF',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailsScreen}
          options={({ route }) => ({
            headerShown: true,
            title: route.params.music.title,
            headerStyle: { backgroundColor: '#17171B' },
            headerTintColor: '#EDEDEF',
          })}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
