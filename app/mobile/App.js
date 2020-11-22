import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Acasa from './screens/acasa';
import Inregistrare from './screens/inregistrare';
import Autentificare from './screens/autentificare';
import Abonamente from './screens/abonamente';
import Detalii from './screens/detalii';

const {Navigator, Screen} = createStackNavigator();

const AuthStack = () => (
  //headerMode="none" pentru a sterge topbar-ul
  <Navigator>
    <Screen name="Acasa" component={Acasa} />
    <Screen name="Inregistrare" component={Inregistrare} />
    <Screen name="Autentificare" component={Autentificare} />
    <Screen name="Abonamente" component={Abonamente} />
    <Screen name="Detalii" component={Detalii} />
  </Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <AuthStack />
  </NavigationContainer>
);

export default AppNavigator;
