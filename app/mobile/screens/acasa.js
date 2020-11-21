import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Acasa({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Autentificare"
        onPress={() => navigation.navigate("Autentificare")}
      />
      <Button
        title="Inregistrare"
        onPress={() => navigation.navigate("Inregistrare")}
      />
    </View>
  );
}