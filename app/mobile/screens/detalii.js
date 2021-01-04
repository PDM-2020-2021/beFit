import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';

import BfButton from '../shared/componente/bf-button';
import BfModal from '../shared/componente/bf-modal';
import { ScrollView } from "react-native-gesture-handler";
import SharedVariables from "../shared/assets/shared-variables";
import * as api from '../shared/logic/api-requester';
import * as storage from '../shared/logic/storage-requester';

export default class Detalii extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalVisible: false, abDetails: {} };

        api.get('/abonament/' + this.props.route.params.id)
            .then((response) => {
                this.setState({ abDetails: response });
            })
            .catch(error => {
                console.log(error);
            });
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    modalYesPressed() {
        storage.get('user')
            .then(u => {
                let user = JSON.parse(u);
                api.post(`/user/${user.id}/abonament/${this.props.route.params.id}`, {}, { Authorization: `Bearer ${user.token}` })
                    .then((r) => {
                        this.setModalVisible(false);
                    })
                    .catch(err => {
                        this.setModalVisible(false);
                    });
            })
            .catch(err => {
                console.log(err)
                this.setModalVisible(false);
            });
    }
    modalNoPressed() {
        this.setModalVisible(false);
    }
    modalDismiss() {
        this.setModalVisible(false);
    }

    render() {
        return (
            <ScrollView style={styles.detaliiContainer}>

                <View style={styles.imageContainer}>
                    <Image source={{ uri: 'data:image/png;base64,' + this.state.abDetails.image }}
                        style={styles.imgStyle}></Image>
                </View>

                <View style={styles.infoContainer}>
                    <View>
                        <Text style={styles.titleStyle}>{this.state.abDetails.title}</Text>
                    </View>

                    <View style={styles.categoryContainer}>
                        <Text style={styles.textStyle}>Categorie: {this.state.abDetails.category}</Text>
                        <Text style={styles.textStyle}>Data adăugării: {this.state.abDetails.addedDate} </Text>
                        <Text style={styles.textStyle}>Ofertă valabilă până la: {this.state.abDetails.expirationDate}</Text>
                        <Text style={styles.textStyle}>Valabil {this.state.abDetails.valability} zile de la activare.</Text>
                    </View>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText}>Descriere: {'\r\n' + this.state.abDetails.description}</Text>
                    </View>
                </View>

                <View style={styles.btnContainer}>
                    <BfButton
                        custom_styles={styles.btnStyle}
                        title="Cumpără"
                        onPress={() => this.setModalVisible(true)}
                    />
                </View>

                <BfModal
                    modalVisible={this.state.modalVisible}
                    onYes={this.modalYesPressed.bind(this)}
                    onNo={this.modalNoPressed.bind(this)}
                    onRequestClose={this.modalDismiss.bind(this)}
                    modalText={"Ești sigur că vrei să activezi acest abonament?"}>
                </BfModal>

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
    },
    infoContainer: {
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
        height: 100,
    },
    descriptionText: {
        fontFamily: "Comic",
    }
});
