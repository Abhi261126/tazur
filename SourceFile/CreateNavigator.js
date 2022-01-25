import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import Dashboard from "./Dashboard";
import Otp from "./Otp";
import SignUp from "./SignUp";
import OnbordingPage from "./OnbordingPage";


// import SignUp from "./SignUp";
// import DashBoard from "./DashBoard";


const Stack = createStackNavigator();

const CreateNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{
                headerShown: false
                }}>
            <Stack.Screen
                    name= "OnbordingPage"
                    component={OnbordingPage}
                    headerShown={false}
                />
                <Stack.Screen
                    name= "Login"
                    component={Login}
                    options={{headerLeft: null}}

                />
               
                 <Stack.Screen
                    name= "Otp"
                    component={Otp}
                    options={{headerLeft: null}}

                />
                <Stack.Screen
                    name= "SignUp"
                    component={SignUp}
                    options={{headerLeft: null}}

                />
               
                 <Stack.Screen
                    name= "Dashboard"
                    component={Dashboard}
                    options={{headerShown: false}}

                />
            </Stack.Navigator>
    </NavigationContainer>
    )
}

export default CreateNavigator;
