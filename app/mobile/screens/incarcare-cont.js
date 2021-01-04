import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import SharedStyles from '../shared/assets/shared-styles';
import BfDrawer from '../shared/componente/bf-drawer';
import BfButton from '../shared/componente/bf-button';
import * as api from '../shared/logic/api-requester';
import * as storage from '../shared/logic/storage-requester';

export default class Incarcare extends React.Component {
    constructor(props) {
        super(props);
    }
    content = (
        <View style={SharedStyles.container}>
            <BfButton
                custom_styles={styles.btnStyle}
                title="Adaugă bani"
                onPress={() => {
                    storage.get('user')
                        .then((usr) => {
                            const user = JSON.parse(usr);
                            api.patch('/user/' + user.id + '/balance', {}, { Authorization: `Bearer ${user.token}` })
                                .then(response => {
                                    this.props.navigation.navigate("Profil", { 'balanceNeedsUpdate': true });
                                    this.forceUpdate();
                                })
                                .catch(error => {
                                    console.log(error);
                                });
                        })
                        .catch(error => {
                            console.log(error);
                        });
                }}
            />
        </View>
    );

    render() {
        return (
            <BfDrawer
                content={this.content}
                navigation={this.props.navigation} />
        )
    }
}

const styles = StyleSheet.create({
    btnStyle: {
        marginLeft: 20,
        marginRight: 20,
    }
});