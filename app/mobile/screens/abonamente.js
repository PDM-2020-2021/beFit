import React from "react";

import AppTile from '../shared/componente/tile'
import SharedStyles from '../shared/assets/shared-styles'
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet } from 'react-native';

export default class Abonamente extends React.Component {
    render() {
        return (
            <ScrollView style={SharedStyles.scroll_container}>
                <AppTile
                    navigation={this.props.navigation}
                    id={1}
                    title="Abonament spa"
                    getImage={require('../shared/static/images/spa.jpg')}
                    valability={23}
                    price={50}
                ></AppTile>

                <AppTile
                    navigation={this.props.navigation}
                    id={2}
                    title="Abonament fitness"
                    getImage={require('../shared/static/images/fitness.jpg')}
                    valability={17}
                    price={35}
                ></AppTile>

                <AppTile
                    navigation={this.props.navigation}
                    id={3}
                    title="Abonament cardio"
                    getImage={require('../shared/static/images/cardio.jpg')}
                    valability={30}
                    price={89}
                ></AppTile>

                <AppTile
                    navigation={this.props.navigation}
                    id={4}
                    title="Abonament golf"
                    getImage={require('../shared/static/images/golf.jpg')}
                    valability={19}
                    price={40}
                ></AppTile>

                <AppTile
                    navigation={this.props.navigation}
                    id={5}
                    title="Abonament înot"
                    getImage={require('../shared/static/images/pool.jpg')}
                    valability={26}
                    price={63}
                ></AppTile>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
});