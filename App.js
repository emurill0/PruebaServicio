import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import GrupoServicios from '../screens/GrupoServicios';
import Servicios from '../screens/ServiciosDisponibles';
import AutosEnProceso from '../screens/CarrosEnServicio';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="GrupoServicios" component={GrupoServicios} options={{ headerShown: false }} />
        <Stack.Screen name="Servicios" component={Servicios} options={{ headerShown: false }} />
        <Stack.Screen name="AutosEnProceso" component={AutosEnProceso} options={{ headerShown: false }} />
    </Stack.Navigator>
);
}

