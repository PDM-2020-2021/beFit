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

export default class Profil extends React.Component {

    constructor(props) {
        super(props);
    }

    tableData = [
        { id: 1, nume: 'Abonament spa', valab: 17 },
        { id: 2, nume: 'Abonament fitness', valab: 18 },
        { id: 3, nume: 'Abonament cardio', valab: 19 },
        { id: 4, nume: 'Abonament golf', valab: 20 },
        { id: 5, nume: 'Abonament spa', valab: 17 },
        { id: 6, nume: 'Abonament fitness', valab: 18 },
        { id: 7, nume: 'Abonament cardio', valab: 19 },
        { id: 8, nume: 'Abonament golf', valab: 20 },
    ];

    renderRow(val1, val2, id) {
        return (
            <View key={id} style={styles.rowBorderStyle}>
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                    <BfLabeledButton
                        custom_styles={styles.rowText1Style}
                        title={val1}
                        onPress={() => this.props.navigation.navigate("Detalii")}
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
        return (
            <BfDrawer navigation={this.props.navigation}
                content={(
                    <ScrollView style={styles.profilContainer}>

                        <View style={styles.userInfoContainer}>
                            <Text style={styles.titleStyle}>Date utilizator</Text>
                            <Text style={styles.textStyle}>Nume: nume_utilizator</Text>
                            <Text style={styles.textStyle}>Prenume: prenume_utilizator</Text>
                            <Text style={styles.textStyle}>Email: email_utilizator</Text>

                            <View style={styles.updateProfilStyle}>
                                <BfLabeledButton
                                    title="Actualizare profil"
                                    onPress={() => this.props.navigation.navigate("ActualizareProfil")}
                                    custom_styles={{ color: SharedVariables.darkOrange }}
                                ></BfLabeledButton>
                            </View>

                        </View>

                        <Text style={styles.bigTextStyle}>Abonamentele tale:</Text>

                        <View style={styles.headerStyle}>
                            {this.renderHead("Nume abonament", "Valabilitate")}
                        </View>

                        {
                            this.tableData.forEach(elem =>
                                ourTableColumns.push(this.renderRow(elem.nume, elem.valab, elem.id))
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
        marginLeft: 72,
        fontFamily: "Comic",
    },
    headText1Style: {
        fontSize: 18,
        marginLeft: 10,
        marginTop: 7,
        fontFamily: "Comic",
    },
    headText2Style: {
        fontSize: 18,
        marginLeft: 35,
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