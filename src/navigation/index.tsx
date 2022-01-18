/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import UserAnalyzer_Page from '../screens/UserAnalyzer_Page';
import NotFoundScreen from '../screens/NotFoundScreen';
// import TabOneScreen from '../screens/TabOneScreen';
// import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';


import {
    StyleSheet,
    // useWindowDimensions,
} from 'react-native';
// import EditUserAnalyzer_Page from "../screens/EditUserAnalyzer_Page";
// import Filter_People_Page from "../screens/Filter_People_Page";
import SplashScreen from "../screens/SplashScreen";
import SecondPage_WithNavigation from "../screens/SecondPage_WithNavigation";
import HomeCategories from "../screens/HomeCategories";
import LoginScreen from "../screens/LoginScreen";
import Registration_Screen from "../screens/Registration_Screen";
import VerifyOTP from "../screens/VerifyOTP";
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator initialRouteName={"SplashScreen"}>



            <Stack.Group screenOptions={{presentation: 'modal'}}>



                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="VerifyOTP"
                    component={VerifyOTP}
                    options={{
                        headerShown: false,
                    }}
                />



                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{
                        headerShown: false,
                    }}
                />


                <Stack.Screen
                    name="Registration_Screen"
                    component={Registration_Screen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="HomeCategories"
                    component={HomeCategories}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="SecondPage_WithNavigation"
                    component={SecondPage_WithNavigation}
                    options={{
                        headerShown: false,
                    }}
                />




                <Stack.Screen
                    name="UserAnalyzer_Page"
                    component={UserAnalyzer_Page}
                    options={{
                        headerShown: false,
                    }}
                />



               {/* <Stack.Screen
                    name="EditUserAnalyzer_Page"
                    component={EditUserAnalyzer_Page}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Filter_People_Page"
                    component={Filter_People_Page}
                    options={{
                        headerShown: false,
                    }}
                />*/}

            </Stack.Group>




            {/*<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />*/}

        </Stack.Navigator>
    );
}

const AppStyles = StyleSheet.create({
    commonHeaderStyle64: {
        backgroundColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'black',
    },

});


