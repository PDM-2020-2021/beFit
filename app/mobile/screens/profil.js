import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import SharedVariables from '../shared/assets/shared-variables'
import BfLabeledButton from '../shared/componente/bf-labeled-button';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

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

                    <BfLabeledButton title="Actualizare profil"></BfLabeledButton>
                </View>

                <Text style={styles.bigTextStyle}>Abonamentele tale:</Text>
                <View style={styles.tableContainer}>
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#000' }}>
                        <Row data={this.tableSchema.tableHead} style={styles.head} textStyle={styles.text} />
                        <Rows data={this.tableSchema.tableData} textStyle={styles.text} />
                    </Table>
                </View>

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
    tableContainer: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#fff'
    },
    head: {
        height: 50,
        backgroundColor: SharedVariables.darkOrange,
    },
    text: {
        textAlign: "center",
        padding: 10
    }
});