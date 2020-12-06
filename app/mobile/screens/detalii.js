import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    Alert
} from 'react-native';

import BfButton from '../shared/componente/bf-button';
import { ScrollView } from "react-native-gesture-handler";


export default class Detalii extends React.Component {
    render() {
        return (
            <ScrollView style={styles.detaliiContainer}>

                <View style={styles.imageContainer}>
                    <Image source={require('../shared/static/images/fitness.jpg')}
                        style={styles.imgStyle}></Image>
                </View>

                <View style={styles.infoContainer}>
                    <View>
                        <Text style={styles.titleStyle}>{this.props.title}Titlu abonament</Text>
                    </View>

                    <View style={styles.categoryContainer}>
                        <Text style={styles.textStyle}>Categorie: {this.props.category}</Text>
                        <Text style={styles.textStyle}>Data adăugării: {this.props.addedDate} </Text>
                        <Text style={styles.textStyle}>Ofertă valabilă până la: {this.props.expirationDate}</Text>
                        <Text style={styles.textStyle}>Valabil {this.props.valability}d zile de la activare.</Text>
                    </View>

                    <View style={styles.descriptionContainer}>
                        <Text>{this.props.description}Descriere: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                    </View>
                </View>

                <View style={styles.btnContainer}>
                    <BfButton
                        custom_styles={styles.btnStyle}
                        title="Cumpără"
                        onPress={() => onPressButton()}
                    />
                </View>

            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    detaliiContainer: {
        backgroundColor: "#f5f5f5",
        width: "100%",
        height: "100%",
    },
    infoContainer: {
        height: 250,
        marginTop: 20,
    },
    categoryContainer: {
        marginLeft: 10,
        marginBottom: 10
    },
    textStyle: {
        fontSize: 17
    },
    titleStyle: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 15
    },
    imageContainer: {
        width: "100%",
        height: 300
    },
    imgStyle: {
        width: "100%",
        height: "100%"
    },
    descriptionContainer: {
        marginLeft: 10,
        marginRight: 10,
    },
    btnStyle: {
        width: "40%",
        height: "50%",
    },
    btnContainer: {
        alignItems: "center",
        justifyContent: "center",
        height: 100
    }
});

function onPressButton() {
    // TO DO
    console.log('am apasat butonul cumpara.');
}
