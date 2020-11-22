import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import BfButton from '../shared/componente/bf-button'

export default function Acasa({ navigation }) {
  return (
    <View style={styles.container}>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


