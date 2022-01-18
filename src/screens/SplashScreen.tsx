import { StatusBar } from 'expo-status-bar';
import {
    Alert,
    FlatList,
    Image, KeyboardAvoidingView,
    Platform, SafeAreaView, ScrollView,
    StyleSheet,
    TouchableOpacity,
    useWindowDimensions,
} from 'react-native';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import EditScreenInfo from '../components/EditScreenInfo';

import { Ionicons } from '@expo/vector-icons';
// import Ionicons from "react-native-vector-icons/Ionicons";

import {
    Text,
    View,
} from '../components/Themed';
import {MonoText} from "../components/StyledText";
import {useEffect, useState} from "react";
import StartDate from "../components/userAnalyzerComponents_Android/StartDate";
import EndDate from "../components/userAnalyzerComponents_Android/EndDate";
import CheckBoxComponent from "../components/userAnalyzerComponents_Android/CheckBoxComponent";
import {useAppDispatch} from "../appStore/app/hooks";
import {CommonActions} from "@react-navigation/native";

import AsyncStorage from '@react-native-async-storage/async-storage';

// const calendarImage = require('../../assets/images/date_icon.png');
const splashImage = require('./../../assets/SplashScreenTC.png');

export interface UserAnalyzer_Page_Props {

    props: {

    },
    navigation:any,
}


export interface one_User_Activity_Status_interface{


    index: number,
    status: string,
    // geolocation_Lat_Long: typeof location,
    isSelected: boolean,
    // string: string,

}


export interface checkBox_update_for_forward__Chat {

    index: number,
    value: boolean,
}




const UserAnalyzer_Page: React.FC<UserAnalyzer_Page_Props> = ({props, navigation,}) => {
// export default function UserAnalyzer_Page() {

    const displayWidth = useWindowDimensions().width;
    const displayHeight = useWindowDimensions().height;







    useEffect(() => {





        const checkUserSignedIn = async () => {


            try {
                const userId2 = await AsyncStorage.getItem('user_id');

                if (userId2 !== null)

                {


                    console.log(" << THIS IF BLOCK WILL NOT BE EXECUTEDDDDD. >>");

                    return setTimeout(
                        () => {
                            return navigation.dispatch(
                                CommonActions.reset({
                                    index: 0,
                                    // routes: [{name: 'LoginScreen'}],

                                    routes: [{name: 'HomeCategories'}],




                                })
                            );

                        },
                        2000
                    );





                }

                else
                {


                    console.log(`(userId2 === null) =>?? ${userId2}`);

                    return setTimeout(
                        () => {
                            return navigation.dispatch(
                                CommonActions.reset({
                                    index: 0,
                                    // routes: [{name: 'LoginScreen'}],

                                    routes: [{name: 'SecondPage_WithNavigation'}],




                                })
                            );

                        },
                        2000
                    );
                }



            } catch (error:any) {
                console.log('error in userToken checking: ', error);
            }


        };

        checkUserSignedIn();




    }, [navigation]);


    console.log("at Splash Screen: ");


    return (

        <SafeAreaView
            style={{

                flex: 10,
                flexDirection: 'column',
            }}
        >
            <View style={SplashScreen_Styles.container}>



                <Image
                    source={splashImage}
                    style={{
                        height: '100%',
                        width: '100%',

                    }}
                />

            </View>
        </SafeAreaView>
    );
}

const SplashScreen_Styles = StyleSheet.create({
    container: {
        flex: 10,
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: "column",
        justifyContent: 'flex-start',
    },

});





export default UserAnalyzer_Page;
