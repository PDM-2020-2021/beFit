import React from "react";
import {
    View,
} from 'react-native';

import SharedStyles from '../shared/assets/shared-styles'
import RegForm from '../shared/componente/reg-form';


export default class Inregistrare extends React.Component {
    render() {
        return (
            <View style={[SharedStyles.home_container, {backgroundColor:"#ffc12e"}]}>
                <RegForm navigation = {this.props.navigation}/>
            </View>
        );
    }
}