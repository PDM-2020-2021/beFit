import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { CommonActions } from '@react-navigation/native';

import BfLabeledButton from '../../shared/componente/bf-labeled-button';
import * as storage from '../../shared/logic/storage-requester';

export default class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDisconectRequest = () => {
        storage.removeItem('user')
            .then(() => {
                this.props.navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            { name: 'Acasa' },
                        ],
                    }));
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <View>
                <Text>Pentru a folosi rolul de administrator, te rugam sa folosesti pagina web.</Text>
                <BfLabeledButton
                    title="Deconectare"
                    onPress={() => this.handleDisconectRequest()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

});