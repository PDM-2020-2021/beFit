import React from "react";
import { View, Text, Button } from "react-native";

export default function Autentificare({ navigation }) {
    return (
        <View>
            <Text>Autentificare</Text>
            <Button title="Inregistrare" onPress={() => navigation.navigate("Inregistrare")} />
        </View>
    );
}