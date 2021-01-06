import React from "react";
import {
    Text,
    View,
} from 'react-native';

import AuthForm from '../shared/componente/auth-form';
import SharedStyles from '../shared/assets/shared-styles'


export default class Autentificare extends React.Component {
    render(){
        return (
            <View style={[SharedStyles.home_container, {backgroundColor:"#ffc12e"}]}>
                <AuthForm navigation = {this.props.navigation}/>
            </View>
        );
    }
}

