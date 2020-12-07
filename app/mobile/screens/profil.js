import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import SharedVariables from '../shared/assets/shared-variables'
import BfLabeledButton from '../shared/componente/bf-labeled-button';

export default class Profil extends React.Component {

    constructor(props) {
        super(props);
    }

    tableData = [
        {id: 1, nume: 'Abonament spa', valab: 17},
        {id: 2, nume: 'Abonament fitness', valab: 18},
        {id: 3, nume: 'Abonament cardio', valab: 19},
        {id: 4, nume: 'Abonament golf', valab: 20},
    ];

    renderRow(val1, val2, id) {
        return (
            <View key={id} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                    <Text>{val1}</Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch' }} >
                    <Text>{val2}</Text>
                </View>
            </View>
        );
    }

    renderHead(val1, val2) {
        return (
            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                    <Text>{val1}</Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch' }} >
                    <Text>{val2}</Text>
                </View>
            </View>
        );
    }

    render() {
        let ourTableColumns = [];
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

                <View>
                    {this.renderHead("Nume abonament", "Valabilitate")}
                </View>

                {
                    this.tableData.forEach(elem =>
                        ourTableColumns.push(this.renderRow(elem.nume, elem.valab, elem.id))
                    )
                }

                <View>
                    {ourTableColumns}
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
});