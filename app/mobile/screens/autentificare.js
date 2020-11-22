import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Autentificare({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Autentificare</Text>
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