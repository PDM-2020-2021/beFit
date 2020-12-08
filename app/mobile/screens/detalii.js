import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    Modal,
    TouchableOpacity,
} from 'react-native';

import BfButton from '../shared/componente/bf-button';
import { ScrollView } from "react-native-gesture-handler";
import SharedVariables from "../shared/assets/shared-variables";

export default class Detalii extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalVisible: false };
    }

    yesPressed() {
        this.setState({ modalVisible: false });
    }

    noPressed() {
        this.setState({ modalVisible: false });
    }

    onPressButton() {
        this.setState({ modalVisible: true });
    }

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
                        <Text style={styles.descriptionText}>{this.props.description}Descriere: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
                    </View>
                </View>

                <View style={styles.btnContainer}>
                    <BfButton
                        custom_styles={styles.btnStyle}
                        title="Cumpără"
                        onPress={() => this.onPressButton()}
                    />
                </View>

                <View>
                    <Modal isVisible={this.state.modalVisible}
                        animationType="fade"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            this.setState({ modalVisible: false });
                        }}
                    >
                        <View style={styles.modalView}>
                            <Image source={require('../shared/static/icons/Checkbox.png')}
                                style={styles.bifaStyle}></Image>
                            <Text style={styles.questionStyle}>
                                Ești sigur că vrei să activezi acest abonament?
                            </Text>
                            <View>
                                <TouchableOpacity
                                    onpress={() => this.yesPressed()}
                                    activeOpacity={0.8}>
                                    <Image source={require('../shared/static/icons/yes.png')}
                                        style={styles.yesStyle}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.noPressed()}
                                    activeOpacity={0.8}>
                                    <Image source={require('../shared/static/icons/no.png')}
                                        style={styles.noStyle}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>

            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    yesStyle: {
        position: "absolute",
        right: 20,
    },
    noStyle: {
        position: "absolute",
        left: 20,
    },
    bifaStyle: {
        marginBottom: 50,
    },
    questionStyle: {
        color: SharedVariables.bckgColor,
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 20,
        fontFamily: "Comic",
    },
    modalView: {
        width: "100%",
        height: "100%",
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",
        alignItems: "center",
    },
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
        fontSize: 17,
        fontFamily: "Comic",
    },
    titleStyle: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 15,
        fontFamily: "Comic",
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
    },
    descriptionText: {
        fontFamily: "Comic",
    }
});
