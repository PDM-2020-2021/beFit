import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';

import SharedVariables from '../assets/shared-variables';

export default class BfLabeledButton extends React.Component {
    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.2}
                onPress={this.props.onPress}
            >
                <Text
                    style=
                    {
                        [
                            styles.bf_label,
                            this.props.custom_styles
                        ]
                    }
                >
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    bf_label: {
        fontFamily: 'Comic',
        fontWeight: 'bold',
        fontSize: 20,
        color: SharedVariables.bckgColor,
    },
});