import React, { Component } from "react";
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import HeaderEditProfile from "../components/HeaderEidtProfile";

function EditProfileScreen(props) {
    return (
        <View style={styles.root}>
            <HeaderEditProfile style={styles.headerX}></HeaderEditProfile>
            <View style={styles.body}>
                <View style={styles.background}>
                    <ImageBackground
                        style={styles.image}
                        imageStyle={styles.imageStyle}
                        source={require("../assets/images/photo-1506143925201-0252c51780b0.jpg")}
                    >
                        <View style={styles.editBox}>
                            <View style={styles.editView}>
                                <Text style={styles.textEdit}>EDIT PROFILE</Text>
                                <View style={styles.form}>
                                    <View style={styles.name}>
                                        <FontAwesomeIcon
                                            name={"user-circle-o"}
                                            style={styles.iconUser}
                                        ></FontAwesomeIcon>
                                        <TextInput
                                            placeholder="Name"
                                            placeholderTextColor="rgba(0,0,0,1)"
                                            clearTextOnFocus={true}
                                            style={styles.textInputName}
                                        ></TextInput>
                                    </View>
                                    <View style={styles.filler}></View>
                                    <View style={styles.phone}>
                                        <MaterialCommunityIconsIcon
                                            name="cellphone-iphone"
                                            style={styles.iconPhone}
                                        ></MaterialCommunityIconsIcon>
                                        <TextInput
                                            placeholder="Contact Number"
                                            placeholderTextColor="rgba(0,0,0,1)"
                                            keyboardType="phone-pad"
                                            maxLength={20}
                                            clearTextOnFocus={true}
                                            style={styles.textInputPhone}
                                        ></TextInput>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.filler}></View>
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate("Profile")}
                                style={styles.editButton}
                            >
                                <IoniconsIcon
                                    name="md-arrow-forward"
                                    style={styles.iconNext}
                                ></IoniconsIcon>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "rgb(255,255,255)"
    },
    headerX: {
        height: 58,
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
        flex: 1,
        marginBottom: 143,
        marginTop: 136,
        alignSelf: "center"
    },
    background: {
        height: 711,
        marginTop: -149
    },
    image: {
        width: 360,
        height: 686,
        marginTop: 11,
        position: "absolute",
    },
    imageStyle: {
        opacity: 0.69
    },
    editBox: {
        width: 360,
        height: 380,
        marginTop: 41
    },
    textEdit: {
        color: "rgba(0,0,0,1)",
        fontSize: 24,
        alignSelf: "center"
    },
    form: {
        height: 152,
        marginTop: 65
    },
    name: {
        height: 50,
        backgroundColor: "rgba(255,255,255,0.3)",
        opacity: 1,
        borderRadius: 5,
        flexDirection: "row"
    },
    iconUser: {
        color: "rgba(0,0,0,1)",
        fontSize: 33,
        marginLeft: 12,
        alignSelf: "center"
    },
    textInputName: {
        height: 30,
        color: "rgba(0,0,0,1)",
        fontSize: 14,
        flex: 1,
        marginRight: 20,
        marginLeft: 13,
        marginTop: 10
    },
    filler: {
        flex: 1
    },
    phone: {
        height: 50,
        backgroundColor: "rgba(251,247,247,0.3)",
        opacity: 1,
        borderRadius: 5,
        flexDirection: "row",
        marginBottom: 26
    },
    iconPhone: {
        color: "rgba(0,0,0,1)",
        fontSize: 33,
        marginLeft: 12,
        alignSelf: "center"
    },
    textInputPhone: {
        height: 30,
        color: "rgba(0,0,0,1)",
        fontSize: 14,
        flex: 1,
        marginRight: 20,
        marginLeft: 21,
        marginTop: 10
    },
    editView: {
        marginTop: 45,
        marginLeft: 40,
        marginRight: 40
    },
    editButton: {
        width: 95,
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 0,
        borderBottomWidth: 1,
        height: 61,
        justifyContent: "center",
        marginBottom: 29,
        marginLeft: 132
    },
    iconNext: {
        color: "rgba(0,0,0,1)",
        fontSize: 26,
        alignSelf: "center"
    }
});

export default EditProfileScreen;
