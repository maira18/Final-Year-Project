import React, {Component} from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image,
    ImageBackground,
    ScrollView
} from "react-native";
import HeaderHome from "../components/HeaderHome";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function HomeSentTo(props) {
    return (
        <View style={styles.root}>
            {/*header*/}
            {/* <View style={[styles.container, styles.headerX]}>
                <View style={styles.rowIcon}>
                    <TouchableOpacity
                        style={styles.buttonProfile}
                    >
                        <MaterialIconsIcon
                            name="menu"
                            style={styles.iconProfile}
                        ></MaterialIconsIcon>
                    </TouchableOpacity>
                    <Text style={styles.textProfile}>Home</Text>
                </View>
                <View style={styles.rowIcon2}></View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Profile")}
                    style={styles.buttonProfile}
                >
                    <FontAwesomeIcon
                        name="user-circle-o"
                        style={styles.iconUser}
                    ></FontAwesomeIcon>
                </TouchableOpacity>
            </View> */}
            <HeaderHome style={styles.headerX}></HeaderHome>
            {/*body*/}
            <View style={styles.body}>
                <View style={styles.tabs}>
                    <TouchableOpacity style={styles.available}
                        onPress={() => props.navigation.navigate('Home')}>
                        <Text style={styles.textAvailable}>Available</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sharedTo}
                        onPress={() => props.navigation.navigate('SentTo')}>
                        <Text style={styles.textSharedTo}>Shared To</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sharedFrom}
                        onPress={() => props.navigation.navigate('SentFrom')}>
                        <Text style={styles.textSharedFrom}>Shared From</Text>
                    </TouchableOpacity>
                </View>
                {/*scroll*/}
                <ScrollView>
                    <View style={styles.categories}>
                        <View style={styles.rowColumn}>
                            <View style={styles.rowCol1}>
                                <TouchableOpacity style={styles.ribbonButton}>
                                    <ImageBackground
                                        source={require("../assets/images/image1.jpg")}
                                        resizeMode="cover"
                                        style={styles.image}
                                    >
                                        <View style={styles.image}></View>
                                        <Text style={styles.textCount}>3</Text>
                                        <View style={styles.textView}>
                                            <Text style={styles.textName}>Mahnoor</Text>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(226,222,219,1)",
        flexDirection: "row"
    },
    //header
    iconProfile: {
        color: "rgba(0,0,0,1)",
        fontSize: 24,
        marginLeft: 10,
    },
    textProfile: {
        color: "rgba(0,0,0,1)",
        fontSize: 20,
        marginLeft: 10,
        alignSelf: "center",
    },
    rowIcon: {
        flex: 1,
        flexDirection: "row",
        alignSelf: "center",
    },
    rowIcon2: {
        flex: 1,
        flexDirection: "row"
    },
    buttonProfile: {
        marginRight: 15,
        alignSelf: "center"
    },
    iconUser: {
        color: "rgba(0,0,0,1)",
        fontSize: 25,
        alignSelf: "center"
    },
    headerX: {
        height: 60,
        elevation: 15,
        shadowOffset: {
            height: 7,
            width: 1
        },
        shadowColor: "rgba(0,0,0,1)",
        shadowOpacity: 0.1,
        shadowRadius: 5
    },
    //body
    root: {
        flex: 1,
        backgroundColor: "rgb(255,255,255)"
    },
    body: {
        flex: 1,
    },
    tabs: {
        height: 80,
        backgroundColor: "rgba(226,222,219,1)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        elevation: 0,
    },
    available: {
        width: 100,
        height: 38,
        backgroundColor: "rgba(247,247,247,0)",
        alignSelf: "center",
        opacity: 1,
        borderRadius: 100,
    },
    textAvailable: {
        color: "rgba(0,0,0,1)",
        marginTop: 12,
        alignSelf: "center"
    },
    sharedTo: {
        width: 100,
        height: 38,
        backgroundColor: "rgba(247,247,247,0)",
        alignSelf: "center",
        opacity: 1,
        borderRadius: 5,
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1
    },
    textSharedTo: {
        color: "rgba(0,0,0,1)",
        marginTop: 12,
        alignSelf: "center"
    },
    sharedFrom: {
        width: 100,
        height: 38,
        backgroundColor: "rgba(247,247,247,0)",
        alignSelf: "center",
        opacity: 1,
        borderRadius: 100,
    },
    textSharedFrom: {
        color: "rgba(0,0,0,1)",
        marginTop: 12,
        alignSelf: "center"
    },
    categories: {
        backgroundColor: "rgba(255,255,255,1)",
        flex: 1
    },
    rowColumn: {
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15
    },
    rowCol1: {
        height: 150,
        flexDirection: "row"
    },
    ribbonButton: {
        width: 150,
        height: 150,
        backgroundColor: "rgba(230, 230, 230,1)",
        elevation: 18,
        borderRadius: 5,
        overflow: "hidden"
    },
    image: {
        flex: 1
    },
    textView: {
        height: 25,
        backgroundColor: "rgba(21,19,19,0.5)",
        justifyContent: "center"
    },
    textCount: {
        color: "rgba(247,252,253,1)",
        fontSize: 12,
        alignSelf: "center",
    },
    textName: {
        color: "rgba(247,252,253,1)",
        fontSize: 14,
        alignSelf: "center"
    },
});

export default HomeSentTo;
