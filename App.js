import VerificationScreen from "./screens/VerificationScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import HomeSentTo from "./screens/HomeSentTo";
import HomeSentFrom from "./screens/HomeSentFrom";
import ImageGallery  from "./screens/ImageGallery";
const RootStack = createStackNavigator(
    {
        Register: RegisterScreen,
        Verify: VerificationScreen,
        Home: HomeScreen,
        Profile: ProfileScreen,
        Edit: EditProfileScreen,
        SentTo: HomeSentTo,
        SentFrom: HomeSentFrom,
        Gallery: ImageGallery,
    },
    {
        initialRouteName: "Register",
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}