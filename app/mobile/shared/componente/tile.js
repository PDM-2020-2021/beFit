import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    appTileContainer: {
        elevation: 8,
        borderRadius: 20,
        margin: 15,
        backgroundColor: "#ffc12e",
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

const AppTile = (props) => (
    <View style={styles.appTileContainer}>
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onPress}
        >
            <View style={styles.appTileViewContainer}>
                <Text style={styles.appTileText}>{props.title}</Text>
                <Text style={styles.appTileText}>{props.description}</Text>
                <Image source={props.getImage}></Image>
            </View>

        </TouchableOpacity>
    </View>
);

export default AppTile;