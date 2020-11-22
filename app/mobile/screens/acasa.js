import React from 'react';
import {
  View,
  Image,
} from 'react-native';

import BfButton from '../shared/componente/bf-button'
import SharedStyles from '../shared/shared-styles'


export default function Acasa({ navigation }) {
  return (
    <View style={SharedStyles.container}>

      <Image source={require('../shared/static/logo.png')} />

      <BfButton
        title="Autentificare"
        onPress={() => navigation.navigate("Autentificare")}
      />

      <BfButton
        title="Înregistrare"
        onPress={() => navigation.navigate("Inregistrare")}
      />

      <BfButton
        title="Abonamente"
        onPress={() => navigation.navigate("Abonamente")}
      />

    </View>
  );
}




