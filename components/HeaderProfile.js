import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function HeaderProfile(props) {
    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.iconRow}>
                <MaterialIconsIcon
                    name="menu"
                    style={styles.icon}
                ></MaterialIconsIcon>
                <Text style={styles.profile}>Home</Text>
            </View>
            <View style={styles.iconRowFiller}></View>
            <TouchableOpacity /* Conditional navigation not supported at the moment */
                onPress={() => this.props.navigation.navigate('Profile')}
                style={styles.button}
            >
                <MaterialCommunityIconsIcon
                    name={"account-edit"}
                    style={styles.icon2}
                ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(223 ,189,164,1)",
        flexDirection: "row"
    },
    icon: {
        color: "rgba(0,0,0,1)",
        fontSize: 25,
        width: 18,
        height: 25
    },
    profile: {
        color: "rgba(0,0,0,1)",
        fontSize: 20,
        marginLeft: 32
    },
    iconRow: {
        height: 25,
        flexDirection: "row",
        marginLeft: 16,
        marginTop: 20
    },
    iconRowFiller: {
        flex: 1,
        flexDirection: "row"
    },
    button: {
        width: 26,
        height: 25,
        marginRight: 13,
        marginTop: 15
    },
    icon2: {
        color: "rgba(0,0,0,1)",
        fontSize: 25
    }
});

export default HeaderProfile;
