import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Acasa from './screens/acasa';
import Inregistrare from './screens/inregistrare';
import Autentificare from './screens/autentificare';
import Abonamente from './screens/abonamente';

export default createAppContainer(
  createStackNavigator(
    { Acasa, Inregistrare, Autentificare, Abonamente },
    { initialRouteName: "Acasa" })
);