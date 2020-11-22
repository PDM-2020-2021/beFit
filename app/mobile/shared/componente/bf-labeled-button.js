import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';

import SharedVariables from '../assets/shared-variables';


const BfLabeledButton = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.2}
            onPress={props.onPress}
        >
            <Text
                style={styles.bf_label}
            >
                {props.title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    bf_label: {
        fontFamily: 'Comic',
        fontWeight: 'bold',
        fontSize: 20,
        color: SharedVariables.bckgColor,
    },
});
export default BfLabeledButton; 