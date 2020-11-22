import React from 'react';
import {
    Text,
    StyleSheet,
    View,
} from 'react-native';


const BfLabeledButton = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.2}
            onPress={props.onPress}
            style={styles.appButtonContainer}
        >
            <Text style={styles.appButtonText}>{props.title}</Text>
        </TouchableOpacity>
    );
}


export default BfTextInput; 