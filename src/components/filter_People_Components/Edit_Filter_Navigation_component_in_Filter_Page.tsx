import {Text, View} from "../Themed";
import {TouchableOpacity} from "react-native";
import {CommonActions} from "@react-navigation/native";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";


export interface Edit_Filter_Navigation_component_in_Filter_Page_Props{
    displayHeight: number,
    displayWidth: number,
    navigation:any,
}
const Edit_Filter_Navigation_component_in_Filter_Page: React.FC<Edit_Filter_Navigation_component_in_Filter_Page_Props> = ({
                                                                                                      navigation,
                                                                                                      displayHeight,
                                                                                                      displayWidth,

                                                                                                  }) => {


// const Edit_Filter_Navigation_component_in_Filter_Page= () =>{

    return(
        <View style={{
            height: displayHeight/10,
            // backgroundColor: 'white',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundColor: 'white',
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
                    backgroundColor: 'white',

                }}
            >




                {/*partner name and image starts here*/}
                <View style={{

                    flexDirection: 'column',
                    justifyContent: 'center',
                    // backgroundColor: 'orange',
                    backgroundColor: 'white',
                    // paddingStart: 16,
                    width: '55%',


                }}
                >
                </View>




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


                    }}
                >

                    <TouchableOpacity
                        onPress={() => navigation.navigate("EditUserAnalyzer_Page")}
                        style={{
                            // width: '45%',
                        }}
                    >
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: "flex-start",
                            alignItems: "center",
                        }}
                        >


                            <View style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                width: '60%',
                            }}>

                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    alignSelf: 'flex-start',
                                    color: 'teal',
                                }}>
                                    Edit Filter


                                </Text>

                            </View>

                            <View style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                width: '30%',
                                // backgroundColor: 'tomato',
                            }}>

                                <MaterialCommunityIcons
                                    name='tune'
                                    size={40}
                                    color='teal'
                                />

                            </View>

                        </View>

                    </TouchableOpacity>



                </View>




                {/*partner name and image starts here*/}

            </View>



        </View>


    );
}

export default Edit_Filter_Navigation_component_in_Filter_Page;
