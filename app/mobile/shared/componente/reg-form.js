import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import BfTextInput from './bf-text-input';
import BfButton from './bf-button';
import BfLabeledButton from './bf-labeled-button';
import SharedVariables from '../assets/shared-variables';
import UserRegisterModel from '../logic/models/user-reg-model'
import * as api from '../logic/api-requester';
import * as logic from '../logic/logic'

export default class RegForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            password: '',
        };
    }
    submit() {
        const { firstname, lastname, email, phone, password } = this.state;
        var user = new UserRegisterModel(firstname, lastname, email, phone, password);
        api.post('/auth/signup', user)
            .then(data => {
                if (data)
                    return data.token;
            })
            .then(token => {
                if (token)
                    logic.handleUserAuthenticationRequest(token, this.props.navigation);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <View style={style.container}>
                <BfTextInput
                    placeholder="Nume"
                    maxLength={15}
                    image={require('../static/icons/hooman.png')}
                    custom_styles={style.input}

                    value={this.state.lastname}
                    onChangeText={text => this.setState({ lastname: text })}
                />
                <BfTextInput
                    placeholder="Prenume"
                    maxLength={20}
                    image={require('../static/icons/hooman.png')}
                    custom_styles={style.input}

                    value={this.state.firstname}
                    onChangeText={text => this.setState({ firstname: text })}
                />
                <BfTextInput
                    placeholder="Email"
                    maxLength={30}
                    image={require('../static/icons/email.png')}
                    custom_styles={style.input}

                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <BfTextInput
                    placeholder="Telefon"
                    maxLength={10}
                    image={require('../static/icons/phone.png')}
                    custom_styles={style.input}

                    value={this.state.phone}
                    onChangeText={text => this.setState({ phone: text })}
                />
                <BfTextInput
                    placeholder="Parola"
                    secured={true}
                    maxLength={15}
                    image={require('../static/icons/password.png')}
                    custom_styles={style.input}

                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                />
                <BfButton
                    title="Înregistrează-te"
                    custom_styles={style.button}
                    onPress={() => this.submit()}
                />
                <BfLabeledButton
                    title="Sau autentifică-te"
                    custom_styles={style.labeled_button}
                    onPress={() => this.props.navigation.navigate("Autentificare")}
                />

            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        padding: 30,
        paddingTop: 60,
        width: '80%',
        height: 400,
        backgroundColor: SharedVariables.bckgColor2,
        borderRadius: 5,
        shadowColor: SharedVariables.bckgColor,
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