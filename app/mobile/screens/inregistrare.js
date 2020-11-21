import React from "react";
import { View, Text, Button } from "react-native";

export default function Inregistrare({ navigation }) {
    return (
        <View>
            <Text>Inregistrare</Text>
            <Button title="Autentificare" onPress={() => navigation.navigate("Autentificare")} />
        </View>
    );
}