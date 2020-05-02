import React, {Component, createRef} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {Alert, Text, View, TouchableOpacity, ImageBackground,} from 'react-native';
import CodeFiled from 'react-native-confirmation-code-field';

export default class VerificationScreen extends Component {

    constructor(props){
        super(props);
        this.saveAndNex=this.saveAndNext.bind(this);
        this.state={
            sendCode:'',
            code:'',
            name:'',
            contact:''
        };
    }
    checkingCode = code => {
        this.state.sendCode=this.props.navigation.state.params.code.toString();
        if (code !== this.state.sendCode) {
            console.log(code);
            console.log(sendCode);
            Alert.alert(
                'Confirmation Code',
                'Code not match!',
                [{text: 'OK'}],
                {
                    cancelable: false,
                },
            );
        }
        else{
            Alert.alert('Confirmation Code', 'Successful!', [{text: 'OK',onPress: () => this.saveAndNext()}], {
                cancelable: false,
            });
        }
    };

    cellProps = ({ /*index, isFocused,*/ hasValue}) => {
        if (hasValue) {
            return {
                style: [styles.input, styles.inputNotEmpty],
            };
        }
        return {
            style: styles.input,
        };
    };

    async saveAndNext()
    {
        this.state.contact=this.props.navigation.state.params.contact.toString();
        this.state.name=this.props.navigation.state.params.name.toString();
        var url = 'http://192.168.10.10:3000/user/registerUser';
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
        });
        let resData=await res.json();
        if(resData.status==200)
        {
            console.log("user registered");
            this.props.navigation.navigate("Home");
        }
    }

    containerProps = {style: styles.inputWrapStyle};

    render() {
        return (
            <View style={styles.background}>
                <ImageBackground
                    style={styles.rect2}
                    imageStyle={styles.rect2_imageStyle}
                    source={require("../assets/images/photo-1506143925201-0252c51780b0.jpg")}
                >
                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputLabel}>VERIFICATION CODE</Text>
                        <Text style={styles.inputSubLabel}>
                            Please type the validation code sent
                        </Text>
                        <Text style={styles.inputSubLabel}>to + 92 336 4643193</Text>
                        <CodeFiled
                            blurOnSubmit={false}
                            variant="clear"
                            codeLength={6}
                            keyboardType="numeric"
                            cellProps={this.cellProps}
                            containerProps={this.containerProps}
                            onChangeText={(text) => this.setState({code:text})}
                            onFulfill={this.checkingCode}
                        />
                        <View>
                            <TouchableOpacity
                                onPress={this.goHome}
                                style={styles.continue}
                            >
                                <Text style={styles.text2}>VERIFY</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    rect2: {
        top: 0,
        left: 0,
        position: "absolute",
        right: 0,
        bottom: 0
    },
    rect2_imageStyle: {
        opacity: 0.69
    },
    continue: {
        top: 30,
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
    text2: {
        width: 98,
        color: "rgba(0,0,0,1)",
        fontSize: 16,
        marginTop: 15,
        marginLeft: 40,
        alignSelf: "center",
    },
    inputWrapper: {
        alignItems: 'center',
    },
    inputLabel: {
        paddingTop: 100,
        paddingBottom: 10,
        color: 'black',
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
    },
    inputSubLabel: {
        color: 'black',
    },
    inputWrapStyle: {
        height: 50,
        marginTop: 30,
    },
    input: {
        height: 50,
        width: 40,
        borderRadius: 3,
        borderColor: 'black',
        borderWidth: 0.2,
        color: 'black',
        backgroundColor: 'rgba(255,255,255,0.6)',
        // ...Platform.select({
        //     web: {
        //         lineHeight: 46,
        //     },
        // }),
    },
    inputNotEmpty: {
        backgroundColor: 'rgba(0,0,0,0)',
    },
    nextButton: {
        marginTop: 20,
        width: 100,
        height: 50,
        borderRadius: 15,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        // IOS
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        // Android
        elevation: 5,
    },
    nextButtonText: {
        //transform: [{ translateX: -3 }, { rotate: '45deg' }],
        //borderColor: '#85CFB8',
        //color: 'white',
        alignItems: 'center',
        fontSize: 18,
    },
});
