import {View} from "../Themed";
import {TouchableOpacity} from "react-native";
import {CommonActions} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";


export interface Header_With_Back_Handler_FilterPage_Props{
    displayHeight: number,
    displayWidth: number,
    navigation:any,
}
const Header_With_Back_Handler_FilterPage: React.FC<Header_With_Back_Handler_FilterPage_Props> = ({
                                                                                                      navigation,
                                                                                                      displayHeight,
                                                                                                      displayWidth,

                                                                                                  }) => {


// const Header_With_Back_Handler_FilterPage= () =>{

    return(

        <View style={{
            height: displayHeight/10,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundColor: 'teal',
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
                    backgroundColor: 'blue',

                }}
            >




                {/*partner name and image starts here*/}


                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        // backgroundColor: 'teal',
                        backgroundColor: 'white',
                        paddingStart: 16,
                        width: displayWidth/6,


                    }}
                >


                    <TouchableOpacity
                        onPress={() =>

                            navigation.dispatch(CommonActions.goBack())

                        }
                        style={{
                            width: (displayWidth/6) -16,
                        }}
                    >
                        <Ionicons
                            name='arrow-back-sharp'
                            size={40}
                            color='grey'
                        />
                    </TouchableOpacity>
                </View>



                <View style={{

                    flexDirection: 'column',
                    justifyContent: 'center',
                    // backgroundColor: 'teal',
                    backgroundColor: 'white',
                    // paddingStart: 16,
                    width: (displayWidth- (displayWidth/6)),


                }}
                >







                </View>

                {/*partner name and image starts here*/}

            </View>



        </View>
    );
}

export default Header_With_Back_Handler_FilterPage;
