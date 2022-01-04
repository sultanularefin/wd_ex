
import {
    Alert,

    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TextInput,
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
import Verify_Text from "../components/filter_People_Components/Verify_Text";
import OTPLabel from "../components/filter_People_Components/OTPLabel";
import OTPInput from "../components/filter_People_Components/OTPInput";




export interface VerifyOTP_Props {

    props: {

    },
    navigation:any,
}


const VerifyOTP: React.FC<VerifyOTP_Props> = ({props, navigation,}) => {



    const dispatch = useAppDispatch();




    const refPhone = useRef<TextInput>(null);



    const displayWidth = useWindowDimensions().width;
    const displayHeight = useWindowDimensions().height;


    const [user_OTP_State, setUser_OTP_State] = useState<string>('');








    const set_OTP = (otp_letters:string) => {
        console.log('e: at set_OTP: ', otp_letters);

        // setUserPasswordState((e.password || ''));

        setUser_OTP_State(otp_letters);
    };



    const handle_OTP_Verify_Press = async () => {


        if (!user_OTP_State) {
            Alert.alert('Please enter OTP number you received.');

            return;
        }

        else if(user_OTP_State.trim().length<4){


            Alert.alert('OTP length too small.');

            return;
        }

        else {
            // SETOPT VALIDATION SUCCESSFUL

            // console.log(`${user_PhoneState} is correct Phone`);

            navigation.navigate("VerifyOTP");


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

                    <Verify_Text
                        displayHeight={displayHeight}
                        displayWidth={displayWidth}
                        navigation={navigation}
                    />

                    {/*Edit FIlter portion ends here..*/}




                    {/*Phone label begins here..*/}
                    <OTPLabel
                        displayHeight={displayHeight}
                        displayWidth={displayWidth}
                        navigation={navigation}
                    />

                    {/*Phone Input begins here...*/}


                    <OTPInput
                        totalHeight={displayHeight}
                        user_OTP_State2={user_OTP_State}
                        update_OTP_Text={set_OTP}
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


                        <TouchableOpacity onPress={handle_OTP_Verify_Press}>
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
                                }}>Verify</Text>

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

export default VerifyOTP;
