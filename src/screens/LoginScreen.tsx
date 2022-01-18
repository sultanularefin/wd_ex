import React, {useState, useEffect} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert,
    Button,
    ActivityIndicator, useWindowDimensions,
} from "react-native";

import {CommonActions} from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
// import LinearGradient from "expo-linear-gradient";


import {unwrapResult} from "@reduxjs/toolkit";
import { LinearGradient } from 'expo-linear-gradient';
import {
    AntDesign,
    Ionicons,
    MaterialCommunityIcons,

} from "@expo/vector-icons";
import {useAppSelector,useAppDispatch} from "../appStore/app/hooks";
import {
    select_email_password_login_response,
    email_Password_for_login,
    email_password_login_responseInterface2,
    localStorageInterface,
    // login_With_Email_Password_Async,
    login_With_Email_Password_Spare_share_GRabbany,
    // select_email_password_login_response,
    select_Redux_auth_store_data,
} from "../appStore/Reducers/authSlicewd";
import LoginLabel from "../components/Login/LoginLabel";
import Login_Header from "../components/Login/Login_Header";
import HeaderBack_Button_Login_Page from "../components/Login/HeaderBack_Button_Login_Page";




export interface Props {

    navigation: any,
}

const LoginScreen: React.FC<Props> = (
    {navigation}) => {





    const dispatch = useAppDispatch();
    const [loadingState, setLoadingState] = useState<boolean>(false);
    const [login_data_State, setLogin_Data_State] = React.useState({
        email: "",
        password: "",
        check_textInputChange: false,
        secureTextEntry: true,
        isValidEmail: false,//true,
        isValidPassword: false,//true,
        error: "",
        emailerror: "",
        passwordError: "",
    });



    // more redux ,,,,

    const deviceWidth = useWindowDimensions().width;

    const deviceHeight = useWindowDimensions().height;

    const loginData: email_password_login_responseInterface2 = useAppSelector(select_email_password_login_response);
    const localStorageData: localStorageInterface= useAppSelector(select_Redux_auth_store_data);


    // more redux ends here...







    const handleEmailChange = (val:string) => {
        // login_data_State.email
        // console.log("val at handleEmailChange: ",val );

        const tempData = {
            ...login_data_State,
            email: val,
            isValidEmail: false,
        };

        setLogin_Data_State(tempData);

    };

    const validateEmail = (val:string) => {
        const regex =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(val).toLowerCase());
    };



    const handlePasswordChange = (val:string) => {



        const temp_Password_Data = {
            ...login_data_State,
            password: val,
            isValidPassword: false,
        };

        setLogin_Data_State(temp_Password_Data);
    };

    const updateSecureTextEntry = () => {
        setLogin_Data_State({
            ...login_data_State,
            secureTextEntry: !login_data_State.secureTextEntry,
        });
    };


    const login_handler = async () => {


        if ((login_data_State.email) && (login_data_State.password)) {
            console.log("Logging in");


            try {

                setLoadingState(true);
                const payload_login_with_email_password: email_Password_for_login = {

                    email: login_data_State.email,
                    password: login_data_State.password,
                };
                const login_with_email_password_action = await dispatch(login_With_Email_Password_Spare_share_GRabbany(payload_login_with_email_password));

                const login_with_email_password_response_temp = unwrapResult(login_with_email_password_action);

                if (login_with_email_password_response_temp !== undefined) {



                    const login_with_email_password_response: email_password_login_responseInterface2 = login_with_email_password_response_temp;

                    console.log("login_with_email_password_response: [in login page]",login_with_email_password_response);

                    if (login_with_email_password_response.accessToken) {

                        setLoadingState(false);
                        console.log("at SplashScreen1");




                        return setTimeout(
                            () => {

                                return navigation.dispatch(
                                    CommonActions.reset({
                                        index: 0,
                                        routes: [{name: "FoodUploadByContributor"}],

                                    }),
                                );
                            },
                            0,
                        );
                    }
                }

            } catch (error_in_login__check) {
                console.log("error_in_login__check: ", error_in_login__check);
                setLoadingState(false);
                // setModalVisibleState(false);

            }
        }
    };





    const login_handler_WithAPI_Change = /*async */ () => {


        if ((login_data_State.email) && (login_data_State.password)) {
            console.log("Logging in");


            try {

                setLoadingState(true);

                return setTimeout(
                    () => {

                        return navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{name: "FoodUploadByContributor"}],

                            }),
                        );
                    },
                    0,
                );




            } catch (error_in_login__check) {
                console.log("error_in_login__check: ", error_in_login__check);
                setLoadingState(false);
                // setModalVisibleState(false);

            }
        }
    };

    // const goToForgotPassword = () => navigation.navigate("ForgetPasswordScreen");

    const goToSignUPPage = () => navigation.navigate("SignUpScreen");


    // FInalVIew Begins here..

    return (
        <View style={{

            flex: 10,

            backgroundColor: "silver",
            flexDirection: "column",

        }}>
            <View
                style={{
                    // flex: 0.8,
                    height: deviceHeight/20,
                    backgroundColor: 'silver',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                }}
            >
            </View>

            <HeaderBack_Button_Login_Page
                displayHeight={deviceHeight}
                displayWidth={deviceWidth}
                navigation={navigation}
            />

            {/*@ts-ignore*/}
            <View style={{
                flex: 2,
                flexDirection: "column",
                justifyContent: "flex-end",
                paddingHorizontal: 20,
                paddingBottom: 50,
                // backgroundColor: 'lightskyblue',
            }}>
                <Text style={styles.text_header}>Login </Text>

            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                  {/*  <Mail stroke="#05375a" fill="none" width={20} height={20} />*/}

                    <MaterialCommunityIcons
                        name={"email-outline"}
                        // color={'FF6666'}
                        color="#FF6666"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Email"
                        placeholderTextColor="#A9A9A9"
                        style={styles.textInput}
                        autoCapitalize="none"
                        // value={email}
                        onChangeText={(val) => handleEmailChange(val)}
                    />
                </View>
                <View>
                    <Text style={{color: "red"}}>{login_data_State.emailerror}</Text>
                </View>

                <Text
                    style={{
                        color: "#05375a",
                        fontSize: 18,
                        marginTop: 35,
                    }}>
                    Password
                </Text>
                <View style={styles.action}>
                   {/* <Lock stroke="#05375a" fill="none" width={20} height={20} />*/}

                    <Ionicons
                        name={"ios-lock-closed-outline"}
                        // color={'FF6666'}
                        color="#FF6666"
                        size={20}
                    />


                    <TextInput
                        placeholder="Your Password"
                        secureTextEntry={Boolean(login_data_State.secureTextEntry)}
                        placeholderTextColor="#A9A9A9"
                        style={styles.textInput}
                        // autoCapitalize="none"
                        autoCapitalize="none"
                        onChangeText={ (val:string) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {login_data_State.secureTextEntry ? (

                            <MaterialCommunityIcons
                                name={"television"}
                                // color={'FF6666'}
                                color="#FF6666"
                                size={20}
                            />

                          /*  <EyeOff stroke="#05375a" fill="none" width={20} height={20} />*/


                        ) : (
                            <AntDesign
                                name={"logout"}
                                // color={'FF6666'}
                                color="#FF6666"
                                size={20}
                            />
                            /*<Eye stroke="#05375a" fill="none" width={20} height={20} />*/
                        )}
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{color: "red"}}>{login_data_State.passwordError}</Text>
                </View>
                <View>
                    <Text style={{color: "red"}}>{login_data_State.error}</Text>
                </View>

                {
                    !loadingState
                        ? null
                        : (<ActivityIndicator
                            size="large"
                            color="black"
                            animating={loadingState}
                            hidesWhenStopped={true}
                        />)
                }

                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        // onPress={() => {logIn()}}
                        onPress={() =>
                        {
                            // login_handler()
                            login_handler_WithAPI_Change();
                        }



                        }>
                        <LinearGradient
                            colors={["#FFA500", "#FFA500"]}
                            // colors={["lightskyblue", "lightsteelblue"]}
                            style={styles.signIn}>
                            <Text
                                style={[
                                    styles.textSign,
                                    {
                                        color: "#fff",
                                    },
                                ]}>
                                Login
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>





                </View>






            </Animatable.View>
        </View>
    );

    // FInalVIew ends here..
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFA500",
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer: {
        flex: 8,
        flexDirection: "column",
        backgroundColor: "#fff",
        // backgroundColor: "tomato",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    row: {
        flexDirection: "row",
        marginTop: 30,
        marginLeft: 100,
    },
    text_header: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30,
    },
    text_footer: {
        color: "#05375a",
        fontSize: 18,
    },
    action: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#FF0000",
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 0 : -12,
        paddingLeft: 10,
        color: "#05375a",
    },
    errorMsg: {
        color: "#FF0000",
        fontSize: 14,
    },
    button: {
        alignItems: "center",
        marginTop: 50,
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
    signUp: {
        width: "80%",
        height: 20,
        borderRadius: 30,
    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold",
    },

    forgot_password: {
        alignItems: "center",
        marginTop: 30,
    },
});


