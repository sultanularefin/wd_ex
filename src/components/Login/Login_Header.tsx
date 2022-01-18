import {Text, View} from "../Themed";
import {TouchableOpacity} from "react-native";
import {CommonActions} from "@react-navigation/native";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";


export interface Edit_Filter_Navigation_component_in_Filter_Page_Props{
    displayHeight: number,
    displayWidth: number,
    navigation:any,
}
const Login_Header: React.FC<Edit_Filter_Navigation_component_in_Filter_Page_Props> = ({
                                                                                                      navigation,
                                                                                                      displayHeight,
                                                                                                      displayWidth,

                                                                                                  }) => {


// const Login_Header= () =>{

    return(
        <View style={{
            height: displayHeight/10,
            // backgroundColor: 'white',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            // backgroundColor: 'white',
            backgroundColor: 'blue',
            width: displayWidth,
            marginBottom: 10,
        }}>


            <View
                style={{
                    // flex: 1,
                    height: '100%',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    width: displayWidth,
                    // backgroundColor: 'blue',

                }}
            >




                {/*partner name and image starts here*/}





                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        // backgroundColor: 'red',
                        // paddingStart: 16,
                        width: '45%',
                        alignItems: 'flex-start',
                        alignSelf: 'center',
                        alignContent: 'flex-start',
                        paddingLeft: 20,
                        height: '100%',


                    }}
                >


                        <View style={{
                            flexDirection: 'row',
                            justifyContent: "flex-start",
                            alignItems: "center",
                            // backgroundColor: 'gold',
                        }}
                        >


                            <View style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                width: '90%',
                            }}>

                                <Text style={{
                                    fontSize: 36,
                                    fontWeight: 'bold',
                                    alignSelf: 'flex-start',
                                    color: 'teal',
                                }}>
                                    Login


                                </Text>

                            </View>



                        </View>





                </View>




                {/*partner name and image starts here*/}

            </View>



        </View>


    );
}

export default Login_Header;
