import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Acasa from './screens/acasa';
import Inregistrare from './screens/inregistrare';
import Autentificare from './screens/autentificare';
import Abonamente from './screens/abonamente';
import Detalii from './screens/detalii';
import Test from './screens/test';
import Profil from './screens/profil';
import ActualizareProfil from './screens/profil-actualizare';

import Admin from './screens/admin_screens/admin';
import AbonamentActualizare from './screens/admin_screens/abonament-actualizare';
import AbonamentCreare from './screens/admin_screens/abonament-creare';


const { Navigator, Screen } = createStackNavigator();

const AuthStack = () => (
  //headerMode="none" pentru a sterge topbar-ul
  <Navigator options={{ headerStyle: { bacgroundColor: '#ffc12e' } }}>
    <Screen name="Acasa"
      component={Acasa}
      options={
        {
          headerShown: false,
          headerStyle: styles.topBarStyle
        }
      } />
    <Screen name="Inregistrare"
      component={Inregistrare}
      options={
        {
          headerShown: false,
          headerStyle: styles.topBarStyle
        }
      } />
    <Screen name="Autentificare"
      component={Autentificare}
      options={
        {
          headerShown: false,
          headerStyle: styles.topBarStyle
        }
      } />
    <Screen name="Abonamente"
      component={Abonamente}
      options={
        {
          title: 'Abonamente disponibile',
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: styles.topBarStyle
        }
      } />
    <Screen name="Detalii"
      component={Detalii}
      options={
        {
          title: '',
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: styles.topBarStyle
        }
      } />
    <Screen name="Test"
      component={Test}
      options={
        {
          title: 'Pagina de testare',
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: styles.topBarStyle
        }
      } />
    <Screen name="Profil"
      component={Profil}
      options={
        {
          title: 'Profilul tău',
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: styles.topBarStyle
        }
      } />
    <Screen name="ActualizareProfil"
      component={ActualizareProfil}
      options={
        {
          headerShown: false,
          headerStyle: styles.topBarStyle
        }
      } />
    <Screen name="Admin"
      component={Admin}
      options={
        {
          headerShown: false,
          headerStyle: styles.topBarStyle
        }
      } />
    <Screen name="AbonamentCreare"
      component={AbonamentCreare}
      options={
        {
          headerShown: false,
          headerStyle: styles.topBarStyle
        }
      } />
    <Screen name="AbonamentActualizare"
      component={AbonamentActualizare}
      options={
        {
          headerShown: false,
          headerStyle: styles.topBarStyle
        }
      } />
  </Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <AuthStack />
  </NavigationContainer>
);
const styles = StyleSheet.create({
  topBarStyle: {
    backgroundColor: '#ffc12e',
  }
});

export default AppNavigator;

