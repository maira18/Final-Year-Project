import React, {Component} from "react";
import {StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, {Ellipse} from "react-native-svg";
import HeaderProfile from "../components/HeaderProfile";

function ProfileScreen(props) {
    return (
        <View style={styles.root}>
            {/*header*/}
            <View style={[styles.container, styles.headerX]}>
                <View style={styles.iconRow}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Home')}
                        style={styles.button}
                    >
                        <MaterialCommunityIconsIcon
                            name={"arrow-left"}
                            style={styles.icon}
                        ></MaterialCommunityIconsIcon>
                    </TouchableOpacity>
                    <Text style={styles.profile}>Profile</Text>
                </View>
                <View style={styles.iconRowFiller}></View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Edit')}
                    style={styles.button}
                >
                    <MaterialCommunityIconsIcon
                        name={"account-edit"}
                        style={styles.icon}
                    ></MaterialCommunityIconsIcon>
                </TouchableOpacity>
            </View>
            {/*body*/}
            <View style={styles.body}>
                <View style={styles.ellipseStack}>
                    <Svg viewBox="0 0 859.43 890.30" style={styles.ellipse}>
                        <Ellipse
                            strokeWidth={1}
                            fill="rgba(255,255,255,1)"
                            cx={430}
                            cy={445}
                            rx={429}
                            ry={445}
                        ></Ellipse>
                    </Svg>
                    <Text style={styles.pageName}>WELCOME</Text>
                    <View style={styles.userInfo}>
                        <View style={styles.avatarRow}>
                            <Image
                                source={require("../assets/images/dup.jpg")}
                                resizeMode="stretch"
                                style={styles.avatar}
                            ></Image>
                            <View style={styles.userNameColumn}>
                                <Text style={styles.userName}>Maira Akram</Text>
                                <Text style={styles.userPhone}>+92 336-------</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(226,222,219,1)",
        flexDirection: "row"
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
        padding: 11,
        alignSelf: "center",
    },
    icon: {
        color: "rgba(0,0,0,1)",
        fontSize: 25,
    },
    root: {
        flex: 1,
        backgroundColor: "rgb(255,255,255)"
    },
    headerX: {
        width: 360,
        height: 63,
        elevation: 15,
        shadowOffset: {
            height: 7,
            width: 1
        },
        shadowColor: "rgba(0,0,0,1)",
        shadowOpacity: 0.1,
        shadowRadius: 5
    },
    body: {
        width: 360,
        backgroundColor: "rgba(226,222,219,1)",
        flex: 1
    },
    ellipse: {
        top: 9,
        left: 0,
        width: 859,
        height: 890,
        position: "absolute"
    },
    pageName: {
        top: 0,
        left: 85,
        color: "rgba(0,0,0,1)",
        position: "absolute",
        fontSize: 24
    },
    userInfo: {
        top: 70,
        left: 85,
        height: 125,
        position: "absolute",
        right: 453
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 225
    },
    userName: {
        color: "black",
        fontSize: 26
    },
    userPhone: {
        color: "rgba(0,0,0,1)",
        fontSize: 20,
        marginTop: 12
    },
    userNameColumn: {
        width: 147,
        marginLeft: 46,
        marginTop: 24,
        marginBottom: 18
    },
    avatarRow: {
        height: 100,
        flexDirection: "row",
        marginRight: 28
    },
    ellipseStack: {
        height: 899,
        marginTop: 34,
        marginLeft: -50,
        marginRight: -449
    }
});

export default ProfileScreen;
