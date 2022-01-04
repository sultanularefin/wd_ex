import { StatusBar } from 'expo-status-bar';
import {
    Alert,
    FlatList,
    Image, Keyboard, KeyboardAvoidingView,
    Platform, SafeAreaView, ScrollView,
    StyleSheet, TextInput,
    TouchableOpacity,
    useWindowDimensions,
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import EditScreenInfo from '../components/EditScreenInfo';

import {Ionicons, Octicons,MaterialCommunityIcons} from '@expo/vector-icons';

import {
    Text,
    View,
} from '../components/Themed';
import {MonoText} from "../components/StyledText";
import React, {useRef, useState} from "react";
import StartDate from "../components/userAnalyzerComponents_Android/StartDate";
import EndDate from "../components/userAnalyzerComponents_Android/EndDate";
import CheckBoxComponent from "../components/userAnalyzerComponents_Android/CheckBoxComponent";
import {useAppDispatch, useAppSelector} from "../appStore/app/hooks";
import {CommonActions} from "@react-navigation/native";
import Search_People from "../components/filter_People_Components/Search_People";
import User_Items from "../components/filter_People_Components/User_Items";


const calendarImage = require('../../assets/images/date_icon.png');
import {Profile, UserActivity} from "../customInterfaces/UserActivity";



import Header_With_Back_Handler_FilterPage from "../components/filter_People_Components/Header_With_Back_Handler_FilterPage";
import Edit_Filter_Navigation_component_in_Filter_Page
    from "../components/filter_People_Components/Edit_Filter_Navigation_component_in_Filter_Page";
// import {Profile} from "../appStore/Reducers/authSlice";
import {
    filter_person_by_Search_String,
    reset_search,
    select_ALL_Profiles
} from "../appStore/Reducers/UserAnalyzerSlice";
import LoginLabel from "../components/filter_People_Components/LoginLabel";
import PhoneInput from "../components/filter_People_Components/PhoneInput";
import {LinearGradient} from "expo-linear-gradient";




export interface Login_with_Phone_Props {

    props: {

    },
    navigation:any,
}


const Login_with_Phone: React.FC<Login_with_Phone_Props> = ({props, navigation,}) => {



    const dispatch = useAppDispatch();



    const refPhone = useRef<TextInput>(null);



    const displayWidth = useWindowDimensions().width;
    const displayHeight = useWindowDimensions().height;


    const [user_PhoneState, setUser_PhoneState] = useState<string>('');


    const setPhone = (phone_letters:string) => {
        console.log('e: at setPhone: ', phone_letters);

        // setUserPasswordState((e.password || ''));

        setUser_PhoneState(phone_letters);
    };



    const handle_Login_Press = async () => {


        if (!user_PhoneState) {
            Alert.alert('Please enter your phone Number');

            return;
        }


        let isPhone = true;


        // @ts-ignore
        const phoneFormatter = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;


        if (phoneFormatter.test(user_PhoneState) === false) {

            isPhone = false;

        }


        if (isPhone) {

            console.log(`${user_PhoneState} is correct Phone`);

            navigation.navigate("VerifyOTP");


        }
        else{

            Alert.alert('Please enter valid phone Number');


        }
    }






        return (

        <SafeAreaView
            style={{

                flex: 10,
                flexDirection: 'column',
            }}
        >


            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{

                    // flex: 9,
                    flexDirection: 'column',
                    justifyContent: "flex-start",
                    height: displayHeight,
                    // backgroundColor: 'gold',

                }}
            >



                    <View style={user_Analyzer_Styles.container}>






                        {/*teal navigator custom begins here...*/}

                        <View
                            style={{
                                // flex: 0.8,
                                height: displayHeight/20,
                                backgroundColor: 'white',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                            }}
                        >
                        </View>


                        <Header_With_Back_Handler_FilterPage
                            displayHeight={displayHeight}
                            displayWidth={displayWidth}
                            navigation={navigation} />





                        {/*0.8 teal colored header ends here...*/}


                        {/*Edit Filter portion begins here...*/}

                        <Edit_Filter_Navigation_component_in_Filter_Page
                            displayHeight={displayHeight}
                            displayWidth={displayWidth}
                            navigation={navigation}
                        />

                        {/*Edit FIlter portion ends here..*/}




                        {/*Phone label begins here..*/}
                        <LoginLabel
                            displayHeight={displayHeight}
                            displayWidth={displayWidth}
                            navigation={navigation}
                        />

                        {/*Phone Input begins here...*/}


                        <PhoneInput
                            totalHeight={displayHeight}
                            user_PhoneState2={user_PhoneState}
                            updatePhone={setPhone}
                            ref={refPhone}
                            />


                        {/*Phone input ends here...*/}



                        {/*empty view...*/}
                        <View style={{
                            flexDirection: 'column',
                            flex: 0.2,
                        }}
                        >
                        </View>
                        {/*empty view...*/}


                        <View style={{
                            alignItems: "center",
                            marginTop: 30,
                            borderRadius: 6,
                        }}>


                            {/*linear-gradient(90deg, #667EEA 0%, #64B6FF 100%);*/}
                            {/*box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);*/}
                            {/*border-radius: 6px;*/}


                            <TouchableOpacity onPress={handle_Login_Press}>
                                <LinearGradient
                                    colors={["#667EEA", "#64B6FF"]}
                                    style={{
                                        width: (displayWidth/1.2),
                                        height: 50,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: 6,
                                        flexDirection: "row",
                                    }}>
                                    <Text style={{
                                        color: "white",
                                        fontWeight: "bold",
                                    }}>Login</Text>

                                </LinearGradient>
                            </TouchableOpacity>
                        </View>

                    </View>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const user_Analyzer_Styles = StyleSheet.create({
    container: {
        flex: 10,
        alignItems: 'center',
        flexDirection: "column",
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    inputContainer: {
        borderTopColor: '#e5e6e9',
        borderLeftColor: '#dfe0e4',
        borderRightColor: '#dfe0e4',
        borderBottomColor: '#d0d1d5',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        width: '90%',
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Login_with_Phone;
