import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LiveScreen() {
    return (
        <View style={StyleSheet.container}>
            <Text>Live Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    }
});