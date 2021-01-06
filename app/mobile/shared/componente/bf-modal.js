import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    Modal,
    TouchableOpacity
} from 'react-native';
import SharedVariables from '../assets/shared-variables'


export default class BfModal extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.props.modalVisible}
                onRequestClose={this.props.onRequestClose}>
                <View style={styles.modalView}>
                    <View style={styles.modalContainer}>
                        <Image source={require('../static/icons/Checkbox.png')}
                            style={styles.bifaStyle}></Image>
                        <Text style={styles.questionStyle}>
                            {this.props.modalText}
                        </Text>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={styles.modalBtn}
                                onPress={this.props.onYes}
                                activeOpacity={0.5}>
                                <Image
                                    source={require('../static/icons/yes.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={this.props.onNo}
                                style={styles.modalBtn}
                                activeOpacity={0.5}>
                                <Image source={require('../static/icons/no.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
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
});