



import React, {useState} from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Modal, useWindowDimensions,
    ListRenderItem,
    TouchableWithoutFeedback,
    FlatList,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import {
    AntDesign,
    Ionicons,
    MaterialCommunityIcons,
    FontAwesome, Feather,

} from "@expo/vector-icons";


import * as Animatable from 'react-native-animatable';
import HeaderBack_Button_Reg_Page from "../components/Login/HeaderBack_Button_Reg_Page";
import {CommonActions} from "@react-navigation/native";
import {
    email_Password_for_login,
    email_password_login_responseInterface2,
    login_With_Email_Password_Spare_share_GRabbany
} from "../appStore/Reducers/authSlicewd";
import {unwrapResult} from "@reduxjs/toolkit";
import {useAppDispatch} from "../appStore/app/hooks";


export interface Registration_Screen_Props {

    navigation: any,
}


const Registration_Screen: React.FC<Registration_Screen_Props> = ({navigation,}) => {




// }
// const RegistrationScreen = ({navigation}) => {

    const [reg_Data_State, setData_State] = React.useState({
        email: '',
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const dispatch = useAppDispatch();

    const [role_Modal_Visible_State, setRole_Modal_Visible_State] = useState(false);
    const [loadingState, setLoadingState] = useState<boolean>(false);

    const invoke_Role_Selection = () => {

        setRole_Modal_Visible_State(true);



    };


    const [country_CallingCode_Modal_Visible_State, setCountry_CallingCode_Modal_Visible_State] = useState(false);

    const invoke_CountryCode_Selection = () => {

        setCountry_CallingCode_Modal_Visible_State(true);
    };







    const deviceHeight = useWindowDimensions().height;
    const deviceWidth = useWindowDimensions().width;


    const signUP_Handler = async () => {


        if ((reg_Data_State.email) && (reg_Data_State.password)) {
            console.log("Logging in");


            try {

                setLoadingState(true);
                const payload_login_with_email_password: email_Password_for_login = {

                    email: reg_Data_State.email,
                    password: reg_Data_State.password,
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


    const email_Change = (email:string) => {

        console.log("email: ",email);
            setData_State({
                ...reg_Data_State,
                email: email,

            });

    };

    const handlePasswordChange = (password2:string) => {

        console.log("password2: ",password2);

        setData_State({
            ...reg_Data_State,
            password: password2
        });
    };

    const handle_User_Name_Change = (user_Name:string) => {

        console.log("user_Name: ",user_Name);

        setData_State({
            ...reg_Data_State,
            username: user_Name
        });
    };

    const handleConfirmPasswordChange = (confirm_Password_Text:string) => {
        console.log("confirm_Password_Text: ",confirm_Password_Text);
        setData_State({
            ...reg_Data_State,
            confirm_password: confirm_Password_Text,
        });
    };

    const updateSecureTextEntry = () => {
        setData_State({
            ...reg_Data_State,
            secureTextEntry: !reg_Data_State.secureTextEntry
        });
    };

    const updateConfirmSecureTextEntry = () => {
        setData_State({
            ...reg_Data_State,
            confirm_secureTextEntry: !reg_Data_State.confirm_secureTextEntry
        });
    };

    return (
        <View style={signUpScreenStyles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>



            <View style={signUpScreenStyles.header}>


                <TouchableOpacity
                    onPress={() =>
                        navigation.dispatch(CommonActions.goBack())
                    }
                    style={{
                        width: (deviceWidth/4) -16,
                    }}
                >
                    <Ionicons
                        name='arrow-back-sharp'
                        size={40}
                        color='white'
                    />
                </TouchableOpacity>

                <View style={{

                    flexDirection: 'column',
                    justifyContent: 'center',
                    // backgroundColor: 'teal',
                    // backgroundColor: 'silver',
                    // paddingStart: 16,
                    width: (deviceWidth- (deviceWidth/4)),


                }}
                >

                    <Text style={{
                            ...signUpScreenStyles.text_header,


                        }}>




                        Register Now!

                    </Text>



                </View>





            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={signUpScreenStyles.footer}
            >
                <ScrollView>
                    <Text style={signUpScreenStyles.text_footer}>Email</Text>

                    {/*Email begins here...*/}
                    <View style={signUpScreenStyles.action}>


                        <MaterialCommunityIcons
                            name={"email-outline"}
                            color={'grey'}
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Email"
                            style={signUpScreenStyles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => email_Change(val)}
                        />

                    </View>

                    {/*Email ends here..*/}

                    {/*username begins here...*/}
                    <Text style={[signUpScreenStyles.text_footer, {
                        marginTop: 35
                    }]}>Username</Text>
                    <View style={signUpScreenStyles.action}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your username"
                            secureTextEntry={false}
                            style={signUpScreenStyles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handle_User_Name_Change(val)}
                        />

                    </View>
                    {/* 3 --- username ends here..*/}


                    {/* 5---Password begins here...*/}

                    <Text style={[signUpScreenStyles.text_footer, {
                        marginTop: 35
                    }]}>Password</Text>
                    <View style={signUpScreenStyles.action}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Password"
                            secureTextEntry={reg_Data_State.secureTextEntry ? true : false}
                            style={signUpScreenStyles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {reg_Data_State.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    {/* 5---Password ends here...*/}





                    {/* 6---Confirm Password begins here...*/}

                    <Text style={[signUpScreenStyles.text_footer, {
                        marginTop: 35
                    }]}>Confirm Password</Text>
                    <View style={signUpScreenStyles.action}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Password"
                            secureTextEntry={reg_Data_State.secureTextEntry ? true : false}
                            style={signUpScreenStyles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {reg_Data_State.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>

                    {/* 6---Confirm Password ends here...*/}


                    <View style={signUpScreenStyles.textPrivate}>
                        <Text style={signUpScreenStyles.color_textPrivate}>
                            By signing up you agree to our
                        </Text>
                        <Text style={[signUpScreenStyles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                        <Text style={signUpScreenStyles.color_textPrivate}>{" "}and</Text>
                        <Text style={[signUpScreenStyles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
                    </View>

                    <View style={signUpScreenStyles.button}>
                        <TouchableOpacity
                            style={signUpScreenStyles.signIn}
                            onPress={() => {signUP_Handler}}
                        >
                            <LinearGradient
                                colors={['#08d4c4', '#01ab9d']}
                                style={signUpScreenStyles.signIn}
                            >
                                <Text style={[signUpScreenStyles.textSign, {
                                    color:'#fff'
                                }]}>Sign Up</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={[signUpScreenStyles.signIn, {
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[signUpScreenStyles.textSign, {
                                color: '#009387'
                            }]}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

// export default RegistrationScreen;

const signUpScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        // paddingBottom: 50,
        // backgroundColor: "tomato",
        alignItems: "center",
        flexDirection: "row",

    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        // textAlign: "center",
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    color_textPrivate: {
        color: 'grey',
    },
});


export default Registration_Screen;
