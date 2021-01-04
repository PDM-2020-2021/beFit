import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import SharedVariables from '../shared/assets/shared-variables';
import BfButton from '../shared/componente/bf-button';
import BfTextInput from '../shared/componente/bf-text-input';
import BfModal from '../shared/componente/bf-modal';
import UserUpdateModel from '../shared/logic/models/user-update-model';
import * as api from '../shared/logic/api-requester';
import * as logic from '../shared/logic/logic';


export default class ActualizareProfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            firstname: this.userData.firstname,
            lastname: this.userData.lastname,
            email: this.userData.email,
            phone: this.userData.phone,
            password: '',
            newPassword: ''
        };
    }
    userData = this.props.route.params.userData;

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    modalYesPressed() {
        const { firstname, lastname, email, phone, password, newPassword } = this.state;
        var user = new UserUpdateModel(firstname, lastname, email, phone, password, newPassword);
        if (user.newPassword === '') user.newPassword = null;
        api.patch(`/user/${this.userData.id}`, user, { Authorization: `Bearer ${this.userData.token}` })
            .then(r => {
                if (r) {
                    logic.diconnect(this.props.navigation);
                    this.setModalVisible(false);
                }
                else{
                    this.setModalVisible(false);
                }
            })
            .catch(err => {
                console.log(err);
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

                        value={this.state.lastname}
                        onChangeText={text => this.setState({ lastname: text })}
                    />
                    <BfTextInput
                        placeholder="Prenume nou"
                        maxLength={20}
                        image={require('../shared/static/icons/hooman.png')}
                        custom_styles={styles.input}

                        value={this.state.firstname}
                        onChangeText={text => this.setState({ firstname: text })}
                    />
                    <BfTextInput
                        placeholder="Email nou"
                        maxLength={30}
                        image={require('../shared/static/icons/email.png')}
                        custom_styles={styles.input}

                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })}
                    />
                    <BfTextInput
                        placeholder="Număr nou de telefon"
                        maxLength={10}
                        image={require('../shared/static/icons/phone.png')}
                        custom_styles={styles.input}

                        value={this.state.phone}
                        onChangeText={text => this.setState({ phone: text })}
                    />
                    <BfTextInput
                        placeholder="Parola actuală"
                        secured={true}
                        maxLength={15}
                        image={require('../shared/static/icons/password.png')}
                        custom_styles={styles.input}

                        value={this.state.password}
                        onChangeText={text => this.setState({ password: text })}
                    />
                    <BfTextInput
                        placeholder="Parola nouă"
                        secured={true}
                        maxLength={15}
                        image={require('../shared/static/icons/password.png')}
                        custom_styles={styles.input}

                        value={this.state.newPassword}
                        onChangeText={text => this.setState({ newPassword: text })}
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
                        modalText={"Executarea cu succes a acestei acţiuni te va deconecta, eşti sigur că vrei să continui?"}>
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
        fontFamily: "Comic",
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
        fontFamily: "Comic",
    },
    bigTextStyle: {
        color: SharedVariables.darkOrange,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 20,
        fontSize: 25,
        textAlign: "center",
        fontFamily: "Comic",
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