import React from "react";
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import AppTile from '../shared/componente/tile'

export default function Abonamente({ navigation }) {
    return (
        <View style={styles.container}>

            <AppTile
                id={1}
                title="Abonament 1"
                description="       Descriere: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                getImage={require('../shared/static/sala_fitness.png')}
            ></AppTile>

            <AppTile
                id={2}
                title="Abonament 2"
                description="       Descriere: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                getImage={require('../shared/static/sala_fitness.png')}
            ></AppTile>

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