import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import BfLabeledButton from '../../shared/componente/bf-labeled-button';
import * as logic from '../../shared/logic/logic';

export default class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Pentru a folosi rolul de administrator, te rugam sa folosesti pagina web.</Text>
                <BfLabeledButton
                    title="Deconectare"
                    onPress={() => logic.diconnect(this.props.navigation)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

});