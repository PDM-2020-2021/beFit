import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import SharedVariables from '../assets/shared-variables';


export default class AppTile extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.appTileContainer}
                activeOpacity={0.8}
                onPress={this.props.onPress}
            >
                <View style={styles.appTileViewContainer}>
                    <View style={styles.title}>
                        <Text style={styles.appTileText}>{this.props.title}</Text>
                    </View>
                    <Text style={styles.appTileText}>{this.props.description}</Text>
                    <Image source={this.props.getImage}></Image>
                </View>
            </TouchableOpacity>
        );
    }
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
    },
    title: {
        color: "grey"
    }
});