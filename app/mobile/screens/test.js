import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';

import BfDrawer from '../shared/componente/bf-drawer'

export default class Test extends React.Component {
    constructor(props) {
        super(props);
    }
    content = (
        <View>
            <Text>asd</Text>
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