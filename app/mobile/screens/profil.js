import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import SharedVariables from '../shared/assets/shared-variables'
import BfLabeledButton from '../shared/componente/bf-labeled-button';

export default class Test extends React.Component {

    tableSchema = {
        tableHead: ['Nume abonament', 'Valabilitate'],
        tableData: [
            ['Abonament spa', '23'],
            ['Abonament fitness', '17'],
            ['Abonament cardio', '30'],
            ['Abonament golf', '19'],
            ['Abonament înot', '26'],
            ['Abonament spa', '23'],
            ['Abonament fitness', '17'],
            ['Abonament cardio', '30'],

        ]
    }

    render() {
        return (
            <ScrollView style={styles.profilContainer}>

                <View style={styles.userInfoContainer}>
                    <Text style={styles.titleStyle}>Date utilizator</Text>
                    <Text style={styles.textStyle}>Nume: nume_utilizator</Text>
                    <Text style={styles.textStyle}>Prenume: prenume_utilizator</Text>
                    <Text style={styles.textStyle}>Email: email_utilizator</Text>

                    <BfLabeledButton
                        title="Actualizare profil"
                        onPress={() => this.props.navigation.navigate("ActualizareProfil")}
                    ></BfLabeledButton>
                </View>

                <Text style={styles.bigTextStyle}>Abonamentele tale:</Text>

                

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    profilContainer: {
        backgroundColor: "#f5f5f5",
        width: "100%",
        height: "100%",
    },
    titleStyle: {
        color: SharedVariables.darkOrange,
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 10,
    },
    bigTextStyle: {
        color: SharedVariables.darkOrange,
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 20,
        fontSize: 25,
    },
    textStyle: {
        fontSize: 17,
    },
    userInfoContainer: {
        marginTop: 50,
        marginLeft: 20,
    },
});