import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import SharedVariables from '../shared/assets/shared-variables'
import BfLabeledButton from '../shared/componente/bf-labeled-button';
import BfDrawer from '../shared/componente/bf-drawer';
import * as api from '../shared/logic/api-requester';
import * as storage from '../shared/logic/storage-requester';


export default class Profil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: {},
            abonamente: []
        };
        storage.get('user')
            .then(u => {
                const user = JSON.parse(u);
                api.get(`/user/${user.id}`, { Authorization: `Bearer ${user.token}` })
                    .then(r => {

                        this.userId = user.id;
                        this.token = user.token;

                        this.setState({ userData: r });
                        this.setState({ abonamente: r.abonamente });

                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }


    renderRow(val1, val2, id) {
        return (
            <View key={id} style={styles.rowBorderStyle}>
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                    <BfLabeledButton
                        custom_styles={styles.rowText1Style}
                        title={val1}
                        onPress={() => this.props.navigation.navigate("Detalii", { "id": id })}
                    />
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch' }} >
                    <Text style={styles.rowText2Style}>{val2}</Text>
                </View>
            </View>
        );
    }

    renderHead(val1, val2) {
        return (
            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                    <Text style={styles.headText1Style}>{val1}</Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch' }} >
                    <Text style={styles.headText2Style}>{val2}</Text>
                </View>
            </View>
        );
    }

    render() {
        let ourTableColumns = [];
        const { firstname, lastname, email, phone } = this.state.userData;
        const userData = { firstname, lastname, email, token: this.token, phone, id: this.userId };
        return (
            <BfDrawer navigation={this.props.navigation}
                content={(
                    <ScrollView style={styles.profilContainer}>

                        <View style={styles.userInfoContainer}>
                            <Text style={styles.titleStyle}>Date utilizator</Text>
                            <Text style={styles.textStyle}>Nume: {this.state.userData.firstname}</Text>
                            <Text style={styles.textStyle}>Prenume: {this.state.userData.lastname}</Text>
                            <Text style={styles.textStyle}>Email: {this.state.userData.email}</Text>
                            <Text style={styles.textStyle}>Telefon: {this.state.userData.phone}</Text>
                            <Text style={styles.textStyle}>Balans: {this.state.userData.balance}</Text>

                            <View style={styles.updateProfilStyle}>
                                <BfLabeledButton
                                    title="Actualizare profil"
                                    onPress={() => this.props.navigation.navigate("ActualizareProfil", { 'userData': userData })}
                                    custom_styles={{ color: SharedVariables.darkOrange }}
                                ></BfLabeledButton>
                            </View>

                        </View>

                        <Text style={styles.bigTextStyle}>Abonamentele tale:</Text>

                        <View style={styles.headerStyle}>
                            {this.renderHead("Titlu", "Expiră la")}
                        </View>

                        {
                            this.state.abonamente.forEach(elem =>
                                ourTableColumns.push(this.renderRow(elem.title, elem.expirationDate, elem.id.abonamentId))
                            )
                        }

                        <View style={styles.columnsStyle}>
                            {ourTableColumns}
                        </View>

                    </ScrollView>
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    rowBorderStyle: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        marginBottom: 3,
        paddingTop: 3,
        paddingBottom: 3,
    },
    rowText1Style: {
        fontSize: 15,
        marginLeft: 10,
        color: SharedVariables.darkOrange,
        fontFamily: "Comic",
    },
    rowText2Style: {
        fontSize: 15,
        marginLeft: 50,
        fontFamily: "Comic",
    },
    headText1Style: {
        fontSize: 18,
        marginLeft: 20,
        marginTop: 7,
        fontFamily: "Comic",
    },
    headText2Style: {
        fontSize: 18,
        marginLeft: 50,
        marginTop: 7,
        fontFamily: "Comic",
    },

    headerStyle: {
        backgroundColor: SharedVariables.darkOrange,
        marginLeft: 20,
        marginRight: 20,
        height: 40,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    columnsStyle: {
        backgroundColor: "#fff",
        marginLeft: 20,
        marginRight: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
    },

    profilContainer: {
        backgroundColor: "#f5f5f5",
        width: "100%",
        height: "100%",
    },
    titleStyle: {
        color: SharedVariables.bckgColor,
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 10,
        fontFamily: "Comic",
    },
    bigTextStyle: {
        color: SharedVariables.bckgColor,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 20,
        fontSize: 25,
        fontFamily: "Comic",
    },
    textStyle: {
        fontSize: 17,
        padding: 5,
        marginLeft: 10,
        fontFamily: "Comic",
    },
    userInfoContainer: {
        marginTop: 50,
        marginLeft: 20,
        marginBottom: 30,
    },
    updateProfilStyle: {
        marginLeft: 15,
    },
});