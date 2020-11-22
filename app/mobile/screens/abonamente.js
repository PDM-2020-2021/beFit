import React from "react";
import {
    View,
} from 'react-native';

import AppTile from '../shared/componente/tile'
import SharedStyles from '../shared/shared-styles'


export default function Abonamente({ navigation }) {
    return (
        <View style={SharedStyles.container}>

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