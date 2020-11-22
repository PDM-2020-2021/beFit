import React from "react";
import {
    Text,
    View,
} from 'react-native';

import SharedStyles from '../shared/assets/shared-styles'


export default class Autentificare extends React.Component {
    render(){
        return (
            <View style={SharedStyles.container}>
                <Text>Autentificare</Text>
            </View>
        );
    }
}

