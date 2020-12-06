import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import SharedVariables from '../assets/shared-variables'


export default class BfButton extends React.Component {
    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={this.props.onPress}
                style=
                {
                    [
                        styles.appButtonContainer,
                        this.props.custom_styles
                    ]
                }
            >
                <Text style={styles.appButtonText}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    appButtonContainer: {
        borderColor: SharedVariables.bckgColor,
        borderWidth: 3,
        borderRadius: 5,
        padding: 10,
        flexDirection:'row',
    },
    appButtonText: {
        fontSize: 18,
        fontFamily: "Comic",
        color: SharedVariables.bckgColor,
        fontWeight: "bold",
        width: "100%",
        textAlign: "center",
    },
});