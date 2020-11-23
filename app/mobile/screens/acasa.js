import React from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  StatusBar,
  StyleSheet
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import BfLabeledButton from '../shared/componente/bf-labeled-button';
import SharedStyles from '../shared/assets/shared-styles';


export default class Acasa extends React.Component {
  state = {
    assetsLoaded: false,
  }

  async loadAssets() {
    if (!this.state.assetsLoaded) {
      await Font.loadAsync(
        { Comic: require('../shared/assets/fonts/Comic.ttf') }
      );
      this.setState({ assetsLoaded: true });
    }
  }

  render() {
    this.loadAssets();
    if (this.state.assetsLoaded) {
      return (
        <View style={SharedStyles.home_container}>

          <Image source={require('../shared/static/logo.png')} />

          <BfLabeledButton
            title="Autentificare"
            onPress={() => this.props.navigation.navigate("Autentificare")}
            custom_styles={styles.labeled_button}
          />

          <BfLabeledButton
            title="Înregistrare"
            onPress={() => this.props.navigation.navigate("Inregistrare")}
            custom_styles={styles.labeled_button}
          />

          <BfLabeledButton
            title="Abonamente"
            onPress={() => this.props.navigation.navigate("Abonamente")}
            custom_styles={styles.labeled_button}
          />
          <BfLabeledButton
            title="Detalii"
            onPress={() => this.props.navigation.navigate("Detalii")}
            custom_styles={styles.labeled_button}
          />

          <BfLabeledButton
            title="Teste"
            onPress={() => this.props.navigation.navigate("Test")}
            custom_styles={styles.labeled_button}
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
const styles = StyleSheet.create({
  labeled_button: {
    color: "#000",
    margin:6 
  }
})