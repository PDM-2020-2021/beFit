import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import SharedVariables from '../shared/assets/shared-variables'
import BfLabeledButton from '../shared/componente/bf-labeled-button';

export default class Test extends React.Component {

    render() {
        return (
            <ScrollView>

                <Text>test works</Text>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    
});