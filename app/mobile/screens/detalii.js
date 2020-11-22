import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    Alert
} from 'react-native';

import SharedStyles from '../shared/assets/shared-styles'
import BfButton from '../shared/componente/bf-button'

export default class Detalii extends React.Component {
    onPressButton() {
        // TO DO
        console.log('am apasat butonul cumpara.');
    }
    // abonament = service.getAbonament(id);
    render() {
        return (
            <View style={[SharedStyles.container, styles.container]}>

                <Text></Text>
                <Text>Categorie: </Text>
                <Text>Data adăugării: </Text>
                <Text>Valabil până la: </Text>
                <Text>Disponibil încă  zile.</Text>

                <Image source={require('../shared/static/sala_fitness.png')}></Image>

                <Text>Descriere: </Text>

                <BfButton
                    title="Cumpără"
                    onPress={this.onPressButton()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
    }
});
