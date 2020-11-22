import React from "react";
import {
    View,
} from 'react-native';

import AppTile from '../shared/componente/tile'
import SharedStyles from '../shared/assets/shared-styles'
import { render } from "react-dom";
import { ScrollView } from "react-native-gesture-handler";


export default class Abonamente extends React.Component {
    render() {
        return (
            <ScrollView style={SharedStyles.container.alignItems,
                SharedStyles.container.justifyContent, SharedStyles.container.flex}>

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

                <AppTile
                    id={3}
                    title="Abonament 3"
                    description="       Descriere: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                    getImage={require('../shared/static/sala_fitness.png')}
                ></AppTile>

            </ScrollView>
        );
    }
}