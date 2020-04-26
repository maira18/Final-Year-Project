import VerificationScreen from "./screens/VerificationScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
const RootStack = createStackNavigator(
    {
        Register: RegisterScreen,
        Verify: VerificationScreen,
        Home: HomeScreen,
        Profile: ProfileScreen,
        Edit: EditProfileScreen,
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