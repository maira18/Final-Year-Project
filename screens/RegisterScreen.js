import React, {Component} from "react";
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    TouchableOpacity,
    TextInput
} from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default class RegisterScreen extends Component {
    constructor(props){
        super(props);
        this.dataPost=this.dataPost.bind(this);
        this.goNext=this.goNext.bind(this);
        this.state={
            name:'',
            contact:'',
            code:'',
        };
    }

    async dataPost(){
        console.log(this.state.name,this.state.contact);
        if((this.state.name)!=="" && (this.state.contact)!=="" ){
        
            var url = 'http://192.168.10.10:3000/user/add';
            const data = {
                name: this.state.name,
                contact: this.state.contact
             }
            let res=await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            let resData=await res.json();
            if(resData.status==200){
                url = 'http://192.168.10.10:3000/user/sendSms';
                let res=await fetch(url, {
                    method: 'POST',
                    body:JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                let resCode=await res.json();
                this.state.code=resCode.code;
                console.log(this.state.code);
                this.goNext();
            }
            else
            {
                console.log("Number already registered");
            }
        }
        else
        {
            console.log("empty fields");
        }
    }

    goNext(){
        this.props.navigation.navigate("Verify",{code:this.state.code, contact:this.state.contact,name:this.state.name});
    }
        render() {
            return (
                <View style={styles.root}>
                    <View style={styles.background}>
                        <ImageBackground
                            style={styles.image}
                            imageStyle={styles.imageStyle}
                            source={require("../assets/images/photo-1506143925201-0252c51780b0.jpg")}
                        >
                        <View>
                            <Text style={styles.account}>Create Account</Text>
                        </View>
                        <View style={styles.terms}></View>
                        <Text style={styles.termsText}>Terms &amp; Conditions</Text>
                        <View style={styles.form}>
                            <View style={styles.name}>
                                <FontAwesomeIcon
                                    name="user-circle-o"
                                    style={styles.iconUser}
                                ></FontAwesomeIcon>
                                <TextInput
                                    placeholder="Username"
                                    placeholderTextColor="rgba(0,0,0,1)"
                                    secureTextEntry={false}
                                    clearTextOnFocus={true}
                                    style={styles.nameInput}
                                    onChangeText={(text) => this.setState({name:text})}
                                ></TextInput>
                            </View>
                            <View style={styles.email}>
                                <MaterialCommunityIconsIcon
                                    name="cellphone-iphone"
                                    style={styles.iconPhone}
                                ></MaterialCommunityIconsIcon>
                                <TextInput
                                    placeholder="Contact Number"
                                    placeholderTextColor="rgba(0,0,0,1)"
                                    keyboardType="phone-pad"
                                    maxLength={20}
                                    secureTextEntry={false}
                                    style={styles.emailInput}
                                    onChangeText={(text) => this.setState({contact:text})}
                                ></TextInput>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={()=>this.dataPost()}
                                    style={styles.continue}
                                >
                                    <Text style={styles.send}>SEND CODE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "rgba(177,210,180,1)"
    },
    background: {
        top: 0,
        left: 0,
        position: "absolute",
        right: 0,
        bottom: 0
    },
    image: {
        top: 0,
        left: 0,
        position: "absolute",
        right: 0,
        bottom: 0
    },
    imageStyle: {
        opacity: 0.69
    },
    terms: {
        flex: 1
    },
    termsText: {
        color: "rgba(0,0,0,0.5)",
        marginBottom: 31,
        alignSelf: "center"
    },
    continue: {
        top: 20,
        height: 55,
        width: 280,
        alignSelf: "center",
        backgroundColor: "rgba(0,0,0,0)",
        position: "absolute",
        opacity: 1,
        borderRadius: 5,
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1
    },
    send: {
        width: 98,
        color: "rgba(0,0,0,1)",
        fontSize: 16,
        marginTop: 15,
        alignSelf: "center",
    },
    form: {
        top: 150,
        position: "absolute",
        right: 40,
        bottom: 0,
        alignSelf: "center",
        height: 171,
        right: 41,
        width: 278,
    },
    name: {
        height: 60,
        backgroundColor: "rgba(255,255,255,0.25)",
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
    nameInput: {
        height: 30,
        color: "rgba(0,0,0,1)",
        fontSize: 14,
        flex: 1,
        marginRight: 16,
        marginLeft: 16,
        alignSelf: "center"
    },
    email: {
        height: 60,
        backgroundColor: "rgba(255,255,255,0.25)",
        opacity: 1,
        borderRadius: 5,
        flexDirection: "row",
        marginTop: 25
    },
    iconPhone: {
        color: "rgba(0,0,0,1)",
        fontSize: 33,
        marginLeft: 12,
        alignSelf: "center"
    },
    emailInput: {
        height: 30,
        color: "rgba(0,0,0,1)",
        flex: 1,
        marginRight: 17,
        marginLeft: 16,
        marginTop: 14
    },
    account: {
        top: 80,
        color: "rgba(0,0,0,1)",
        position: "absolute",
        fontSize: 24,
        alignSelf: "center"
    }
});