import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import SharedVariables from '../shared-variables';



const AppTile = (props) => {
    return (
        <TouchableOpacity
            style={styles.appTileContainer}
            activeOpacity={0.8}
            onPress={props.onPress}
        >
            <View style={styles.appTileViewContainer}>
                <Text style={styles.appTileText}>{props.title}</Text>
                <Text style={styles.appTileText}>{props.description}</Text>
                <Image source={props.getImage}></Image>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    appTileContainer: {
        elevation: 8,
        borderRadius: 20,
        margin: 15,
        backgroundColor: SharedVariables.bckgColor,
        flex: 1,
        height: 400,
    },
    appTileText: {
        fontSize: 10,
        color: "#000",
        fontWeight: "bold",
        alignSelf: "center",
    },
    appTileViewContainer: {
        justifyContent: "space-between",
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        padding: 20,
    }
});
export default AppTile;