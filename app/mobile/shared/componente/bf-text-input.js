import React from 'react';
import {
    TextInput,
    StyleSheet,
    View,
    Image,
} from 'react-native';

import SharedVariables from '../assets/shared-variables';


const BfTextInput = (props) => {
    const [value, setValue] = React.useState();

    const styles = StyleSheet.create({
        component_container: {
            flexDirection: 'row',
            borderBottomColor: SharedVariables.bckgColor,
            borderBottomWidth: 2,
            width: props.width,
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
            color: SharedVariables.bckgColor,
            marginBottom: 2,
            fontSize: 20,
            padding: 0,
            margin: 0,
            width: props.width,
        },
    });

    return (
        <View style={styles.component_container}>
            <Image
                style={styles.image}
                source={props.image}
            />
            <TextInput
                editable
                maxLength={props.maxLength}
                style={styles.input}
                onFocus={text => setValue('')}
                onChangeText={text => setValue(text)}
                placeholder={props.placeholder}
                placeholderTextColor= {SharedVariables.bckgColor}
                value={value}
            />
        </View>
    );
}
export default BfTextInput; 