import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import SharedVariables from '../assets/shared-variables'


const BfButton = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={props.onPress}
            style={styles.appButtonContainer}
        >
            <Text style={styles.appButtonText}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: SharedVariables.bckgColor,
        borderRadius: 10,
        margin: 5,
        padding: 10
    },
    appButtonText: {
        fontSize: 18,
        color: "#000",
        fontWeight: "bold",
        alignSelf: "center",
    },
});
export default BfButton;