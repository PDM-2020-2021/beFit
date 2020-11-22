import React from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  StatusBar
} from 'react-native';

import * as Font from 'expo-font';
import BfLabeledButton from '../shared/componente/bf-labeled-button';
import SharedStyles from '../shared/assets/shared-styles';


export default class Acasa extends React.Component {
  state = {
    assetsLoaded: false,
  }

  async loadAssets() {
    if (!this.state.assetsLoaded) {
      console.log('await');
      await Font.loadAsync(
        { Comic: require('../shared/assets/fonts/Comic.ttf') }
      );
      console.log('exit');
      this.setState({ assetsLoaded: true });
    }
  }

  render() {
    this.loadAssets();
    if (this.state.assetsLoaded) {
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
    else {
      return (
        <View style={SharedStyles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  }
}