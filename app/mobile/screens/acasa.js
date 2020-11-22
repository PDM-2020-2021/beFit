import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import * as Font from 'expo-font';

import BfLabeledButton from '../shared/componente/bf-labeled-button';
import SharedStyles from '../shared/assets/shared-styles';


export default function Acasa({ navigation }) {
Font.useFonts({Comic: require('../shared/assets/fonts/Comic.ttf')},);
  return (
    <View style={SharedStyles.container}>

      <Image source={require('../shared/static/logo.png')} />

      <BfLabeledButton
        title="Autentificare"
        onPress={() => navigation.navigate("Autentificare")}
      />

      <BfLabeledButton
        title="Înregistrare"
        onPress={() => navigation.navigate("Inregistrare")}
      />

      <BfLabeledButton
        title="Abonamente"
        onPress={() => navigation.navigate("Abonamente")}
      />

    </View>
  );
}




