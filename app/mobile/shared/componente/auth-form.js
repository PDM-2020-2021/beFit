import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import BfTextInput from './bf-text-input';
import BfButton from './bf-button';
import BfLabeledButton from './bf-labeled-button';
import SharedVariables from '../assets/shared-variables';


export default class AuthForm extends React.Component {
    render() {
        return (
            <View style={style.container} >
                <BfTextInput
                    placeholder="Email"
                    maxLength={30}
                    image={require('../static/icons/email.png')}
                    custom_styles={style.input}
                />
                <BfTextInput
                    placeholder="Parola"
                    secured = {true}
                    maxLength={15}
                    image={require('../static/icons/password.png')}
                    custom_styles={style.input}
                />
                <BfButton
                    title="Autentifică-te"
                    custom_styles={style.button}
                />
                <BfLabeledButton
                    title="Sau înregistrează-te"
                    custom_styles={style.labeled_button}
                    onPress= {()=>this.props.navigation.navigate("Inregistrare")}
                />

            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 30,
        height: 300,
        width: '80%',
        backgroundColor: SharedVariables.bckgColor2,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 22,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    button: {
        marginTop: 25,
        alignSelf: "center",
    },
    labeled_button: {
        marginTop: 13,
        fontSize: 12,
        alignSelf: "center",
        color: SharedVariables.darkOrange,
    },
});