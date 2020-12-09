import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';
import SharedStyles from '../shared/assets/shared-styles';

import BfDrawer from '../shared/componente/bf-drawer'
import BfLabeledButton from '../shared/componente/bf-labeled-button';

export default class Test extends React.Component {
    constructor(props) {
        super(props);
    }
    content = (
        <View style={SharedStyles.container}>
            <BfLabeledButton
                title={'Admin'}
                onPress={() => this.props.navigation.navigate('Admin')}
            />
            <BfLabeledButton
                title={'Creare abonament'}
                onPress={() => this.props.navigation.navigate('AbonamentCreare')}
            />
            <BfLabeledButton
                title={'Actualizare abonament'}
                onPress={() => this.props.navigation.navigate('AbonamentActualizare')}
            />

        </View>
    );

    render() {
        return (
            <BfDrawer
                content={this.content}
                navigation={this.props.navigation} />
        )
    }
}

const styles = StyleSheet.create({

});