import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import SharedVariables from '../shared/assets/shared-variables'
import BfButton from '../shared/componente/bf-button';
import BfTextInput from '../shared/componente/bf-text-input';
import BfModal from '../shared/componente/bf-modal';

export default class ActualizareProfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modalVisible: false };
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    modalYesPressed() {
        console.log('YES PRESSED');
        this.setModalVisible(false);
    }
    modalNoPressed() {
        console.log('NO PRESSED');
        this.setModalVisible(false);
    }
    modalDismiss() {
        console.log('Dismissed');
        this.setModalVisible(false);
    }
    render() {
        return (
            <ScrollView style={styles.bigContainer}>

                <View>
                    <Text style={styles.title}>beFit</Text>
                </View>

                <View>
                    <Text style={styles.bigTextStyle}>Actualizare date utilizator</Text>
                </View>

                <View style={styles.formContainer}>
                    <BfTextInput
                        placeholder="Nume nou"
                        maxLength={15}
                        image={require('../shared/static/icons/hooman.png')}
                        custom_styles={styles.input}
                    />
                    <BfTextInput
                        placeholder="Prenume nou"
                        maxLength={20}
                        image={require('../shared/static/icons/hooman.png')}
                        custom_styles={styles.input}
                    />
                    <BfTextInput
                        placeholder="Email nou"
                        maxLength={30}
                        image={require('../shared/static/icons/email.png')}
                        custom_styles={styles.input}
                    />
                    <BfTextInput
                        placeholder="Număr nou de telefon"
                        maxLength={10}
                        image={require('../shared/static/icons/phone.png')}
                        custom_styles={styles.input}
                    />
                    <BfTextInput
                        placeholder="Parola actuală"
                        secured={true}
                        maxLength={15}
                        image={require('../shared/static/icons/password.png')}
                        custom_styles={styles.input}
                    />
                    <BfTextInput
                        placeholder="Parola nouă"
                        secured={true}
                        maxLength={15}
                        image={require('../shared/static/icons/password.png')}
                        custom_styles={styles.input}
                    />
                    <BfButton
                        title="Actualizare"
                        custom_styles={styles.button}
                        onPress={() => this.setModalVisible()}
                    />
                    <BfModal
                        modalVisible={this.state.modalVisible}
                        onYes={this.modalYesPressed.bind(this)}
                        onNo={this.modalNoPressed.bind(this)}
                        onRequestClose={this.modalDismiss.bind(this)}
                        modalText={"Salvezi modificările făcute?"}>
                    </BfModal>

                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    modalView: {
        width: "100%",
        height: "100%",
        backgroundColor: "#d5d5d5",
        alignItems: "center",
        justifyContent: "center",
    },
    modalContainer: {
        padding: 30,
        width: "80%",
        height: "50%",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#ffffff',
    },
    questionStyle: {
        color: SharedVariables.bckgColor,
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 20,
    },
    bifaStyle: {
        marginBottom: 50,
    },
    modalBtn: {
        margin: 10,
        width: 56,
        height: 56
    },
    bigContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#f5f5f5",
    },
    title: {
        textAlign: "center",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: 50,
        marginTop: 50,
        color: SharedVariables.bckgColor,
    },
    bigTextStyle: {
        color: SharedVariables.darkOrange,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 20,
        fontSize: 25,
        textAlign: "center",
    },
    formContainer: {
        padding: 30,
        paddingTop: 60,
        width: '90%',
        marginLeft: "5%",
        height: 440,
        backgroundColor: SharedVariables.bckgColor2,
        borderRadius: 10,
        shadowColor: SharedVariables.bckgColor,
        shadowOffset: {
            width: 3,
            height: 22,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
    },
    button: {
        marginTop: 25,
        alignSelf: "center",
    },
});