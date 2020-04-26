import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function HeaderEditProfile(props) {
    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.iconRow}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Profile')}
                    style={styles.leftIconButton}
                >
                    <MaterialCommunityIconsIcon
                        name="arrow-left"
                        style={styles.leftIcon2}
                    ></MaterialCommunityIconsIcon>
                </TouchableOpacity>
                <Text style={styles.profile}>Edit Profile</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(226,222,219,1)",
        flexDirection: "row"
    },
    leftIconButton: {
        padding: 11,
        alignSelf: "center"
    },
    leftIcon2: {
        color: "rgba(0,0,0,1)",
        fontSize: 24
    },
    icon: {
        color: "rgba(0,0,0,1)",
        fontSize: 25,
    },
    profile: {
        color: "rgba(0,0,0,1)",
        fontSize: 20,
        // fontFamily: "regular",
        marginLeft: 32
    },
    iconRow: {
        height: 25,
        flexDirection: "row",
        marginLeft: 16,
        marginTop: 20
    },
});

export default HeaderEditProfile;
