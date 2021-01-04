import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import SharedStyles from '../shared/assets/shared-styles';

import BfDrawer from '../shared/componente/bf-drawer'

export default class Incarcare extends React.Component {
    constructor(props) {
        super(props);
    }
    content = (
        <View style={SharedStyles.container}>

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