import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default function Acasa({ navigation }) {
  return (
    <View style={styles.container}>

      <Image source={require('../shared/static/logo.png')} />

      <AppButton
        title="Autentificare"
        onPress={() => navigation.navigate("Autentificare")}
      />

      <AppButton
        title="Înregistrare"
        onPress={() => navigation.navigate("Inregistrare")}
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
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#ffc12e",
    borderRadius: 10,
    margin: 10,
    padding: 5
  },
  appButtonText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={styles.appButtonContainer}
  >
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
