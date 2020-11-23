import React from 'react';
import {
    View,
    Image,
    ActivityIndicator,
    StatusBar,
    Text
} from 'react-native';

import SharedStyles from '../shared/assets/shared-styles'

export default class Test extends React.Component {

    render() {
        return (
            <View style ={SharedStyles.container}> 
                    <Text>Pagina de teste</Text>
            </View>
        );
    }
}