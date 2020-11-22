import React from 'react';
import {
  View,
  Image,
} from 'react-native';

import * as Font from 'expo-font';
import BfLabeledButton from '../shared/componente/bf-labeled-button';
import SharedStyles from '../shared/assets/shared-styles';


export default class Acasa extends React.Component {
  async load() {
    await Font.loadAsync(
      { Comic: require('../shared/assets/fonts/Comic.ttf') }
    )
  }

  render() {
    this.load();
    return (
      <View style={SharedStyles.container}>

        <Image source={require('../shared/static/logo.png')} />

        <BfLabeledButton
          title="Autentificare"
          onPress={() => this.props.navigation.navigate("Autentificare")}
        />

        <BfLabeledButton
          title="Înregistrare"
          onPress={() => this.props.navigation.navigate("Inregistrare")}
        />

        <BfLabeledButton
          title="Abonamente"
          onPress={() => this.props.navigation.navigate("Abonamente")}
        />

      </View>
    );
  }
}




