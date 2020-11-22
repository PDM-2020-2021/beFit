import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';


const BfButton = (props) => {
    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.2}
                onPress={props.onPress}
                style={styles.appButtonContainer}
            >
                <Text style={styles.appButtonText}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#ffc12e",
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