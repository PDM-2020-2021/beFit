import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

import BfTextInput from './bf-text-input'

const AuthForm = (props) => {
    return (
        <View>

            <BfTextInput
                placeholder="Email"
                width={250}
                maxLength={20}
                image={require('../static/email.png')}
            />

            <BfTextInput
                placeholder="Email"
                width={250}
                maxLength={10}
                image={require('../static/email.png')}
            />
        </View>
    );
}


export default AuthForm; 