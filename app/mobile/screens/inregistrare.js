import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Inregistrare({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Inregistrare</Text>
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