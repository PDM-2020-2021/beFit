import React from 'react';
import {
    TextInput,
    StyleSheet,
    View,
    Image,
} from 'react-native';

import SharedVariables from '../assets/shared-variables';


export default class BfTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <View style=
                {
                    [
                        styles.component_container,
                        this.props.custom_styles
                    ]
                }
            >
                <Image
                    style={styles.image}
                    source={this.props.image}
                />
                <TextInput
                    editable
                    underlineColorAndroid='transparent'
                    maxLength={this.props.maxLength}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={SharedVariables.bckgColor}
                    secureTextEntry={this.props.secured}
                    
                    value={this.props.value}
                    onChangeText = {this.props.onChangeText}

                    style=
                    {
                        [
                            styles.input,
                            this.props.custom_styles
                        ]
                    }
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    component_container: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        borderBottomColor: SharedVariables.bckgColor,
        borderBottomWidth: 2,
        margin: 5,
        padding: 1
    },
    image: {
        width: 20,
        height: 20,
        marginTop: 5,
        marginRight: 3,
    },
    input: {
        width: '100%',
        color: SharedVariables.bckgColor,
        borderStyle: 'solid',
        fontFamily: "Comic",
        marginBottom: 2,
        fontSize: 20,
        padding: 0,
        margin: 0,
    },
});