import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Acasa from './screens/acasa';
import Inregistrare from './screens/inregistrare';
import Autentificare from './screens/autentificare';

export default createAppContainer(
  createStackNavigator(
    { Acasa, Inregistrare, Autentificare },
    { initialRouteName: "Acasa" })
);