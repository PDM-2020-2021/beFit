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
                onPress={() => this.props.navigation.navigate("Detalii", {"id":this.props.id})}
            >
                <View style={styles.appTileViewContainer}>
                    <View>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                    <Image source={{uri: this.props.getImage}} style={styles.imgResizer}></Image>

                    <View style={styles.abInfoStyle}>
                        <View>
                            <Image source={require('../static/icons/calendar.png')}
                                style={styles.abDurationIconStyle}></Image>
                            <Text style={styles.abDurationTextStyle}>{this.props.valability}</Text>
                        </View>

                        <View>
                            <Image source={require('../static/icons/price.png')}
                                style={styles.abPriceIconStyle}></Image>
                            <Text style={styles.abPriceTextStyle}>{this.props.price}</Text>
                        </View>
                    </View>

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
        height: 300,
    },
    appTileViewContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10
    },
    title: {
        marginBottom: "5%",
        fontWeight: "bold",
        fontSize: 15,
    },
    abInfoStyle: {
        width: "100%",
        height: 20,
        marginTop: "5%",
    },
    abDurationIconStyle: {
        position: "absolute",
        left: "0%"
    },
    abDurationTextStyle: {
        position: "absolute",
        left: "10%",
        marginTop: 3
    },
    abPriceIconStyle: {
        position: "absolute",
        right: "0%"
    },
    abPriceTextStyle: {
        position: "absolute",
        right: "10%",
        marginTop: 3
    },
    imgResizer: {
        width: "100%",
        height: "70%",
    }
});