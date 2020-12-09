import React from 'react';
import {
    StyleSheet,
    View,
    DrawerLayoutAndroid,
    Button,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import SharedVariables from '../assets/shared-variables';
import BfLabeledButton from '../componente/bf-labeled-button'
export default class BfDrawer extends React.Component {
    constructor(props) {
        super(props);
    }
    navigationView = () => (
        <View style={[styles.drawerContainer]}>
            <View style={styles.drawerLogo}>
                <Image style={styles.drawerImage} source={require('../static/logo/logo125px.png')} />
            </View>

            <View style={styles.drawerContent}>
                <BfLabeledButton
                    onPress={() => this.props.navigation.navigate("Profil")}
                    title={'Profil'}
                    custom_styles={styles.textActiune}
                />
                <BfLabeledButton
                    onPress={() => this.props.navigation.navigate("Abonamente")}
                    title={'Abonamente'}
                    custom_styles={styles.textActiune}
                />
                <BfLabeledButton
                    onPress={() => this.props.navigation.navigate("Test")}
                    title={'Încărcare cont'}
                    custom_styles={styles.textActiune}
                />
            </View>

            <View style={styles.drawerFooter}>
                <BfLabeledButton
                    onPress={() => console.log('Deconectare')}
                    title={'Deconectare'}
                    custom_styles={styles.textDeconectare}
                />
            </View>
        </View>
    );
    render() {
        return (
            <DrawerLayoutAndroid
                ref={(r) => this.drawer = r}
                drawerWidth={300}
                drawerPosition={"left"}
                renderNavigationView={this.navigationView}
            >
                {this.props.content}
            </DrawerLayoutAndroid>
        )
    }
}
const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        backgroundColor: SharedVariables.bckgColor,
    },
    drawerLogo: {
        padding: 30,
        alignContent: 'center',
        alignItems: 'center',
        height: 155,
    },
    drawerImage: {
    },
    drawerContent: {
        height: '100%',
        paddingLeft: 20,
        paddingTop: 100
    },
    drawerFooter: {
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
    },
    textDeconectare: {
        fontFamily: 'Comic',
        color: 'black',
        fontSize: 16,
    },
    textActiune: {
        fontFamily: 'Comic',
        marginBottom: 30,
        color: 'black',
        fontSize: 22,
    }
});