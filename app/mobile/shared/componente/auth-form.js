import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import BfTextInput from './bf-text-input';
import BfButton from './bf-button';
import BfLabeledButton from './bf-labeled-button';
import SharedVariables from '../assets/shared-variables';
import UserAuthModel from '../logic/models/user-auth-model';
import * as api from '../logic/api-requester'

export default class AuthForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            response: null,
            error: null,
            isLoaded: false,
        };
        this.submit = this.submit.bind(this);
    }

    submit() {
        const { email, password } = this.state;
        var user = new UserAuthModel(email, password);
        api.post('http://localhost:8080/api/auth/signin', user)
            .then(data => {
                console.log(data);
            })
            .then((response) => {
                console.log(response);
            },
            (error) => {
                console.log(error);
            });

    }
    render() {
        return (
            <View style={style.container} >
                <BfTextInput
                    placeholder="Email"
                    maxLength={20}
                    image={require('../static/email.png')}
                    custom_styles={style.input}

                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <BfTextInput
                    placeholder="Parola"
                    secured={true}
                    maxLength={20}
                    image={require('../static/email.png')}
                    custom_styles={style.input}

                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                />
                <BfButton
                    title="Autentifică-te"
                    onPress={() => this.submit()}
                    custom_styles={style.button}
                />
                <BfLabeledButton
                    title="Sau înregistrează-te"
                    custom_styles={style.labeled_button}
                    onPress={() => this.props.navigation.navigate("Inregistrare")}
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