import React, {useEffect} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    Alert, useWindowDimensions,
} from "react-native";
import {CommonActions,useTheme} from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from 'expo-linear-gradient';


import Keychain from "react-native-keychain";

const foodImage = require('./../../assets/foodIMage2.png');
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MonoText} from "../components/StyledText";


export interface Props {
    // navigation:NavigationRoute,
    // props: {
    //
    // },
    navigation: any,
}


const SecondPage_WithNavigation: React.FC<Props> = ({ navigation}) => {

    const {colors} = useTheme();


    const displayWidth = useWindowDimensions().width;
    const displayHeight = useWindowDimensions().height;



    // Final return begin herr....
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFA500" barStyle="light-content" />

            <View style={{

                // height: displayHeight / 3,
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: "white",
                // justifyContent: 'flex-start',
            }}>

                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: "grey",
                }}>Welcome to Bolt</Text>
                {/* <View
                    style={{
                        borderRadius: 3,
                        paddingHorizontal: 4,
                        marginVertical: 7,

                    }}


                >

                    <MonoText>Select Filters to Generate Report</MonoText>
                </View>*/}

            </View>


            <View style={{
                flex: 2,
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "red",
                backgroundColor: "white",
                width: displayWidth,
            }}>
                <Animatable.Image
                    animation="bounceIn"
                    //@ts-ignore
                    duraton="2000"
                    source={foodImage}
                    // style={styles.logo}
                    // resizeMode="stretch"
                    // resizeMode="stretch"
                    // resizeMode="contain"
                    resizeMode="cover"

                />

                {/* <Image
            source={splashImage}
            style={{

              // width: 50,
              height: 100,
              resizeMode: 'contain',

              // height: '20%',
              // width: '28%',

            }}


        />*/}
            </View>
            <Animatable.View
                style={[
                    styles.footer,
                    {
                        // backgroundColor: colors.background,
                    },
                ]}
                animation="fadeInUpBig">


                <View style={{
                    alignItems: "center",
                    marginTop: 30,
                    borderRadius: 6,
                }}>


                    {/*linear-gradient(90deg, #667EEA 0%, #64B6FF 100%);*/}
                    {/*box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);*/}
                    {/*border-radius: 6px;*/}


                    <TouchableOpacity onPress={() => navigation.navigate("Login_with_Phone")}>
                        <LinearGradient
                            colors={["#667EEA", "#64B6FF"]}
                            style={{
                                width: (displayWidth/2),
                                height: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 6,
                                flexDirection: "row",
                            }}>
                            <Text style={styles.textSign}>Login With Phone</Text>

                        </LinearGradient>
                    </TouchableOpacity>
                </View>



                <View style={styles.button}>


                            <Text
                                style={

                                    {
                                        // color: 'lightgrey',
                                        color: 'grey',
                                        // color: "#05375a",
                                        fontSize: 16,
                                        fontWeight: "bold",
                                    }
                                }>
                                Shop With us
                            </Text>


                </View>



            </Animatable.View>
        </View>
    );


    // final return begin herr....
};

export default SecondPage_WithNavigation;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#FFA500",
        backgroundColor: "#FFFFFF",
    },

    footer: {
        flex: 1,
        backgroundColor: "#fff",
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    logo: {
        width: height_logo,
        height: height_logo,
        borderRadius: 80,
    },

    text: {
        color: "grey",
        marginTop: 5,
    },
    button: {
        alignItems: "center",
        marginTop: 30,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        flexDirection: "row",
    },
    textSign: {
        color: "white",
        fontWeight: "bold",
    },
});
